// assets/content-map.js
// Site content partition, keyword tags, and simple search/filter functions

const siteConfig = {
  baseUrl: "https://web-mahjonghu.com",
  siteName: "MahjongHu",
  defaultLang: "zh"
};

const contentPartitions = [
  {
    id: "home",
    title: "首页",
    keywords: ["麻将胡", "首页", "游戏大厅"],
    route: "/"
  },
  {
    id: "rules",
    title: "规则说明",
    keywords: ["麻将胡", "规则", "玩法", "胡牌"],
    route: "/rules"
  },
  {
    id: "tutorial",
    title: "新手教程",
    keywords: ["麻将胡", "教程", "新手", "入门"],
    route: "/tutorial"
  },
  {
    id: "news",
    title: "新闻资讯",
    keywords: ["麻将胡", "新闻", "活动", "公告"],
    route: "/news"
  },
  {
    id: "community",
    title: "玩家社区",
    keywords: ["麻将胡", "社区", "论坛", "交流"],
    route: "/community"
  }
];

const keywordTags = [
  { tag: "麻将胡", category: "核心" },
  { tag: "胡牌技巧", category: "技巧" },
  { tag: "番型计算", category: "规则" },
  { tag: "听牌", category: "术语" },
  { tag: "自摸", category: "术语" },
  { tag: "吃碰杠", category: "操作" },
  { tag: "麻将大赛", category: "活动" },
  { tag: "积分赛", category: "赛事" },
  { tag: "新手福利", category: "活动" },
  { tag: "好友对战", category: "社交" }
];

function searchContentPartitions(query) {
  if (!query || typeof query !== "string") {
    return [];
  }
  const lowerQuery = query.toLowerCase().trim();
  return contentPartitions.filter(partition => {
    const titleMatch = partition.title.toLowerCase().includes(lowerQuery);
    const keywordMatch = partition.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
    return titleMatch || keywordMatch;
  });
}

function filterKeywordTags(category) {
  if (!category || typeof category !== "string") {
    return [];
  }
  return keywordTags.filter(item => item.category === category);
}

function getAllKeywords() {
  const keywordSet = new Set();
  contentPartitions.forEach(partition => {
    partition.keywords.forEach(kw => keywordSet.add(kw));
  });
  keywordTags.forEach(item => keywordSet.add(item.tag));
  return Array.from(keywordSet);
}

function buildSitemap() {
  return contentPartitions.map(partition => {
    const url = `${siteConfig.baseUrl}${partition.route}`;
    return {
      url: url,
      title: partition.title,
      keywords: partition.keywords
    };
  });
}

// Example usage (commented out for module import)
/*
console.log("Search for '胡':", searchContentPartitions("胡"));
console.log("Tags in '活动':", filterKeywordTags("活动"));
console.log("All keywords:", getAllKeywords());
console.log("Sitemap:", buildSitemap());
*/

export {
  siteConfig,
  contentPartitions,
  keywordTags,
  searchContentPartitions,
  filterKeywordTags,
  getAllKeywords,
  buildSitemap
};