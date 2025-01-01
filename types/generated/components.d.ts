import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleMultipleImages extends Struct.ComponentSchema {
  collectionName: 'components_article_multiple_images';
  info: {
    displayName: 'MultipleImages';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface ArticleParagraph extends Struct.ComponentSchema {
  collectionName: 'components_article_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ArticleSingleImage extends Struct.ComponentSchema {
  collectionName: 'components_article_single_images';
  info: {
    displayName: 'SingleImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.multiple-images': ArticleMultipleImages;
      'article.paragraph': ArticleParagraph;
      'article.single-image': ArticleSingleImage;
    }
  }
}
