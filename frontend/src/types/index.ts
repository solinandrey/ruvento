export type MainPageResponse = PageContentResponse & {
  data: {
    attributes: {
      MainTitle: MainTitleBlock;
    };
  };
};

export interface PageContentResponse {
  data: {
    attributes: {
      seo: {
        metaTitle: string;
        metaDescription: string;
      };
    };
  };
}

export interface MainTitleBlock {
  title: string;
  description: string;
  linkText: string;
}
