/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteName: Maybe<Scalars['String']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly content: Maybe<contentfulPostContentTextNode>;
  readonly excerpt: Maybe<contentfulPostExcerptTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPostSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly coverImage: Maybe<ContentfulAsset>;
  /** Returns all children nodes filtered by type contentfulPostExcerptTextNode */
  readonly childrenContentfulPostExcerptTextNode: Maybe<ReadonlyArray<Maybe<contentfulPostExcerptTextNode>>>;
  /** Returns the first child node of type contentfulPostExcerptTextNode or null if there are no children of given type on this node */
  readonly childContentfulPostExcerptTextNode: Maybe<contentfulPostExcerptTextNode>;
  /** Returns all children nodes filtered by type contentfulPostContentTextNode */
  readonly childrenContentfulPostContentTextNode: Maybe<ReadonlyArray<Maybe<contentfulPostContentTextNode>>>;
  /** Returns the first child node of type contentfulPostContentTextNode or null if there are no children of given type on this node */
  readonly childContentfulPostContentTextNode: Maybe<contentfulPostContentTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPost_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPostSysContentType>;
};

type ContentfulPostSysContentType = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSys>;
};

type ContentfulPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulTag = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly post: Maybe<ReadonlyArray<Maybe<ContentfulPost>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulTagSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulTag_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulTag_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulTagSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulTagSysContentType>;
};

type ContentfulTagSysContentType = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSys>;
};

type ContentfulTagSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type contentfulPostExcerptTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPostExcerptTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulPostExcerptTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPostContentTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly content: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPostContentTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulPostContentTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulPost: Maybe<ContentfulPost>;
  readonly allContentfulPost: ContentfulPostConnection;
  readonly contentfulTag: Maybe<ContentfulTag>;
  readonly allContentfulTag: ContentfulTagConnection;
  readonly contentfulPostExcerptTextNode: Maybe<contentfulPostExcerptTextNode>;
  readonly allContentfulPostExcerptTextNode: contentfulPostExcerptTextNodeConnection;
  readonly contentfulPostContentTextNode: Maybe<contentfulPostContentTextNode>;
  readonly allContentfulPostContentTextNode: contentfulPostContentTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  content: Maybe<contentfulPostContentTextNodeFilterInput>;
  excerpt: Maybe<contentfulPostExcerptTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPostSysFilterInput>;
  tags: Maybe<ContentfulTagFilterListInput>;
  coverImage: Maybe<ContentfulAssetFilterInput>;
  childrenContentfulPostExcerptTextNode: Maybe<contentfulPostExcerptTextNodeFilterListInput>;
  childContentfulPostExcerptTextNode: Maybe<contentfulPostExcerptTextNodeFilterInput>;
  childrenContentfulPostContentTextNode: Maybe<contentfulPostContentTextNodeFilterListInput>;
  childContentfulPostContentTextNode: Maybe<contentfulPostContentTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPostArgs = {
  filter: Maybe<ContentfulPostFilterInput>;
  sort: Maybe<ContentfulPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulTagArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  post: Maybe<ContentfulPostFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulTagSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulTagArgs = {
  filter: Maybe<ContentfulTagFilterInput>;
  sort: Maybe<ContentfulTagSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostExcerptTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPostExcerptTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulPostExcerptTextNodeArgs = {
  filter: Maybe<contentfulPostExcerptTextNodeFilterInput>;
  sort: Maybe<contentfulPostExcerptTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostContentTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPostContentTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulPostContentTextNodeArgs = {
  filter: Maybe<contentfulPostContentTextNodeFilterInput>;
  sort: Maybe<contentfulPostContentTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteName: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteName'
  | 'siteMetadata.lang'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.locale'
  | 'siteMetadata.type'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'gatsbyImageData'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPostContentTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPostContentTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPostContentTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPostExcerptTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPostExcerptTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPostExcerptTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPostSysContentTypeFilterInput>;
};

type ContentfulPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

type ContentfulPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulTagFilterListInput = {
  readonly elemMatch: Maybe<ContentfulTagFilterInput>;
};

type ContentfulTagFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly post: Maybe<ContentfulPostFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulTagSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulPostFilterInput>;
};

type ContentfulPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly content: Maybe<contentfulPostContentTextNodeFilterInput>;
  readonly excerpt: Maybe<contentfulPostExcerptTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPostSysFilterInput>;
  readonly tags: Maybe<ContentfulTagFilterListInput>;
  readonly coverImage: Maybe<ContentfulAssetFilterInput>;
  readonly childrenContentfulPostExcerptTextNode: Maybe<contentfulPostExcerptTextNodeFilterListInput>;
  readonly childContentfulPostExcerptTextNode: Maybe<contentfulPostExcerptTextNodeFilterInput>;
  readonly childrenContentfulPostContentTextNode: Maybe<contentfulPostContentTextNodeFilterListInput>;
  readonly childContentfulPostContentTextNode: Maybe<contentfulPostContentTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulPostExcerptTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPostExcerptTextNodeFilterInput>;
};

type contentfulPostContentTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPostContentTextNodeFilterInput>;
};

type ContentfulTagSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulTagSysContentTypeFilterInput>;
};

type ContentfulTagSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

type ContentfulTagSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
};


type ContentfulPostConnection_distinctArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_maxArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_minArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_sumArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

type ContentfulPostEdge = {
  readonly next: Maybe<ContentfulPost>;
  readonly node: ContentfulPost;
  readonly previous: Maybe<ContentfulPost>;
};

type ContentfulPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'date'
  | 'content.id'
  | 'content.parent.id'
  | 'content.parent.parent.id'
  | 'content.parent.parent.children'
  | 'content.parent.children'
  | 'content.parent.children.id'
  | 'content.parent.children.children'
  | 'content.parent.internal.content'
  | 'content.parent.internal.contentDigest'
  | 'content.parent.internal.description'
  | 'content.parent.internal.fieldOwners'
  | 'content.parent.internal.ignoreType'
  | 'content.parent.internal.mediaType'
  | 'content.parent.internal.owner'
  | 'content.parent.internal.type'
  | 'content.children'
  | 'content.children.id'
  | 'content.children.parent.id'
  | 'content.children.parent.children'
  | 'content.children.children'
  | 'content.children.children.id'
  | 'content.children.children.children'
  | 'content.children.internal.content'
  | 'content.children.internal.contentDigest'
  | 'content.children.internal.description'
  | 'content.children.internal.fieldOwners'
  | 'content.children.internal.ignoreType'
  | 'content.children.internal.mediaType'
  | 'content.children.internal.owner'
  | 'content.children.internal.type'
  | 'content.internal.content'
  | 'content.internal.contentDigest'
  | 'content.internal.description'
  | 'content.internal.fieldOwners'
  | 'content.internal.ignoreType'
  | 'content.internal.mediaType'
  | 'content.internal.owner'
  | 'content.internal.type'
  | 'content.content'
  | 'content.sys.type'
  | 'content.childrenMarkdownRemark'
  | 'content.childrenMarkdownRemark.id'
  | 'content.childrenMarkdownRemark.frontmatter.title'
  | 'content.childrenMarkdownRemark.excerpt'
  | 'content.childrenMarkdownRemark.rawMarkdownBody'
  | 'content.childrenMarkdownRemark.html'
  | 'content.childrenMarkdownRemark.htmlAst'
  | 'content.childrenMarkdownRemark.excerptAst'
  | 'content.childrenMarkdownRemark.headings'
  | 'content.childrenMarkdownRemark.headings.id'
  | 'content.childrenMarkdownRemark.headings.value'
  | 'content.childrenMarkdownRemark.headings.depth'
  | 'content.childrenMarkdownRemark.timeToRead'
  | 'content.childrenMarkdownRemark.tableOfContents'
  | 'content.childrenMarkdownRemark.wordCount.paragraphs'
  | 'content.childrenMarkdownRemark.wordCount.sentences'
  | 'content.childrenMarkdownRemark.wordCount.words'
  | 'content.childrenMarkdownRemark.parent.id'
  | 'content.childrenMarkdownRemark.parent.children'
  | 'content.childrenMarkdownRemark.children'
  | 'content.childrenMarkdownRemark.children.id'
  | 'content.childrenMarkdownRemark.children.children'
  | 'content.childrenMarkdownRemark.internal.content'
  | 'content.childrenMarkdownRemark.internal.contentDigest'
  | 'content.childrenMarkdownRemark.internal.description'
  | 'content.childrenMarkdownRemark.internal.fieldOwners'
  | 'content.childrenMarkdownRemark.internal.ignoreType'
  | 'content.childrenMarkdownRemark.internal.mediaType'
  | 'content.childrenMarkdownRemark.internal.owner'
  | 'content.childrenMarkdownRemark.internal.type'
  | 'content.childMarkdownRemark.id'
  | 'content.childMarkdownRemark.frontmatter.title'
  | 'content.childMarkdownRemark.excerpt'
  | 'content.childMarkdownRemark.rawMarkdownBody'
  | 'content.childMarkdownRemark.html'
  | 'content.childMarkdownRemark.htmlAst'
  | 'content.childMarkdownRemark.excerptAst'
  | 'content.childMarkdownRemark.headings'
  | 'content.childMarkdownRemark.headings.id'
  | 'content.childMarkdownRemark.headings.value'
  | 'content.childMarkdownRemark.headings.depth'
  | 'content.childMarkdownRemark.timeToRead'
  | 'content.childMarkdownRemark.tableOfContents'
  | 'content.childMarkdownRemark.wordCount.paragraphs'
  | 'content.childMarkdownRemark.wordCount.sentences'
  | 'content.childMarkdownRemark.wordCount.words'
  | 'content.childMarkdownRemark.parent.id'
  | 'content.childMarkdownRemark.parent.children'
  | 'content.childMarkdownRemark.children'
  | 'content.childMarkdownRemark.children.id'
  | 'content.childMarkdownRemark.children.children'
  | 'content.childMarkdownRemark.internal.content'
  | 'content.childMarkdownRemark.internal.contentDigest'
  | 'content.childMarkdownRemark.internal.description'
  | 'content.childMarkdownRemark.internal.fieldOwners'
  | 'content.childMarkdownRemark.internal.ignoreType'
  | 'content.childMarkdownRemark.internal.mediaType'
  | 'content.childMarkdownRemark.internal.owner'
  | 'content.childMarkdownRemark.internal.type'
  | 'excerpt.id'
  | 'excerpt.parent.id'
  | 'excerpt.parent.parent.id'
  | 'excerpt.parent.parent.children'
  | 'excerpt.parent.children'
  | 'excerpt.parent.children.id'
  | 'excerpt.parent.children.children'
  | 'excerpt.parent.internal.content'
  | 'excerpt.parent.internal.contentDigest'
  | 'excerpt.parent.internal.description'
  | 'excerpt.parent.internal.fieldOwners'
  | 'excerpt.parent.internal.ignoreType'
  | 'excerpt.parent.internal.mediaType'
  | 'excerpt.parent.internal.owner'
  | 'excerpt.parent.internal.type'
  | 'excerpt.children'
  | 'excerpt.children.id'
  | 'excerpt.children.parent.id'
  | 'excerpt.children.parent.children'
  | 'excerpt.children.children'
  | 'excerpt.children.children.id'
  | 'excerpt.children.children.children'
  | 'excerpt.children.internal.content'
  | 'excerpt.children.internal.contentDigest'
  | 'excerpt.children.internal.description'
  | 'excerpt.children.internal.fieldOwners'
  | 'excerpt.children.internal.ignoreType'
  | 'excerpt.children.internal.mediaType'
  | 'excerpt.children.internal.owner'
  | 'excerpt.children.internal.type'
  | 'excerpt.internal.content'
  | 'excerpt.internal.contentDigest'
  | 'excerpt.internal.description'
  | 'excerpt.internal.fieldOwners'
  | 'excerpt.internal.ignoreType'
  | 'excerpt.internal.mediaType'
  | 'excerpt.internal.owner'
  | 'excerpt.internal.type'
  | 'excerpt.excerpt'
  | 'excerpt.sys.type'
  | 'excerpt.childrenMarkdownRemark'
  | 'excerpt.childrenMarkdownRemark.id'
  | 'excerpt.childrenMarkdownRemark.frontmatter.title'
  | 'excerpt.childrenMarkdownRemark.excerpt'
  | 'excerpt.childrenMarkdownRemark.rawMarkdownBody'
  | 'excerpt.childrenMarkdownRemark.html'
  | 'excerpt.childrenMarkdownRemark.htmlAst'
  | 'excerpt.childrenMarkdownRemark.excerptAst'
  | 'excerpt.childrenMarkdownRemark.headings'
  | 'excerpt.childrenMarkdownRemark.headings.id'
  | 'excerpt.childrenMarkdownRemark.headings.value'
  | 'excerpt.childrenMarkdownRemark.headings.depth'
  | 'excerpt.childrenMarkdownRemark.timeToRead'
  | 'excerpt.childrenMarkdownRemark.tableOfContents'
  | 'excerpt.childrenMarkdownRemark.wordCount.paragraphs'
  | 'excerpt.childrenMarkdownRemark.wordCount.sentences'
  | 'excerpt.childrenMarkdownRemark.wordCount.words'
  | 'excerpt.childrenMarkdownRemark.parent.id'
  | 'excerpt.childrenMarkdownRemark.parent.children'
  | 'excerpt.childrenMarkdownRemark.children'
  | 'excerpt.childrenMarkdownRemark.children.id'
  | 'excerpt.childrenMarkdownRemark.children.children'
  | 'excerpt.childrenMarkdownRemark.internal.content'
  | 'excerpt.childrenMarkdownRemark.internal.contentDigest'
  | 'excerpt.childrenMarkdownRemark.internal.description'
  | 'excerpt.childrenMarkdownRemark.internal.fieldOwners'
  | 'excerpt.childrenMarkdownRemark.internal.ignoreType'
  | 'excerpt.childrenMarkdownRemark.internal.mediaType'
  | 'excerpt.childrenMarkdownRemark.internal.owner'
  | 'excerpt.childrenMarkdownRemark.internal.type'
  | 'excerpt.childMarkdownRemark.id'
  | 'excerpt.childMarkdownRemark.frontmatter.title'
  | 'excerpt.childMarkdownRemark.excerpt'
  | 'excerpt.childMarkdownRemark.rawMarkdownBody'
  | 'excerpt.childMarkdownRemark.html'
  | 'excerpt.childMarkdownRemark.htmlAst'
  | 'excerpt.childMarkdownRemark.excerptAst'
  | 'excerpt.childMarkdownRemark.headings'
  | 'excerpt.childMarkdownRemark.headings.id'
  | 'excerpt.childMarkdownRemark.headings.value'
  | 'excerpt.childMarkdownRemark.headings.depth'
  | 'excerpt.childMarkdownRemark.timeToRead'
  | 'excerpt.childMarkdownRemark.tableOfContents'
  | 'excerpt.childMarkdownRemark.wordCount.paragraphs'
  | 'excerpt.childMarkdownRemark.wordCount.sentences'
  | 'excerpt.childMarkdownRemark.wordCount.words'
  | 'excerpt.childMarkdownRemark.parent.id'
  | 'excerpt.childMarkdownRemark.parent.children'
  | 'excerpt.childMarkdownRemark.children'
  | 'excerpt.childMarkdownRemark.children.id'
  | 'excerpt.childMarkdownRemark.children.children'
  | 'excerpt.childMarkdownRemark.internal.content'
  | 'excerpt.childMarkdownRemark.internal.contentDigest'
  | 'excerpt.childMarkdownRemark.internal.description'
  | 'excerpt.childMarkdownRemark.internal.fieldOwners'
  | 'excerpt.childMarkdownRemark.internal.ignoreType'
  | 'excerpt.childMarkdownRemark.internal.mediaType'
  | 'excerpt.childMarkdownRemark.internal.owner'
  | 'excerpt.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'tags'
  | 'tags.contentful_id'
  | 'tags.id'
  | 'tags.node_locale'
  | 'tags.title'
  | 'tags.slug'
  | 'tags.post'
  | 'tags.post.contentful_id'
  | 'tags.post.id'
  | 'tags.post.node_locale'
  | 'tags.post.title'
  | 'tags.post.slug'
  | 'tags.post.date'
  | 'tags.post.content.id'
  | 'tags.post.content.children'
  | 'tags.post.content.content'
  | 'tags.post.content.childrenMarkdownRemark'
  | 'tags.post.excerpt.id'
  | 'tags.post.excerpt.children'
  | 'tags.post.excerpt.excerpt'
  | 'tags.post.excerpt.childrenMarkdownRemark'
  | 'tags.post.spaceId'
  | 'tags.post.createdAt'
  | 'tags.post.updatedAt'
  | 'tags.post.sys.type'
  | 'tags.post.sys.revision'
  | 'tags.post.tags'
  | 'tags.post.tags.contentful_id'
  | 'tags.post.tags.id'
  | 'tags.post.tags.node_locale'
  | 'tags.post.tags.title'
  | 'tags.post.tags.slug'
  | 'tags.post.tags.post'
  | 'tags.post.tags.spaceId'
  | 'tags.post.tags.createdAt'
  | 'tags.post.tags.updatedAt'
  | 'tags.post.tags.children'
  | 'tags.post.coverImage.contentful_id'
  | 'tags.post.coverImage.id'
  | 'tags.post.coverImage.spaceId'
  | 'tags.post.coverImage.createdAt'
  | 'tags.post.coverImage.updatedAt'
  | 'tags.post.coverImage.title'
  | 'tags.post.coverImage.description'
  | 'tags.post.coverImage.node_locale'
  | 'tags.post.coverImage.gatsbyImageData'
  | 'tags.post.coverImage.children'
  | 'tags.post.childrenContentfulPostExcerptTextNode'
  | 'tags.post.childrenContentfulPostExcerptTextNode.id'
  | 'tags.post.childrenContentfulPostExcerptTextNode.children'
  | 'tags.post.childrenContentfulPostExcerptTextNode.excerpt'
  | 'tags.post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark'
  | 'tags.post.childContentfulPostExcerptTextNode.id'
  | 'tags.post.childContentfulPostExcerptTextNode.children'
  | 'tags.post.childContentfulPostExcerptTextNode.excerpt'
  | 'tags.post.childContentfulPostExcerptTextNode.childrenMarkdownRemark'
  | 'tags.post.childrenContentfulPostContentTextNode'
  | 'tags.post.childrenContentfulPostContentTextNode.id'
  | 'tags.post.childrenContentfulPostContentTextNode.children'
  | 'tags.post.childrenContentfulPostContentTextNode.content'
  | 'tags.post.childrenContentfulPostContentTextNode.childrenMarkdownRemark'
  | 'tags.post.childContentfulPostContentTextNode.id'
  | 'tags.post.childContentfulPostContentTextNode.children'
  | 'tags.post.childContentfulPostContentTextNode.content'
  | 'tags.post.childContentfulPostContentTextNode.childrenMarkdownRemark'
  | 'tags.post.parent.id'
  | 'tags.post.parent.children'
  | 'tags.post.children'
  | 'tags.post.children.id'
  | 'tags.post.children.children'
  | 'tags.post.internal.content'
  | 'tags.post.internal.contentDigest'
  | 'tags.post.internal.description'
  | 'tags.post.internal.fieldOwners'
  | 'tags.post.internal.ignoreType'
  | 'tags.post.internal.mediaType'
  | 'tags.post.internal.owner'
  | 'tags.post.internal.type'
  | 'tags.spaceId'
  | 'tags.createdAt'
  | 'tags.updatedAt'
  | 'tags.sys.type'
  | 'tags.sys.revision'
  | 'tags.parent.id'
  | 'tags.parent.parent.id'
  | 'tags.parent.parent.children'
  | 'tags.parent.children'
  | 'tags.parent.children.id'
  | 'tags.parent.children.children'
  | 'tags.parent.internal.content'
  | 'tags.parent.internal.contentDigest'
  | 'tags.parent.internal.description'
  | 'tags.parent.internal.fieldOwners'
  | 'tags.parent.internal.ignoreType'
  | 'tags.parent.internal.mediaType'
  | 'tags.parent.internal.owner'
  | 'tags.parent.internal.type'
  | 'tags.children'
  | 'tags.children.id'
  | 'tags.children.parent.id'
  | 'tags.children.parent.children'
  | 'tags.children.children'
  | 'tags.children.children.id'
  | 'tags.children.children.children'
  | 'tags.children.internal.content'
  | 'tags.children.internal.contentDigest'
  | 'tags.children.internal.description'
  | 'tags.children.internal.fieldOwners'
  | 'tags.children.internal.ignoreType'
  | 'tags.children.internal.mediaType'
  | 'tags.children.internal.owner'
  | 'tags.children.internal.type'
  | 'tags.internal.content'
  | 'tags.internal.contentDigest'
  | 'tags.internal.description'
  | 'tags.internal.fieldOwners'
  | 'tags.internal.ignoreType'
  | 'tags.internal.mediaType'
  | 'tags.internal.owner'
  | 'tags.internal.type'
  | 'coverImage.contentful_id'
  | 'coverImage.id'
  | 'coverImage.spaceId'
  | 'coverImage.createdAt'
  | 'coverImage.updatedAt'
  | 'coverImage.file.url'
  | 'coverImage.file.details.size'
  | 'coverImage.file.fileName'
  | 'coverImage.file.contentType'
  | 'coverImage.title'
  | 'coverImage.description'
  | 'coverImage.node_locale'
  | 'coverImage.sys.type'
  | 'coverImage.sys.revision'
  | 'coverImage.gatsbyImageData'
  | 'coverImage.parent.id'
  | 'coverImage.parent.parent.id'
  | 'coverImage.parent.parent.children'
  | 'coverImage.parent.children'
  | 'coverImage.parent.children.id'
  | 'coverImage.parent.children.children'
  | 'coverImage.parent.internal.content'
  | 'coverImage.parent.internal.contentDigest'
  | 'coverImage.parent.internal.description'
  | 'coverImage.parent.internal.fieldOwners'
  | 'coverImage.parent.internal.ignoreType'
  | 'coverImage.parent.internal.mediaType'
  | 'coverImage.parent.internal.owner'
  | 'coverImage.parent.internal.type'
  | 'coverImage.children'
  | 'coverImage.children.id'
  | 'coverImage.children.parent.id'
  | 'coverImage.children.parent.children'
  | 'coverImage.children.children'
  | 'coverImage.children.children.id'
  | 'coverImage.children.children.children'
  | 'coverImage.children.internal.content'
  | 'coverImage.children.internal.contentDigest'
  | 'coverImage.children.internal.description'
  | 'coverImage.children.internal.fieldOwners'
  | 'coverImage.children.internal.ignoreType'
  | 'coverImage.children.internal.mediaType'
  | 'coverImage.children.internal.owner'
  | 'coverImage.children.internal.type'
  | 'coverImage.internal.content'
  | 'coverImage.internal.contentDigest'
  | 'coverImage.internal.description'
  | 'coverImage.internal.fieldOwners'
  | 'coverImage.internal.ignoreType'
  | 'coverImage.internal.mediaType'
  | 'coverImage.internal.owner'
  | 'coverImage.internal.type'
  | 'childrenContentfulPostExcerptTextNode'
  | 'childrenContentfulPostExcerptTextNode.id'
  | 'childrenContentfulPostExcerptTextNode.parent.id'
  | 'childrenContentfulPostExcerptTextNode.parent.parent.id'
  | 'childrenContentfulPostExcerptTextNode.parent.parent.children'
  | 'childrenContentfulPostExcerptTextNode.parent.children'
  | 'childrenContentfulPostExcerptTextNode.parent.children.id'
  | 'childrenContentfulPostExcerptTextNode.parent.children.children'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.content'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.description'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.mediaType'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.owner'
  | 'childrenContentfulPostExcerptTextNode.parent.internal.type'
  | 'childrenContentfulPostExcerptTextNode.children'
  | 'childrenContentfulPostExcerptTextNode.children.id'
  | 'childrenContentfulPostExcerptTextNode.children.parent.id'
  | 'childrenContentfulPostExcerptTextNode.children.parent.children'
  | 'childrenContentfulPostExcerptTextNode.children.children'
  | 'childrenContentfulPostExcerptTextNode.children.children.id'
  | 'childrenContentfulPostExcerptTextNode.children.children.children'
  | 'childrenContentfulPostExcerptTextNode.children.internal.content'
  | 'childrenContentfulPostExcerptTextNode.children.internal.contentDigest'
  | 'childrenContentfulPostExcerptTextNode.children.internal.description'
  | 'childrenContentfulPostExcerptTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPostExcerptTextNode.children.internal.ignoreType'
  | 'childrenContentfulPostExcerptTextNode.children.internal.mediaType'
  | 'childrenContentfulPostExcerptTextNode.children.internal.owner'
  | 'childrenContentfulPostExcerptTextNode.children.internal.type'
  | 'childrenContentfulPostExcerptTextNode.internal.content'
  | 'childrenContentfulPostExcerptTextNode.internal.contentDigest'
  | 'childrenContentfulPostExcerptTextNode.internal.description'
  | 'childrenContentfulPostExcerptTextNode.internal.fieldOwners'
  | 'childrenContentfulPostExcerptTextNode.internal.ignoreType'
  | 'childrenContentfulPostExcerptTextNode.internal.mediaType'
  | 'childrenContentfulPostExcerptTextNode.internal.owner'
  | 'childrenContentfulPostExcerptTextNode.internal.type'
  | 'childrenContentfulPostExcerptTextNode.excerpt'
  | 'childrenContentfulPostExcerptTextNode.sys.type'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.id'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.html'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.children'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulPostExcerptTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulPostExcerptTextNode.id'
  | 'childContentfulPostExcerptTextNode.parent.id'
  | 'childContentfulPostExcerptTextNode.parent.parent.id'
  | 'childContentfulPostExcerptTextNode.parent.parent.children'
  | 'childContentfulPostExcerptTextNode.parent.children'
  | 'childContentfulPostExcerptTextNode.parent.children.id'
  | 'childContentfulPostExcerptTextNode.parent.children.children'
  | 'childContentfulPostExcerptTextNode.parent.internal.content'
  | 'childContentfulPostExcerptTextNode.parent.internal.contentDigest'
  | 'childContentfulPostExcerptTextNode.parent.internal.description'
  | 'childContentfulPostExcerptTextNode.parent.internal.fieldOwners'
  | 'childContentfulPostExcerptTextNode.parent.internal.ignoreType'
  | 'childContentfulPostExcerptTextNode.parent.internal.mediaType'
  | 'childContentfulPostExcerptTextNode.parent.internal.owner'
  | 'childContentfulPostExcerptTextNode.parent.internal.type'
  | 'childContentfulPostExcerptTextNode.children'
  | 'childContentfulPostExcerptTextNode.children.id'
  | 'childContentfulPostExcerptTextNode.children.parent.id'
  | 'childContentfulPostExcerptTextNode.children.parent.children'
  | 'childContentfulPostExcerptTextNode.children.children'
  | 'childContentfulPostExcerptTextNode.children.children.id'
  | 'childContentfulPostExcerptTextNode.children.children.children'
  | 'childContentfulPostExcerptTextNode.children.internal.content'
  | 'childContentfulPostExcerptTextNode.children.internal.contentDigest'
  | 'childContentfulPostExcerptTextNode.children.internal.description'
  | 'childContentfulPostExcerptTextNode.children.internal.fieldOwners'
  | 'childContentfulPostExcerptTextNode.children.internal.ignoreType'
  | 'childContentfulPostExcerptTextNode.children.internal.mediaType'
  | 'childContentfulPostExcerptTextNode.children.internal.owner'
  | 'childContentfulPostExcerptTextNode.children.internal.type'
  | 'childContentfulPostExcerptTextNode.internal.content'
  | 'childContentfulPostExcerptTextNode.internal.contentDigest'
  | 'childContentfulPostExcerptTextNode.internal.description'
  | 'childContentfulPostExcerptTextNode.internal.fieldOwners'
  | 'childContentfulPostExcerptTextNode.internal.ignoreType'
  | 'childContentfulPostExcerptTextNode.internal.mediaType'
  | 'childContentfulPostExcerptTextNode.internal.owner'
  | 'childContentfulPostExcerptTextNode.internal.type'
  | 'childContentfulPostExcerptTextNode.excerpt'
  | 'childContentfulPostExcerptTextNode.sys.type'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.id'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.html'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.children'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulPostExcerptTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.id'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.html'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.headings'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.children'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.children.id'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.children.children'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulPostExcerptTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulPostContentTextNode'
  | 'childrenContentfulPostContentTextNode.id'
  | 'childrenContentfulPostContentTextNode.parent.id'
  | 'childrenContentfulPostContentTextNode.parent.parent.id'
  | 'childrenContentfulPostContentTextNode.parent.parent.children'
  | 'childrenContentfulPostContentTextNode.parent.children'
  | 'childrenContentfulPostContentTextNode.parent.children.id'
  | 'childrenContentfulPostContentTextNode.parent.children.children'
  | 'childrenContentfulPostContentTextNode.parent.internal.content'
  | 'childrenContentfulPostContentTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPostContentTextNode.parent.internal.description'
  | 'childrenContentfulPostContentTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPostContentTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPostContentTextNode.parent.internal.mediaType'
  | 'childrenContentfulPostContentTextNode.parent.internal.owner'
  | 'childrenContentfulPostContentTextNode.parent.internal.type'
  | 'childrenContentfulPostContentTextNode.children'
  | 'childrenContentfulPostContentTextNode.children.id'
  | 'childrenContentfulPostContentTextNode.children.parent.id'
  | 'childrenContentfulPostContentTextNode.children.parent.children'
  | 'childrenContentfulPostContentTextNode.children.children'
  | 'childrenContentfulPostContentTextNode.children.children.id'
  | 'childrenContentfulPostContentTextNode.children.children.children'
  | 'childrenContentfulPostContentTextNode.children.internal.content'
  | 'childrenContentfulPostContentTextNode.children.internal.contentDigest'
  | 'childrenContentfulPostContentTextNode.children.internal.description'
  | 'childrenContentfulPostContentTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPostContentTextNode.children.internal.ignoreType'
  | 'childrenContentfulPostContentTextNode.children.internal.mediaType'
  | 'childrenContentfulPostContentTextNode.children.internal.owner'
  | 'childrenContentfulPostContentTextNode.children.internal.type'
  | 'childrenContentfulPostContentTextNode.internal.content'
  | 'childrenContentfulPostContentTextNode.internal.contentDigest'
  | 'childrenContentfulPostContentTextNode.internal.description'
  | 'childrenContentfulPostContentTextNode.internal.fieldOwners'
  | 'childrenContentfulPostContentTextNode.internal.ignoreType'
  | 'childrenContentfulPostContentTextNode.internal.mediaType'
  | 'childrenContentfulPostContentTextNode.internal.owner'
  | 'childrenContentfulPostContentTextNode.internal.type'
  | 'childrenContentfulPostContentTextNode.content'
  | 'childrenContentfulPostContentTextNode.sys.type'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulPostContentTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.id'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.html'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.children'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulPostContentTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulPostContentTextNode.id'
  | 'childContentfulPostContentTextNode.parent.id'
  | 'childContentfulPostContentTextNode.parent.parent.id'
  | 'childContentfulPostContentTextNode.parent.parent.children'
  | 'childContentfulPostContentTextNode.parent.children'
  | 'childContentfulPostContentTextNode.parent.children.id'
  | 'childContentfulPostContentTextNode.parent.children.children'
  | 'childContentfulPostContentTextNode.parent.internal.content'
  | 'childContentfulPostContentTextNode.parent.internal.contentDigest'
  | 'childContentfulPostContentTextNode.parent.internal.description'
  | 'childContentfulPostContentTextNode.parent.internal.fieldOwners'
  | 'childContentfulPostContentTextNode.parent.internal.ignoreType'
  | 'childContentfulPostContentTextNode.parent.internal.mediaType'
  | 'childContentfulPostContentTextNode.parent.internal.owner'
  | 'childContentfulPostContentTextNode.parent.internal.type'
  | 'childContentfulPostContentTextNode.children'
  | 'childContentfulPostContentTextNode.children.id'
  | 'childContentfulPostContentTextNode.children.parent.id'
  | 'childContentfulPostContentTextNode.children.parent.children'
  | 'childContentfulPostContentTextNode.children.children'
  | 'childContentfulPostContentTextNode.children.children.id'
  | 'childContentfulPostContentTextNode.children.children.children'
  | 'childContentfulPostContentTextNode.children.internal.content'
  | 'childContentfulPostContentTextNode.children.internal.contentDigest'
  | 'childContentfulPostContentTextNode.children.internal.description'
  | 'childContentfulPostContentTextNode.children.internal.fieldOwners'
  | 'childContentfulPostContentTextNode.children.internal.ignoreType'
  | 'childContentfulPostContentTextNode.children.internal.mediaType'
  | 'childContentfulPostContentTextNode.children.internal.owner'
  | 'childContentfulPostContentTextNode.children.internal.type'
  | 'childContentfulPostContentTextNode.internal.content'
  | 'childContentfulPostContentTextNode.internal.contentDigest'
  | 'childContentfulPostContentTextNode.internal.description'
  | 'childContentfulPostContentTextNode.internal.fieldOwners'
  | 'childContentfulPostContentTextNode.internal.ignoreType'
  | 'childContentfulPostContentTextNode.internal.mediaType'
  | 'childContentfulPostContentTextNode.internal.owner'
  | 'childContentfulPostContentTextNode.internal.type'
  | 'childContentfulPostContentTextNode.content'
  | 'childContentfulPostContentTextNode.sys.type'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.id'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.html'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.children'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulPostContentTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.id'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.html'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.headings'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.children'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.children.id'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.children.children'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulPostContentTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulPostGroupConnection_distinctArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_maxArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_minArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_sumArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

type ContentfulPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
};


type ContentfulTagConnection_distinctArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_maxArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_minArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_sumArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

type ContentfulTagEdge = {
  readonly next: Maybe<ContentfulTag>;
  readonly node: ContentfulTag;
  readonly previous: Maybe<ContentfulTag>;
};

type ContentfulTagFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'post'
  | 'post.contentful_id'
  | 'post.id'
  | 'post.node_locale'
  | 'post.title'
  | 'post.slug'
  | 'post.date'
  | 'post.content.id'
  | 'post.content.parent.id'
  | 'post.content.parent.children'
  | 'post.content.children'
  | 'post.content.children.id'
  | 'post.content.children.children'
  | 'post.content.internal.content'
  | 'post.content.internal.contentDigest'
  | 'post.content.internal.description'
  | 'post.content.internal.fieldOwners'
  | 'post.content.internal.ignoreType'
  | 'post.content.internal.mediaType'
  | 'post.content.internal.owner'
  | 'post.content.internal.type'
  | 'post.content.content'
  | 'post.content.sys.type'
  | 'post.content.childrenMarkdownRemark'
  | 'post.content.childrenMarkdownRemark.id'
  | 'post.content.childrenMarkdownRemark.excerpt'
  | 'post.content.childrenMarkdownRemark.rawMarkdownBody'
  | 'post.content.childrenMarkdownRemark.html'
  | 'post.content.childrenMarkdownRemark.htmlAst'
  | 'post.content.childrenMarkdownRemark.excerptAst'
  | 'post.content.childrenMarkdownRemark.headings'
  | 'post.content.childrenMarkdownRemark.timeToRead'
  | 'post.content.childrenMarkdownRemark.tableOfContents'
  | 'post.content.childrenMarkdownRemark.children'
  | 'post.content.childMarkdownRemark.id'
  | 'post.content.childMarkdownRemark.excerpt'
  | 'post.content.childMarkdownRemark.rawMarkdownBody'
  | 'post.content.childMarkdownRemark.html'
  | 'post.content.childMarkdownRemark.htmlAst'
  | 'post.content.childMarkdownRemark.excerptAst'
  | 'post.content.childMarkdownRemark.headings'
  | 'post.content.childMarkdownRemark.timeToRead'
  | 'post.content.childMarkdownRemark.tableOfContents'
  | 'post.content.childMarkdownRemark.children'
  | 'post.excerpt.id'
  | 'post.excerpt.parent.id'
  | 'post.excerpt.parent.children'
  | 'post.excerpt.children'
  | 'post.excerpt.children.id'
  | 'post.excerpt.children.children'
  | 'post.excerpt.internal.content'
  | 'post.excerpt.internal.contentDigest'
  | 'post.excerpt.internal.description'
  | 'post.excerpt.internal.fieldOwners'
  | 'post.excerpt.internal.ignoreType'
  | 'post.excerpt.internal.mediaType'
  | 'post.excerpt.internal.owner'
  | 'post.excerpt.internal.type'
  | 'post.excerpt.excerpt'
  | 'post.excerpt.sys.type'
  | 'post.excerpt.childrenMarkdownRemark'
  | 'post.excerpt.childrenMarkdownRemark.id'
  | 'post.excerpt.childrenMarkdownRemark.excerpt'
  | 'post.excerpt.childrenMarkdownRemark.rawMarkdownBody'
  | 'post.excerpt.childrenMarkdownRemark.html'
  | 'post.excerpt.childrenMarkdownRemark.htmlAst'
  | 'post.excerpt.childrenMarkdownRemark.excerptAst'
  | 'post.excerpt.childrenMarkdownRemark.headings'
  | 'post.excerpt.childrenMarkdownRemark.timeToRead'
  | 'post.excerpt.childrenMarkdownRemark.tableOfContents'
  | 'post.excerpt.childrenMarkdownRemark.children'
  | 'post.excerpt.childMarkdownRemark.id'
  | 'post.excerpt.childMarkdownRemark.excerpt'
  | 'post.excerpt.childMarkdownRemark.rawMarkdownBody'
  | 'post.excerpt.childMarkdownRemark.html'
  | 'post.excerpt.childMarkdownRemark.htmlAst'
  | 'post.excerpt.childMarkdownRemark.excerptAst'
  | 'post.excerpt.childMarkdownRemark.headings'
  | 'post.excerpt.childMarkdownRemark.timeToRead'
  | 'post.excerpt.childMarkdownRemark.tableOfContents'
  | 'post.excerpt.childMarkdownRemark.children'
  | 'post.spaceId'
  | 'post.createdAt'
  | 'post.updatedAt'
  | 'post.sys.type'
  | 'post.sys.revision'
  | 'post.tags'
  | 'post.tags.contentful_id'
  | 'post.tags.id'
  | 'post.tags.node_locale'
  | 'post.tags.title'
  | 'post.tags.slug'
  | 'post.tags.post'
  | 'post.tags.post.contentful_id'
  | 'post.tags.post.id'
  | 'post.tags.post.node_locale'
  | 'post.tags.post.title'
  | 'post.tags.post.slug'
  | 'post.tags.post.date'
  | 'post.tags.post.spaceId'
  | 'post.tags.post.createdAt'
  | 'post.tags.post.updatedAt'
  | 'post.tags.post.tags'
  | 'post.tags.post.childrenContentfulPostExcerptTextNode'
  | 'post.tags.post.childrenContentfulPostContentTextNode'
  | 'post.tags.post.children'
  | 'post.tags.spaceId'
  | 'post.tags.createdAt'
  | 'post.tags.updatedAt'
  | 'post.tags.sys.type'
  | 'post.tags.sys.revision'
  | 'post.tags.parent.id'
  | 'post.tags.parent.children'
  | 'post.tags.children'
  | 'post.tags.children.id'
  | 'post.tags.children.children'
  | 'post.tags.internal.content'
  | 'post.tags.internal.contentDigest'
  | 'post.tags.internal.description'
  | 'post.tags.internal.fieldOwners'
  | 'post.tags.internal.ignoreType'
  | 'post.tags.internal.mediaType'
  | 'post.tags.internal.owner'
  | 'post.tags.internal.type'
  | 'post.coverImage.contentful_id'
  | 'post.coverImage.id'
  | 'post.coverImage.spaceId'
  | 'post.coverImage.createdAt'
  | 'post.coverImage.updatedAt'
  | 'post.coverImage.file.url'
  | 'post.coverImage.file.fileName'
  | 'post.coverImage.file.contentType'
  | 'post.coverImage.title'
  | 'post.coverImage.description'
  | 'post.coverImage.node_locale'
  | 'post.coverImage.sys.type'
  | 'post.coverImage.sys.revision'
  | 'post.coverImage.gatsbyImageData'
  | 'post.coverImage.parent.id'
  | 'post.coverImage.parent.children'
  | 'post.coverImage.children'
  | 'post.coverImage.children.id'
  | 'post.coverImage.children.children'
  | 'post.coverImage.internal.content'
  | 'post.coverImage.internal.contentDigest'
  | 'post.coverImage.internal.description'
  | 'post.coverImage.internal.fieldOwners'
  | 'post.coverImage.internal.ignoreType'
  | 'post.coverImage.internal.mediaType'
  | 'post.coverImage.internal.owner'
  | 'post.coverImage.internal.type'
  | 'post.childrenContentfulPostExcerptTextNode'
  | 'post.childrenContentfulPostExcerptTextNode.id'
  | 'post.childrenContentfulPostExcerptTextNode.parent.id'
  | 'post.childrenContentfulPostExcerptTextNode.parent.children'
  | 'post.childrenContentfulPostExcerptTextNode.children'
  | 'post.childrenContentfulPostExcerptTextNode.children.id'
  | 'post.childrenContentfulPostExcerptTextNode.children.children'
  | 'post.childrenContentfulPostExcerptTextNode.internal.content'
  | 'post.childrenContentfulPostExcerptTextNode.internal.contentDigest'
  | 'post.childrenContentfulPostExcerptTextNode.internal.description'
  | 'post.childrenContentfulPostExcerptTextNode.internal.fieldOwners'
  | 'post.childrenContentfulPostExcerptTextNode.internal.ignoreType'
  | 'post.childrenContentfulPostExcerptTextNode.internal.mediaType'
  | 'post.childrenContentfulPostExcerptTextNode.internal.owner'
  | 'post.childrenContentfulPostExcerptTextNode.internal.type'
  | 'post.childrenContentfulPostExcerptTextNode.excerpt'
  | 'post.childrenContentfulPostExcerptTextNode.sys.type'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.id'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.excerpt'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.html'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.htmlAst'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.excerptAst'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.headings'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.timeToRead'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.tableOfContents'
  | 'post.childrenContentfulPostExcerptTextNode.childrenMarkdownRemark.children'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.id'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.excerpt'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.html'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.htmlAst'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.excerptAst'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.headings'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.timeToRead'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.tableOfContents'
  | 'post.childrenContentfulPostExcerptTextNode.childMarkdownRemark.children'
  | 'post.childContentfulPostExcerptTextNode.id'
  | 'post.childContentfulPostExcerptTextNode.parent.id'
  | 'post.childContentfulPostExcerptTextNode.parent.children'
  | 'post.childContentfulPostExcerptTextNode.children'
  | 'post.childContentfulPostExcerptTextNode.children.id'
  | 'post.childContentfulPostExcerptTextNode.children.children'
  | 'post.childContentfulPostExcerptTextNode.internal.content'
  | 'post.childContentfulPostExcerptTextNode.internal.contentDigest'
  | 'post.childContentfulPostExcerptTextNode.internal.description'
  | 'post.childContentfulPostExcerptTextNode.internal.fieldOwners'
  | 'post.childContentfulPostExcerptTextNode.internal.ignoreType'
  | 'post.childContentfulPostExcerptTextNode.internal.mediaType'
  | 'post.childContentfulPostExcerptTextNode.internal.owner'
  | 'post.childContentfulPostExcerptTextNode.internal.type'
  | 'post.childContentfulPostExcerptTextNode.excerpt'
  | 'post.childContentfulPostExcerptTextNode.sys.type'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.id'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.excerpt'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.html'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.htmlAst'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.excerptAst'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.headings'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.timeToRead'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.tableOfContents'
  | 'post.childContentfulPostExcerptTextNode.childrenMarkdownRemark.children'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.id'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.excerpt'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.html'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.htmlAst'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.excerptAst'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.headings'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.timeToRead'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.tableOfContents'
  | 'post.childContentfulPostExcerptTextNode.childMarkdownRemark.children'
  | 'post.childrenContentfulPostContentTextNode'
  | 'post.childrenContentfulPostContentTextNode.id'
  | 'post.childrenContentfulPostContentTextNode.parent.id'
  | 'post.childrenContentfulPostContentTextNode.parent.children'
  | 'post.childrenContentfulPostContentTextNode.children'
  | 'post.childrenContentfulPostContentTextNode.children.id'
  | 'post.childrenContentfulPostContentTextNode.children.children'
  | 'post.childrenContentfulPostContentTextNode.internal.content'
  | 'post.childrenContentfulPostContentTextNode.internal.contentDigest'
  | 'post.childrenContentfulPostContentTextNode.internal.description'
  | 'post.childrenContentfulPostContentTextNode.internal.fieldOwners'
  | 'post.childrenContentfulPostContentTextNode.internal.ignoreType'
  | 'post.childrenContentfulPostContentTextNode.internal.mediaType'
  | 'post.childrenContentfulPostContentTextNode.internal.owner'
  | 'post.childrenContentfulPostContentTextNode.internal.type'
  | 'post.childrenContentfulPostContentTextNode.content'
  | 'post.childrenContentfulPostContentTextNode.sys.type'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.id'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.excerpt'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.html'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.htmlAst'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.excerptAst'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.headings'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.timeToRead'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.tableOfContents'
  | 'post.childrenContentfulPostContentTextNode.childrenMarkdownRemark.children'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.id'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.excerpt'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.html'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.htmlAst'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.excerptAst'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.headings'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.timeToRead'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.tableOfContents'
  | 'post.childrenContentfulPostContentTextNode.childMarkdownRemark.children'
  | 'post.childContentfulPostContentTextNode.id'
  | 'post.childContentfulPostContentTextNode.parent.id'
  | 'post.childContentfulPostContentTextNode.parent.children'
  | 'post.childContentfulPostContentTextNode.children'
  | 'post.childContentfulPostContentTextNode.children.id'
  | 'post.childContentfulPostContentTextNode.children.children'
  | 'post.childContentfulPostContentTextNode.internal.content'
  | 'post.childContentfulPostContentTextNode.internal.contentDigest'
  | 'post.childContentfulPostContentTextNode.internal.description'
  | 'post.childContentfulPostContentTextNode.internal.fieldOwners'
  | 'post.childContentfulPostContentTextNode.internal.ignoreType'
  | 'post.childContentfulPostContentTextNode.internal.mediaType'
  | 'post.childContentfulPostContentTextNode.internal.owner'
  | 'post.childContentfulPostContentTextNode.internal.type'
  | 'post.childContentfulPostContentTextNode.content'
  | 'post.childContentfulPostContentTextNode.sys.type'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.id'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.excerpt'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.html'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.htmlAst'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.excerptAst'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.headings'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.timeToRead'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.tableOfContents'
  | 'post.childContentfulPostContentTextNode.childrenMarkdownRemark.children'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.id'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.excerpt'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.html'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.htmlAst'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.excerptAst'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.headings'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.timeToRead'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.tableOfContents'
  | 'post.childContentfulPostContentTextNode.childMarkdownRemark.children'
  | 'post.parent.id'
  | 'post.parent.parent.id'
  | 'post.parent.parent.children'
  | 'post.parent.children'
  | 'post.parent.children.id'
  | 'post.parent.children.children'
  | 'post.parent.internal.content'
  | 'post.parent.internal.contentDigest'
  | 'post.parent.internal.description'
  | 'post.parent.internal.fieldOwners'
  | 'post.parent.internal.ignoreType'
  | 'post.parent.internal.mediaType'
  | 'post.parent.internal.owner'
  | 'post.parent.internal.type'
  | 'post.children'
  | 'post.children.id'
  | 'post.children.parent.id'
  | 'post.children.parent.children'
  | 'post.children.children'
  | 'post.children.children.id'
  | 'post.children.children.children'
  | 'post.children.internal.content'
  | 'post.children.internal.contentDigest'
  | 'post.children.internal.description'
  | 'post.children.internal.fieldOwners'
  | 'post.children.internal.ignoreType'
  | 'post.children.internal.mediaType'
  | 'post.children.internal.owner'
  | 'post.children.internal.type'
  | 'post.internal.content'
  | 'post.internal.contentDigest'
  | 'post.internal.description'
  | 'post.internal.fieldOwners'
  | 'post.internal.ignoreType'
  | 'post.internal.mediaType'
  | 'post.internal.owner'
  | 'post.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulTagGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulTagGroupConnection_distinctArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagGroupConnection_maxArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagGroupConnection_minArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagGroupConnection_sumArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

type ContentfulTagSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulTagFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPostExcerptTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostExcerptTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostExcerptTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostExcerptTextNodeGroupConnection>;
};


type contentfulPostExcerptTextNodeConnection_distinctArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeConnection_maxArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeConnection_minArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeConnection_sumArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostExcerptTextNodeFieldsEnum;
};

type contentfulPostExcerptTextNodeEdge = {
  readonly next: Maybe<contentfulPostExcerptTextNode>;
  readonly node: contentfulPostExcerptTextNode;
  readonly previous: Maybe<contentfulPostExcerptTextNode>;
};

type contentfulPostExcerptTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'excerpt'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulPostExcerptTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostExcerptTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostExcerptTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostExcerptTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPostExcerptTextNodeGroupConnection_distinctArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeGroupConnection_maxArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeGroupConnection_minArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeGroupConnection_sumArgs = {
  field: contentfulPostExcerptTextNodeFieldsEnum;
};


type contentfulPostExcerptTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostExcerptTextNodeFieldsEnum;
};

type contentfulPostExcerptTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPostExcerptTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPostContentTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostContentTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostContentTextNodeGroupConnection>;
};


type contentfulPostContentTextNodeConnection_distinctArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeConnection_maxArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeConnection_minArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeConnection_sumArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostContentTextNodeFieldsEnum;
};

