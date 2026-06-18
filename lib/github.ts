export interface RepoStats {
  stars: string;
  downloads: string;
}

export async function fetchRepoStats(
  githubRepoUrl: string,
): Promise<RepoStats> {
  try {
    const repoPath = githubRepoUrl
      .replace('https://github.com/', '')
      .replace(/\/$/, '');

    const repoRes = await fetch(
      `https://api.github.com/repos/${repoPath}`,
    );

    if (!repoRes.ok) {
      throw new Error('Failed to fetch repo data');
    }

    const repoData = await repoRes.json();
    const releasesRes = await fetch(
      `https://api.github.com/repos/${repoPath}/releases`,
    );

    if (!releasesRes.ok) {
      throw new Error('Failed to fetch releases');
    }

    const releasesData = await releasesRes.json();
    let totalDownloads = 0;

    if (Array.isArray(releasesData)) {
      releasesData.forEach((release: any) => {
        if (release.assets && Array.isArray(release.assets)) {
          release.assets.forEach((asset: any) => {
            totalDownloads += asset.download_count || 0;
          });
        }
      });
    }

    const formattedStars = repoData.stargazers_count
      ? repoData.stargazers_count >= 1000
        ? `${(repoData.stargazers_count / 1000).toFixed(1)}k+`
        : repoData.stargazers_count.toString()
      : '0';

    const formattedDownloads =
      totalDownloads > 0
        ? totalDownloads >= 1000000
          ? `${(totalDownloads / 1000000).toFixed(1)}M+`
          : totalDownloads >= 1000
            ? `${(totalDownloads / 1000).toFixed(1)}k+`
            : totalDownloads.toString()
        : '0';

    return {
      stars: `${formattedStars} Stars`,
      downloads: `${formattedDownloads} Downloads`,
    };
  } catch (error) {
    console.error('Error fetching repo statistics:', error);

    return {
      stars: '0 Stars',
      downloads: '0 Downloads',
    };
  }
}