type contentfulPostContentTextNodeEdge = {
  readonly next: Maybe<contentfulPostContentTextNode>;
  readonly node: contentfulPostContentTextNode;
  readonly previous: Maybe<contentfulPostContentTextNode>;
};

type contentfulPostContentTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'content'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulPostContentTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostContentTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostContentTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPostContentTextNodeGroupConnection_distinctArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeGroupConnection_maxArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeGroupConnection_minArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeGroupConnection_sumArgs = {
  field: contentfulPostContentTextNodeFieldsEnum;
};


type contentfulPostContentTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostContentTextNodeFieldsEnum;
};

type contentfulPostContentTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPostContentTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PostsQueryVariables = Exact<{
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}>;


type PostsQuery = { readonly allContentfulPost: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulPost, 'date' | 'slug' | 'title'>
      & { readonly content: Maybe<Pick<contentfulPostContentTextNode, 'content'>>, readonly excerpt: Maybe<Pick<contentfulPostExcerptTextNode, 'excerpt'>>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'title' | 'slug'>>>>, readonly coverImage: Maybe<(
        Pick<ContentfulAsset, 'gatsbyImageData'>
        & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
      )> }
    )> } };

type TagsQueryVariables = Exact<{ [key: string]: never; }>;


type TagsQuery = { readonly tags: { readonly edges: ReadonlyArray<{ readonly node: Pick<ContentfulTag, 'title' | 'slug'> }> }, readonly postsGroupByTag: { readonly group: ReadonlyArray<Pick<ContentfulPostGroupConnection, 'totalCount' | 'fieldValue'>> } };

type PostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type PostQuery = { readonly contentfulPost: Maybe<(
    Pick<ContentfulPost, 'date' | 'slug' | 'title'>
    & { readonly content: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'title' | 'slug'>>>>, readonly coverImage: Maybe<(
      Pick<ContentfulAsset, 'gatsbyImageData'>
      & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    )>, readonly excerpt: Maybe<Pick<contentfulPostExcerptTextNode, 'excerpt'>> }
  )> };

type PostsByTagQueryVariables = Exact<{
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  tagSlug: Maybe<Scalars['String']>;
}>;


type PostsByTagQuery = { readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulPost, 'date' | 'slug' | 'title'>
      & { readonly content: Maybe<Pick<contentfulPostContentTextNode, 'content'>>, readonly excerpt: Maybe<Pick<contentfulPostExcerptTextNode, 'excerpt'>>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'title' | 'slug'>>>> }
    )> }, readonly tags: { readonly edges: ReadonlyArray<{ readonly node: Pick<ContentfulTag, 'title'> }> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type SiteMetaQueryQueryVariables = Exact<{ [key: string]: never; }>;


type SiteMetaQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteName' | 'description' | 'siteUrl' | 'lang' | 'locale' | 'type'>> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type SiteDescriptionQueryVariables = Exact<{ [key: string]: never; }>;


type SiteDescriptionQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'description'>> }> };

}