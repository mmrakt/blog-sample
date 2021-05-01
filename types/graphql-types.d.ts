export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>
  lossless?: Maybe<Scalars['Boolean']>
  speed?: Maybe<Scalars['Int']>
}

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
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
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type FileFieldsEnum =
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
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type GatsbyImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type GraphCms_Asset = Node & {
  localFile?: Maybe<File>
  remoteTypeName: Scalars['String']
  remoteId: Scalars['ID']
  locale: GraphCms_Locale
  stage: GraphCms_Stage
  createdAt: Scalars['JSON']
  createdBy?: Maybe<GraphCms_User>
  updatedAt: Scalars['JSON']
  updatedBy?: Maybe<GraphCms_User>
  publishedAt?: Maybe<Scalars['JSON']>
  publishedBy?: Maybe<GraphCms_User>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  coverImagePost: Array<GraphCms_Post>
  authorAvatar: Array<GraphCms_Author>
  seoImage: Array<GraphCms_Seo>
  url: Scalars['String']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  gatsbyImageData: Scalars['JSON']
}

export type GraphCms_AssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  backgroundColor?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  placeholder?: Maybe<Scalars['JSON']>
}

export type GraphCms_AssetConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_AssetEdge>
  nodes: Array<GraphCms_Asset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphCms_AssetGroupConnection>
}

export type GraphCms_AssetConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum
}

export type GraphCms_AssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphCms_AssetFieldsEnum
}

export type GraphCms_AssetEdge = {
  next?: Maybe<GraphCms_Asset>
  node: GraphCms_Asset
  previous?: Maybe<GraphCms_Asset>
}

export type GraphCms_AssetFieldsEnum =
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___publicURL'
  | 'localFile___childrenImageSharp'
  | 'localFile___childrenImageSharp___fixed___base64'
  | 'localFile___childrenImageSharp___fixed___tracedSVG'
  | 'localFile___childrenImageSharp___fixed___aspectRatio'
  | 'localFile___childrenImageSharp___fixed___width'
  | 'localFile___childrenImageSharp___fixed___height'
  | 'localFile___childrenImageSharp___fixed___src'
  | 'localFile___childrenImageSharp___fixed___srcSet'
  | 'localFile___childrenImageSharp___fixed___srcWebp'
  | 'localFile___childrenImageSharp___fixed___srcSetWebp'
  | 'localFile___childrenImageSharp___fixed___originalName'
  | 'localFile___childrenImageSharp___resolutions___base64'
  | 'localFile___childrenImageSharp___resolutions___tracedSVG'
  | 'localFile___childrenImageSharp___resolutions___aspectRatio'
  | 'localFile___childrenImageSharp___resolutions___width'
  | 'localFile___childrenImageSharp___resolutions___height'
  | 'localFile___childrenImageSharp___resolutions___src'
  | 'localFile___childrenImageSharp___resolutions___srcSet'
  | 'localFile___childrenImageSharp___resolutions___srcWebp'
  | 'localFile___childrenImageSharp___resolutions___srcSetWebp'
  | 'localFile___childrenImageSharp___resolutions___originalName'
  | 'localFile___childrenImageSharp___fluid___base64'
  | 'localFile___childrenImageSharp___fluid___tracedSVG'
  | 'localFile___childrenImageSharp___fluid___aspectRatio'
  | 'localFile___childrenImageSharp___fluid___src'
  | 'localFile___childrenImageSharp___fluid___srcSet'
  | 'localFile___childrenImageSharp___fluid___srcWebp'
  | 'localFile___childrenImageSharp___fluid___srcSetWebp'
  | 'localFile___childrenImageSharp___fluid___sizes'
  | 'localFile___childrenImageSharp___fluid___originalImg'
  | 'localFile___childrenImageSharp___fluid___originalName'
  | 'localFile___childrenImageSharp___fluid___presentationWidth'
  | 'localFile___childrenImageSharp___fluid___presentationHeight'
  | 'localFile___childrenImageSharp___sizes___base64'
  | 'localFile___childrenImageSharp___sizes___tracedSVG'
  | 'localFile___childrenImageSharp___sizes___aspectRatio'
  | 'localFile___childrenImageSharp___sizes___src'
  | 'localFile___childrenImageSharp___sizes___srcSet'
  | 'localFile___childrenImageSharp___sizes___srcWebp'
  | 'localFile___childrenImageSharp___sizes___srcSetWebp'
  | 'localFile___childrenImageSharp___sizes___sizes'
  | 'localFile___childrenImageSharp___sizes___originalImg'
  | 'localFile___childrenImageSharp___sizes___originalName'
  | 'localFile___childrenImageSharp___sizes___presentationWidth'
  | 'localFile___childrenImageSharp___sizes___presentationHeight'
  | 'localFile___childrenImageSharp___gatsbyImageData'
  | 'localFile___childrenImageSharp___original___width'
  | 'localFile___childrenImageSharp___original___height'
  | 'localFile___childrenImageSharp___original___src'
  | 'localFile___childrenImageSharp___resize___src'
  | 'localFile___childrenImageSharp___resize___tracedSVG'
  | 'localFile___childrenImageSharp___resize___width'
  | 'localFile___childrenImageSharp___resize___height'
  | 'localFile___childrenImageSharp___resize___aspectRatio'
  | 'localFile___childrenImageSharp___resize___originalName'
  | 'localFile___childrenImageSharp___id'
  | 'localFile___childrenImageSharp___parent___id'
  | 'localFile___childrenImageSharp___parent___children'
  | 'localFile___childrenImageSharp___children'
  | 'localFile___childrenImageSharp___children___id'
  | 'localFile___childrenImageSharp___children___children'
  | 'localFile___childrenImageSharp___internal___content'
  | 'localFile___childrenImageSharp___internal___contentDigest'
  | 'localFile___childrenImageSharp___internal___description'
  | 'localFile___childrenImageSharp___internal___fieldOwners'
  | 'localFile___childrenImageSharp___internal___ignoreType'
  | 'localFile___childrenImageSharp___internal___mediaType'
  | 'localFile___childrenImageSharp___internal___owner'
  | 'localFile___childrenImageSharp___internal___type'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___resolutions___base64'
  | 'localFile___childImageSharp___resolutions___tracedSVG'
  | 'localFile___childImageSharp___resolutions___aspectRatio'
  | 'localFile___childImageSharp___resolutions___width'
  | 'localFile___childImageSharp___resolutions___height'
  | 'localFile___childImageSharp___resolutions___src'
  | 'localFile___childImageSharp___resolutions___srcSet'
  | 'localFile___childImageSharp___resolutions___srcWebp'
  | 'localFile___childImageSharp___resolutions___srcSetWebp'
  | 'localFile___childImageSharp___resolutions___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___sizes___base64'
  | 'localFile___childImageSharp___sizes___tracedSVG'
  | 'localFile___childImageSharp___sizes___aspectRatio'
  | 'localFile___childImageSharp___sizes___src'
  | 'localFile___childImageSharp___sizes___srcSet'
  | 'localFile___childImageSharp___sizes___srcWebp'
  | 'localFile___childImageSharp___sizes___srcSetWebp'
  | 'localFile___childImageSharp___sizes___sizes'
  | 'localFile___childImageSharp___sizes___originalImg'
  | 'localFile___childImageSharp___sizes___originalName'
  | 'localFile___childImageSharp___sizes___presentationWidth'
  | 'localFile___childImageSharp___sizes___presentationHeight'
  | 'localFile___childImageSharp___gatsbyImageData'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedAt'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedAt'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'handle'
  | 'fileName'
  | 'height'
  | 'width'
  | 'size'
  | 'mimeType'
  | 'coverImagePost'
  | 'coverImagePost___remoteTypeName'
  | 'coverImagePost___remoteId'
  | 'coverImagePost___stage'
  | 'coverImagePost___createdAt'
  | 'coverImagePost___createdBy___remoteTypeName'
  | 'coverImagePost___createdBy___remoteId'
  | 'coverImagePost___createdBy___stage'
  | 'coverImagePost___createdBy___createdAt'
  | 'coverImagePost___createdBy___updatedAt'
  | 'coverImagePost___createdBy___publishedAt'
  | 'coverImagePost___createdBy___name'
  | 'coverImagePost___createdBy___picture'
  | 'coverImagePost___createdBy___kind'
  | 'coverImagePost___createdBy___id'
  | 'coverImagePost___createdBy___parent___id'
  | 'coverImagePost___createdBy___parent___children'
  | 'coverImagePost___createdBy___children'
  | 'coverImagePost___createdBy___children___id'
  | 'coverImagePost___createdBy___children___children'
  | 'coverImagePost___createdBy___internal___content'
  | 'coverImagePost___createdBy___internal___contentDigest'
  | 'coverImagePost___createdBy___internal___description'
  | 'coverImagePost___createdBy___internal___fieldOwners'
  | 'coverImagePost___createdBy___internal___ignoreType'
  | 'coverImagePost___createdBy___internal___mediaType'
  | 'coverImagePost___createdBy___internal___owner'
  | 'coverImagePost___createdBy___internal___type'
  | 'coverImagePost___updatedAt'
  | 'coverImagePost___updatedBy___remoteTypeName'
  | 'coverImagePost___updatedBy___remoteId'
  | 'coverImagePost___updatedBy___stage'
  | 'coverImagePost___updatedBy___createdAt'
  | 'coverImagePost___updatedBy___updatedAt'
  | 'coverImagePost___updatedBy___publishedAt'
  | 'coverImagePost___updatedBy___name'
  | 'coverImagePost___updatedBy___picture'
  | 'coverImagePost___updatedBy___kind'
  | 'coverImagePost___updatedBy___id'
  | 'coverImagePost___updatedBy___parent___id'
  | 'coverImagePost___updatedBy___parent___children'
  | 'coverImagePost___updatedBy___children'
  | 'coverImagePost___updatedBy___children___id'
  | 'coverImagePost___updatedBy___children___children'
  | 'coverImagePost___updatedBy___internal___content'
  | 'coverImagePost___updatedBy___internal___contentDigest'
  | 'coverImagePost___updatedBy___internal___description'
  | 'coverImagePost___updatedBy___internal___fieldOwners'
  | 'coverImagePost___updatedBy___internal___ignoreType'
  | 'coverImagePost___updatedBy___internal___mediaType'
  | 'coverImagePost___updatedBy___internal___owner'
  | 'coverImagePost___updatedBy___internal___type'
  | 'coverImagePost___publishedAt'
  | 'coverImagePost___publishedBy___remoteTypeName'
  | 'coverImagePost___publishedBy___remoteId'
  | 'coverImagePost___publishedBy___stage'
  | 'coverImagePost___publishedBy___createdAt'
  | 'coverImagePost___publishedBy___updatedAt'
  | 'coverImagePost___publishedBy___publishedAt'
  | 'coverImagePost___publishedBy___name'
  | 'coverImagePost___publishedBy___picture'
  | 'coverImagePost___publishedBy___kind'
  | 'coverImagePost___publishedBy___id'
  | 'coverImagePost___publishedBy___parent___id'
  | 'coverImagePost___publishedBy___parent___children'
  | 'coverImagePost___publishedBy___children'
  | 'coverImagePost___publishedBy___children___id'
  | 'coverImagePost___publishedBy___children___children'
  | 'coverImagePost___publishedBy___internal___content'
  | 'coverImagePost___publishedBy___internal___contentDigest'
  | 'coverImagePost___publishedBy___internal___description'
  | 'coverImagePost___publishedBy___internal___fieldOwners'
  | 'coverImagePost___publishedBy___internal___ignoreType'
  | 'coverImagePost___publishedBy___internal___mediaType'
  | 'coverImagePost___publishedBy___internal___owner'
  | 'coverImagePost___publishedBy___internal___type'
  | 'coverImagePost___title'
  | 'coverImagePost___slug'
  | 'coverImagePost___date'
  | 'coverImagePost___excerpt'
  | 'coverImagePost___coverImage___localFile___sourceInstanceName'
  | 'coverImagePost___coverImage___localFile___absolutePath'
  | 'coverImagePost___coverImage___localFile___relativePath'
  | 'coverImagePost___coverImage___localFile___extension'
  | 'coverImagePost___coverImage___localFile___size'
  | 'coverImagePost___coverImage___localFile___prettySize'
  | 'coverImagePost___coverImage___localFile___modifiedTime'
  | 'coverImagePost___coverImage___localFile___accessTime'
  | 'coverImagePost___coverImage___localFile___changeTime'
  | 'coverImagePost___coverImage___localFile___birthTime'
  | 'coverImagePost___coverImage___localFile___root'
  | 'coverImagePost___coverImage___localFile___dir'
  | 'coverImagePost___coverImage___localFile___base'
  | 'coverImagePost___coverImage___localFile___ext'
  | 'coverImagePost___coverImage___localFile___name'
  | 'coverImagePost___coverImage___localFile___relativeDirectory'
  | 'coverImagePost___coverImage___localFile___dev'
  | 'coverImagePost___coverImage___localFile___mode'
  | 'coverImagePost___coverImage___localFile___nlink'
  | 'coverImagePost___coverImage___localFile___uid'
  | 'coverImagePost___coverImage___localFile___gid'
  | 'coverImagePost___coverImage___localFile___rdev'
  | 'coverImagePost___coverImage___localFile___ino'
  | 'coverImagePost___coverImage___localFile___atimeMs'
  | 'coverImagePost___coverImage___localFile___mtimeMs'
  | 'coverImagePost___coverImage___localFile___ctimeMs'
  | 'coverImagePost___coverImage___localFile___atime'
  | 'coverImagePost___coverImage___localFile___mtime'
  | 'coverImagePost___coverImage___localFile___ctime'
  | 'coverImagePost___coverImage___localFile___birthtime'
  | 'coverImagePost___coverImage___localFile___birthtimeMs'
  | 'coverImagePost___coverImage___localFile___blksize'
  | 'coverImagePost___coverImage___localFile___blocks'
  | 'coverImagePost___coverImage___localFile___url'
  | 'coverImagePost___coverImage___localFile___publicURL'
  | 'coverImagePost___coverImage___localFile___childrenImageSharp'
  | 'coverImagePost___coverImage___localFile___id'
  | 'coverImagePost___coverImage___localFile___children'
  | 'coverImagePost___coverImage___remoteTypeName'
  | 'coverImagePost___coverImage___remoteId'
  | 'coverImagePost___coverImage___locale'
  | 'coverImagePost___coverImage___stage'
  | 'coverImagePost___coverImage___createdAt'
  | 'coverImagePost___coverImage___createdBy___remoteTypeName'
  | 'coverImagePost___coverImage___createdBy___remoteId'
  | 'coverImagePost___coverImage___createdBy___stage'
  | 'coverImagePost___coverImage___createdBy___createdAt'
  | 'coverImagePost___coverImage___createdBy___updatedAt'
  | 'coverImagePost___coverImage___createdBy___publishedAt'
  | 'coverImagePost___coverImage___createdBy___name'
  | 'coverImagePost___coverImage___createdBy___picture'
  | 'coverImagePost___coverImage___createdBy___kind'
  | 'coverImagePost___coverImage___createdBy___id'
  | 'coverImagePost___coverImage___createdBy___children'
  | 'coverImagePost___coverImage___updatedAt'
  | 'coverImagePost___coverImage___updatedBy___remoteTypeName'
  | 'coverImagePost___coverImage___updatedBy___remoteId'
  | 'coverImagePost___coverImage___updatedBy___stage'
  | 'coverImagePost___coverImage___updatedBy___createdAt'
  | 'coverImagePost___coverImage___updatedBy___updatedAt'
  | 'coverImagePost___coverImage___updatedBy___publishedAt'
  | 'coverImagePost___coverImage___updatedBy___name'
  | 'coverImagePost___coverImage___updatedBy___picture'
  | 'coverImagePost___coverImage___updatedBy___kind'
  | 'coverImagePost___coverImage___updatedBy___id'
  | 'coverImagePost___coverImage___updatedBy___children'
  | 'coverImagePost___coverImage___publishedAt'
  | 'coverImagePost___coverImage___publishedBy___remoteTypeName'
  | 'coverImagePost___coverImage___publishedBy___remoteId'
  | 'coverImagePost___coverImage___publishedBy___stage'
  | 'coverImagePost___coverImage___publishedBy___createdAt'
  | 'coverImagePost___coverImage___publishedBy___updatedAt'
  | 'coverImagePost___coverImage___publishedBy___publishedAt'
  | 'coverImagePost___coverImage___publishedBy___name'
  | 'coverImagePost___coverImage___publishedBy___picture'
  | 'coverImagePost___coverImage___publishedBy___kind'
  | 'coverImagePost___coverImage___publishedBy___id'
  | 'coverImagePost___coverImage___publishedBy___children'
  | 'coverImagePost___coverImage___handle'
  | 'coverImagePost___coverImage___fileName'
  | 'coverImagePost___coverImage___height'
  | 'coverImagePost___coverImage___width'
  | 'coverImagePost___coverImage___size'
  | 'coverImagePost___coverImage___mimeType'
  | 'coverImagePost___coverImage___coverImagePost'
  | 'coverImagePost___coverImage___coverImagePost___remoteTypeName'
  | 'coverImagePost___coverImage___coverImagePost___remoteId'
  | 'coverImagePost___coverImage___coverImagePost___stage'
  | 'coverImagePost___coverImage___coverImagePost___createdAt'
  | 'coverImagePost___coverImage___coverImagePost___updatedAt'
  | 'coverImagePost___coverImage___coverImagePost___publishedAt'
  | 'coverImagePost___coverImage___coverImagePost___title'
  | 'coverImagePost___coverImage___coverImagePost___slug'
  | 'coverImagePost___coverImage___coverImagePost___date'
  | 'coverImagePost___coverImage___coverImagePost___excerpt'
  | 'coverImagePost___coverImage___coverImagePost___tags'
  | 'coverImagePost___coverImage___coverImagePost___id'
  | 'coverImagePost___coverImage___coverImagePost___children'
  | 'coverImagePost___coverImage___authorAvatar'
  | 'coverImagePost___coverImage___authorAvatar___remoteTypeName'
  | 'coverImagePost___coverImage___authorAvatar___remoteId'
  | 'coverImagePost___coverImage___authorAvatar___stage'
  | 'coverImagePost___coverImage___authorAvatar___createdAt'
  | 'coverImagePost___coverImage___authorAvatar___updatedAt'
  | 'coverImagePost___coverImage___authorAvatar___publishedAt'
  | 'coverImagePost___coverImage___authorAvatar___name'
  | 'coverImagePost___coverImage___authorAvatar___title'
  | 'coverImagePost___coverImage___authorAvatar___biography'
  | 'coverImagePost___coverImage___authorAvatar___posts'
  | 'coverImagePost___coverImage___authorAvatar___id'
  | 'coverImagePost___coverImage___authorAvatar___children'
  | 'coverImagePost___coverImage___seoImage'
  | 'coverImagePost___coverImage___seoImage___remoteTypeName'
  | 'coverImagePost___coverImage___seoImage___remoteId'
  | 'coverImagePost___coverImage___seoImage___stage'
  | 'coverImagePost___coverImage___seoImage___createdAt'
  | 'coverImagePost___coverImage___seoImage___updatedAt'
  | 'coverImagePost___coverImage___seoImage___publishedAt'
  | 'coverImagePost___coverImage___seoImage___title'
  | 'coverImagePost___coverImage___seoImage___description'
  | 'coverImagePost___coverImage___seoImage___keywords'
  | 'coverImagePost___coverImage___seoImage___id'
  | 'coverImagePost___coverImage___seoImage___children'
  | 'coverImagePost___coverImage___url'
  | 'coverImagePost___coverImage___id'
  | 'coverImagePost___coverImage___parent___id'
  | 'coverImagePost___coverImage___parent___children'
  | 'coverImagePost___coverImage___children'
  | 'coverImagePost___coverImage___children___id'
  | 'coverImagePost___coverImage___children___children'
  | 'coverImagePost___coverImage___internal___content'
  | 'coverImagePost___coverImage___internal___contentDigest'
  | 'coverImagePost___coverImage___internal___description'
  | 'coverImagePost___coverImage___internal___fieldOwners'
  | 'coverImagePost___coverImage___internal___ignoreType'
  | 'coverImagePost___coverImage___internal___mediaType'
  | 'coverImagePost___coverImage___internal___owner'
  | 'coverImagePost___coverImage___internal___type'
  | 'coverImagePost___content___markdownNode___id'
  | 'coverImagePost___content___markdownNode___children'
  | 'coverImagePost___content___remoteTypeName'
  | 'coverImagePost___content___raw'
  | 'coverImagePost___content___html'
  | 'coverImagePost___content___markdown'
  | 'coverImagePost___content___text'
  | 'coverImagePost___tags'
  | 'coverImagePost___author___remoteTypeName'
  | 'coverImagePost___author___remoteId'
  | 'coverImagePost___author___stage'
  | 'coverImagePost___author___createdAt'
  | 'coverImagePost___author___createdBy___remoteTypeName'
  | 'coverImagePost___author___createdBy___remoteId'
  | 'coverImagePost___author___createdBy___stage'
  | 'coverImagePost___author___createdBy___createdAt'
  | 'coverImagePost___author___createdBy___updatedAt'
  | 'coverImagePost___author___createdBy___publishedAt'
  | 'coverImagePost___author___createdBy___name'
  | 'coverImagePost___author___createdBy___picture'
  | 'coverImagePost___author___createdBy___kind'
  | 'coverImagePost___author___createdBy___id'
  | 'coverImagePost___author___createdBy___children'
  | 'coverImagePost___author___updatedAt'
  | 'coverImagePost___author___updatedBy___remoteTypeName'
  | 'coverImagePost___author___updatedBy___remoteId'
  | 'coverImagePost___author___updatedBy___stage'
  | 'coverImagePost___author___updatedBy___createdAt'
  | 'coverImagePost___author___updatedBy___updatedAt'
  | 'coverImagePost___author___updatedBy___publishedAt'
  | 'coverImagePost___author___updatedBy___name'
  | 'coverImagePost___author___updatedBy___picture'
  | 'coverImagePost___author___updatedBy___kind'
  | 'coverImagePost___author___updatedBy___id'
  | 'coverImagePost___author___updatedBy___children'
  | 'coverImagePost___author___publishedAt'
  | 'coverImagePost___author___publishedBy___remoteTypeName'
  | 'coverImagePost___author___publishedBy___remoteId'
  | 'coverImagePost___author___publishedBy___stage'
  | 'coverImagePost___author___publishedBy___createdAt'
  | 'coverImagePost___author___publishedBy___updatedAt'
  | 'coverImagePost___author___publishedBy___publishedAt'
  | 'coverImagePost___author___publishedBy___name'
  | 'coverImagePost___author___publishedBy___picture'
  | 'coverImagePost___author___publishedBy___kind'
  | 'coverImagePost___author___publishedBy___id'
  | 'coverImagePost___author___publishedBy___children'
  | 'coverImagePost___author___name'
  | 'coverImagePost___author___picture___remoteTypeName'
  | 'coverImagePost___author___picture___remoteId'
  | 'coverImagePost___author___picture___locale'
  | 'coverImagePost___author___picture___stage'
  | 'coverImagePost___author___picture___createdAt'
  | 'coverImagePost___author___picture___updatedAt'
  | 'coverImagePost___author___picture___publishedAt'
  | 'coverImagePost___author___picture___handle'
  | 'coverImagePost___author___picture___fileName'
  | 'coverImagePost___author___picture___height'
  | 'coverImagePost___author___picture___width'
  | 'coverImagePost___author___picture___size'
  | 'coverImagePost___author___picture___mimeType'
  | 'coverImagePost___author___picture___coverImagePost'
  | 'coverImagePost___author___picture___authorAvatar'
  | 'coverImagePost___author___picture___seoImage'
  | 'coverImagePost___author___picture___url'
  | 'coverImagePost___author___picture___id'
  | 'coverImagePost___author___picture___children'
  | 'coverImagePost___author___title'
  | 'coverImagePost___author___biography'
  | 'coverImagePost___author___posts'
  | 'coverImagePost___author___posts___remoteTypeName'
  | 'coverImagePost___author___posts___remoteId'
  | 'coverImagePost___author___posts___stage'
  | 'coverImagePost___author___posts___createdAt'
  | 'coverImagePost___author___posts___updatedAt'
  | 'coverImagePost___author___posts___publishedAt'
  | 'coverImagePost___author___posts___title'
  | 'coverImagePost___author___posts___slug'
  | 'coverImagePost___author___posts___date'
  | 'coverImagePost___author___posts___excerpt'
  | 'coverImagePost___author___posts___tags'
  | 'coverImagePost___author___posts___id'
  | 'coverImagePost___author___posts___children'
  | 'coverImagePost___author___id'
  | 'coverImagePost___author___parent___id'
  | 'coverImagePost___author___parent___children'
  | 'coverImagePost___author___children'
  | 'coverImagePost___author___children___id'
  | 'coverImagePost___author___children___children'
  | 'coverImagePost___author___internal___content'
  | 'coverImagePost___author___internal___contentDigest'
  | 'coverImagePost___author___internal___description'
  | 'coverImagePost___author___internal___fieldOwners'
  | 'coverImagePost___author___internal___ignoreType'
  | 'coverImagePost___author___internal___mediaType'
  | 'coverImagePost___author___internal___owner'
  | 'coverImagePost___author___internal___type'
  | 'coverImagePost___seo___remoteTypeName'
  | 'coverImagePost___seo___remoteId'
  | 'coverImagePost___seo___stage'
  | 'coverImagePost___seo___createdAt'
  | 'coverImagePost___seo___createdBy___remoteTypeName'
  | 'coverImagePost___seo___createdBy___remoteId'
  | 'coverImagePost___seo___createdBy___stage'
  | 'coverImagePost___seo___createdBy___createdAt'
  | 'coverImagePost___seo___createdBy___updatedAt'
  | 'coverImagePost___seo___createdBy___publishedAt'
  | 'coverImagePost___seo___createdBy___name'
  | 'coverImagePost___seo___createdBy___picture'
  | 'coverImagePost___seo___createdBy___kind'
  | 'coverImagePost___seo___createdBy___id'
  | 'coverImagePost___seo___createdBy___children'
  | 'coverImagePost___seo___updatedAt'
  | 'coverImagePost___seo___updatedBy___remoteTypeName'
  | 'coverImagePost___seo___updatedBy___remoteId'
  | 'coverImagePost___seo___updatedBy___stage'
  | 'coverImagePost___seo___updatedBy___createdAt'
  | 'coverImagePost___seo___updatedBy___updatedAt'
  | 'coverImagePost___seo___updatedBy___publishedAt'
  | 'coverImagePost___seo___updatedBy___name'
  | 'coverImagePost___seo___updatedBy___picture'
  | 'coverImagePost___seo___updatedBy___kind'
  | 'coverImagePost___seo___updatedBy___id'
  | 'coverImagePost___seo___updatedBy___children'
  | 'coverImagePost___seo___publishedAt'
  | 'coverImagePost___seo___publishedBy___remoteTypeName'
  | 'coverImagePost___seo___publishedBy___remoteId'
  | 'coverImagePost___seo___publishedBy___stage'
  | 'coverImagePost___seo___publishedBy___createdAt'
  | 'coverImagePost___seo___publishedBy___updatedAt'
  | 'coverImagePost___seo___publishedBy___publishedAt'
  | 'coverImagePost___seo___publishedBy___name'
  | 'coverImagePost___seo___publishedBy___picture'
  | 'coverImagePost___seo___publishedBy___kind'
  | 'coverImagePost___seo___publishedBy___id'
  | 'coverImagePost___seo___publishedBy___children'
  | 'coverImagePost___seo___title'
  | 'coverImagePost___seo___description'
  | 'coverImagePost___seo___keywords'
  | 'coverImagePost___seo___image___remoteTypeName'
  | 'coverImagePost___seo___image___remoteId'
  | 'coverImagePost___seo___image___locale'
  | 'coverImagePost___seo___image___stage'
  | 'coverImagePost___seo___image___createdAt'
  | 'coverImagePost___seo___image___updatedAt'
  | 'coverImagePost___seo___image___publishedAt'
  | 'coverImagePost___seo___image___handle'
  | 'coverImagePost___seo___image___fileName'
  | 'coverImagePost___seo___image___height'
  | 'coverImagePost___seo___image___width'
  | 'coverImagePost___seo___image___size'
  | 'coverImagePost___seo___image___mimeType'
  | 'coverImagePost___seo___image___coverImagePost'
  | 'coverImagePost___seo___image___authorAvatar'
  | 'coverImagePost___seo___image___seoImage'
  | 'coverImagePost___seo___image___url'
  | 'coverImagePost___seo___image___id'
  | 'coverImagePost___seo___image___children'
  | 'coverImagePost___seo___id'
  | 'coverImagePost___seo___parent___id'
  | 'coverImagePost___seo___parent___children'
  | 'coverImagePost___seo___children'
  | 'coverImagePost___seo___children___id'
  | 'coverImagePost___seo___children___children'
  | 'coverImagePost___seo___internal___content'
  | 'coverImagePost___seo___internal___contentDigest'
  | 'coverImagePost___seo___internal___description'
  | 'coverImagePost___seo___internal___fieldOwners'
  | 'coverImagePost___seo___internal___ignoreType'
  | 'coverImagePost___seo___internal___mediaType'
  | 'coverImagePost___seo___internal___owner'
  | 'coverImagePost___seo___internal___type'
  | 'coverImagePost___id'
  | 'coverImagePost___parent___id'
  | 'coverImagePost___parent___parent___id'
  | 'coverImagePost___parent___parent___children'
  | 'coverImagePost___parent___children'
  | 'coverImagePost___parent___children___id'
  | 'coverImagePost___parent___children___children'
  | 'coverImagePost___parent___internal___content'
  | 'coverImagePost___parent___internal___contentDigest'
  | 'coverImagePost___parent___internal___description'
  | 'coverImagePost___parent___internal___fieldOwners'
  | 'coverImagePost___parent___internal___ignoreType'
  | 'coverImagePost___parent___internal___mediaType'
  | 'coverImagePost___parent___internal___owner'
  | 'coverImagePost___parent___internal___type'
  | 'coverImagePost___children'
  | 'coverImagePost___children___id'
  | 'coverImagePost___children___parent___id'
  | 'coverImagePost___children___parent___children'
  | 'coverImagePost___children___children'
  | 'coverImagePost___children___children___id'
  | 'coverImagePost___children___children___children'
  | 'coverImagePost___children___internal___content'
  | 'coverImagePost___children___internal___contentDigest'
  | 'coverImagePost___children___internal___description'
  | 'coverImagePost___children___internal___fieldOwners'
  | 'coverImagePost___children___internal___ignoreType'
  | 'coverImagePost___children___internal___mediaType'
  | 'coverImagePost___children___internal___owner'
  | 'coverImagePost___children___internal___type'
  | 'coverImagePost___internal___content'
  | 'coverImagePost___internal___contentDigest'
  | 'coverImagePost___internal___description'
  | 'coverImagePost___internal___fieldOwners'
  | 'coverImagePost___internal___ignoreType'
  | 'coverImagePost___internal___mediaType'
  | 'coverImagePost___internal___owner'
  | 'coverImagePost___internal___type'
  | 'authorAvatar'
  | 'authorAvatar___remoteTypeName'
  | 'authorAvatar___remoteId'
  | 'authorAvatar___stage'
  | 'authorAvatar___createdAt'
  | 'authorAvatar___createdBy___remoteTypeName'
  | 'authorAvatar___createdBy___remoteId'
  | 'authorAvatar___createdBy___stage'
  | 'authorAvatar___createdBy___createdAt'
  | 'authorAvatar___createdBy___updatedAt'
  | 'authorAvatar___createdBy___publishedAt'
  | 'authorAvatar___createdBy___name'
  | 'authorAvatar___createdBy___picture'
  | 'authorAvatar___createdBy___kind'
  | 'authorAvatar___createdBy___id'
  | 'authorAvatar___createdBy___parent___id'
  | 'authorAvatar___createdBy___parent___children'
  | 'authorAvatar___createdBy___children'
  | 'authorAvatar___createdBy___children___id'
  | 'authorAvatar___createdBy___children___children'
  | 'authorAvatar___createdBy___internal___content'
  | 'authorAvatar___createdBy___internal___contentDigest'
  | 'authorAvatar___createdBy___internal___description'
  | 'authorAvatar___createdBy___internal___fieldOwners'
  | 'authorAvatar___createdBy___internal___ignoreType'
  | 'authorAvatar___createdBy___internal___mediaType'
  | 'authorAvatar___createdBy___internal___owner'
  | 'authorAvatar___createdBy___internal___type'
  | 'authorAvatar___updatedAt'
  | 'authorAvatar___updatedBy___remoteTypeName'
  | 'authorAvatar___updatedBy___remoteId'
  | 'authorAvatar___updatedBy___stage'
  | 'authorAvatar___updatedBy___createdAt'
  | 'authorAvatar___updatedBy___updatedAt'
  | 'authorAvatar___updatedBy___publishedAt'
  | 'authorAvatar___updatedBy___name'
  | 'authorAvatar___updatedBy___picture'
  | 'authorAvatar___updatedBy___kind'
  | 'authorAvatar___updatedBy___id'
  | 'authorAvatar___updatedBy___parent___id'
  | 'authorAvatar___updatedBy___parent___children'
  | 'authorAvatar___updatedBy___children'
  | 'authorAvatar___updatedBy___children___id'
  | 'authorAvatar___updatedBy___children___children'
  | 'authorAvatar___updatedBy___internal___content'
  | 'authorAvatar___updatedBy___internal___contentDigest'
  | 'authorAvatar___updatedBy___internal___description'
  | 'authorAvatar___updatedBy___internal___fieldOwners'
  | 'authorAvatar___updatedBy___internal___ignoreType'
  | 'authorAvatar___updatedBy___internal___mediaType'
  | 'authorAvatar___updatedBy___internal___owner'
  | 'authorAvatar___updatedBy___internal___type'
  | 'authorAvatar___publishedAt'
  | 'authorAvatar___publishedBy___remoteTypeName'
  | 'authorAvatar___publishedBy___remoteId'
  | 'authorAvatar___publishedBy___stage'
  | 'authorAvatar___publishedBy___createdAt'
  | 'authorAvatar___publishedBy___updatedAt'
  | 'authorAvatar___publishedBy___publishedAt'
  | 'authorAvatar___publishedBy___name'
  | 'authorAvatar___publishedBy___picture'
  | 'authorAvatar___publishedBy___kind'
  | 'authorAvatar___publishedBy___id'
  | 'authorAvatar___publishedBy___parent___id'
  | 'authorAvatar___publishedBy___parent___children'
  | 'authorAvatar___publishedBy___children'
  | 'authorAvatar___publishedBy___children___id'
  | 'authorAvatar___publishedBy___children___children'
  | 'authorAvatar___publishedBy___internal___content'
  | 'authorAvatar___publishedBy___internal___contentDigest'
  | 'authorAvatar___publishedBy___internal___description'
  | 'authorAvatar___publishedBy___internal___fieldOwners'
  | 'authorAvatar___publishedBy___internal___ignoreType'
  | 'authorAvatar___publishedBy___internal___mediaType'
  | 'authorAvatar___publishedBy___internal___owner'
  | 'authorAvatar___publishedBy___internal___type'
  | 'authorAvatar___name'
  | 'authorAvatar___picture___localFile___sourceInstanceName'
  | 'authorAvatar___picture___localFile___absolutePath'
  | 'authorAvatar___picture___localFile___relativePath'
  | 'authorAvatar___picture___localFile___extension'
  | 'authorAvatar___picture___localFile___size'
  | 'authorAvatar___picture___localFile___prettySize'
  | 'authorAvatar___picture___localFile___modifiedTime'
  | 'authorAvatar___picture___localFile___accessTime'
  | 'authorAvatar___picture___localFile___changeTime'
  | 'authorAvatar___picture___localFile___birthTime'
  | 'authorAvatar___picture___localFile___root'
  | 'authorAvatar___picture___localFile___dir'
  | 'authorAvatar___picture___localFile___base'
  | 'authorAvatar___picture___localFile___ext'
  | 'authorAvatar___picture___localFile___name'
  | 'authorAvatar___picture___localFile___relativeDirectory'
  | 'authorAvatar___picture___localFile___dev'
  | 'authorAvatar___picture___localFile___mode'
  | 'authorAvatar___picture___localFile___nlink'
  | 'authorAvatar___picture___localFile___uid'
  | 'authorAvatar___picture___localFile___gid'
  | 'authorAvatar___picture___localFile___rdev'
  | 'authorAvatar___picture___localFile___ino'
  | 'authorAvatar___picture___localFile___atimeMs'
  | 'authorAvatar___picture___localFile___mtimeMs'
  | 'authorAvatar___picture___localFile___ctimeMs'
  | 'authorAvatar___picture___localFile___atime'
  | 'authorAvatar___picture___localFile___mtime'
  | 'authorAvatar___picture___localFile___ctime'
  | 'authorAvatar___picture___localFile___birthtime'
  | 'authorAvatar___picture___localFile___birthtimeMs'
  | 'authorAvatar___picture___localFile___blksize'
  | 'authorAvatar___picture___localFile___blocks'
  | 'authorAvatar___picture___localFile___url'
  | 'authorAvatar___picture___localFile___publicURL'
  | 'authorAvatar___picture___localFile___childrenImageSharp'
  | 'authorAvatar___picture___localFile___id'
  | 'authorAvatar___picture___localFile___children'
  | 'authorAvatar___picture___remoteTypeName'
  | 'authorAvatar___picture___remoteId'
  | 'authorAvatar___picture___locale'
  | 'authorAvatar___picture___stage'
  | 'authorAvatar___picture___createdAt'
  | 'authorAvatar___picture___createdBy___remoteTypeName'
  | 'authorAvatar___picture___createdBy___remoteId'
  | 'authorAvatar___picture___createdBy___stage'
  | 'authorAvatar___picture___createdBy___createdAt'
  | 'authorAvatar___picture___createdBy___updatedAt'
  | 'authorAvatar___picture___createdBy___publishedAt'
  | 'authorAvatar___picture___createdBy___name'
  | 'authorAvatar___picture___createdBy___picture'
  | 'authorAvatar___picture___createdBy___kind'
  | 'authorAvatar___picture___createdBy___id'
  | 'authorAvatar___picture___createdBy___children'
  | 'authorAvatar___picture___updatedAt'
  | 'authorAvatar___picture___updatedBy___remoteTypeName'
  | 'authorAvatar___picture___updatedBy___remoteId'
  | 'authorAvatar___picture___updatedBy___stage'
  | 'authorAvatar___picture___updatedBy___createdAt'
  | 'authorAvatar___picture___updatedBy___updatedAt'
  | 'authorAvatar___picture___updatedBy___publishedAt'
  | 'authorAvatar___picture___updatedBy___name'
  | 'authorAvatar___picture___updatedBy___picture'
  | 'authorAvatar___picture___updatedBy___kind'
  | 'authorAvatar___picture___updatedBy___id'
  | 'authorAvatar___picture___updatedBy___children'
  | 'authorAvatar___picture___publishedAt'
  | 'authorAvatar___picture___publishedBy___remoteTypeName'
  | 'authorAvatar___picture___publishedBy___remoteId'
  | 'authorAvatar___picture___publishedBy___stage'
  | 'authorAvatar___picture___publishedBy___createdAt'
  | 'authorAvatar___picture___publishedBy___updatedAt'
  | 'authorAvatar___picture___publishedBy___publishedAt'
  | 'authorAvatar___picture___publishedBy___name'
  | 'authorAvatar___picture___publishedBy___picture'
  | 'authorAvatar___picture___publishedBy___kind'
  | 'authorAvatar___picture___publishedBy___id'
  | 'authorAvatar___picture___publishedBy___children'
  | 'authorAvatar___picture___handle'
  | 'authorAvatar___picture___fileName'
  | 'authorAvatar___picture___height'
  | 'authorAvatar___picture___width'
  | 'authorAvatar___picture___size'
  | 'authorAvatar___picture___mimeType'
  | 'authorAvatar___picture___coverImagePost'
  | 'authorAvatar___picture___coverImagePost___remoteTypeName'
  | 'authorAvatar___picture___coverImagePost___remoteId'
  | 'authorAvatar___picture___coverImagePost___stage'
  | 'authorAvatar___picture___coverImagePost___createdAt'
  | 'authorAvatar___picture___coverImagePost___updatedAt'
  | 'authorAvatar___picture___coverImagePost___publishedAt'
  | 'authorAvatar___picture___coverImagePost___title'
  | 'authorAvatar___picture___coverImagePost___slug'
  | 'authorAvatar___picture___coverImagePost___date'
  | 'authorAvatar___picture___coverImagePost___excerpt'
  | 'authorAvatar___picture___coverImagePost___tags'
  | 'authorAvatar___picture___coverImagePost___id'
  | 'authorAvatar___picture___coverImagePost___children'
  | 'authorAvatar___picture___authorAvatar'
  | 'authorAvatar___picture___authorAvatar___remoteTypeName'
  | 'authorAvatar___picture___authorAvatar___remoteId'
  | 'authorAvatar___picture___authorAvatar___stage'
  | 'authorAvatar___picture___authorAvatar___createdAt'
  | 'authorAvatar___picture___authorAvatar___updatedAt'
  | 'authorAvatar___picture___authorAvatar___publishedAt'
  | 'authorAvatar___picture___authorAvatar___name'
  | 'authorAvatar___picture___authorAvatar___title'
  | 'authorAvatar___picture___authorAvatar___biography'
  | 'authorAvatar___picture___authorAvatar___posts'
  | 'authorAvatar___picture___authorAvatar___id'
  | 'authorAvatar___picture___authorAvatar___children'
  | 'authorAvatar___picture___seoImage'
  | 'authorAvatar___picture___seoImage___remoteTypeName'
  | 'authorAvatar___picture___seoImage___remoteId'
  | 'authorAvatar___picture___seoImage___stage'
  | 'authorAvatar___picture___seoImage___createdAt'
  | 'authorAvatar___picture___seoImage___updatedAt'
  | 'authorAvatar___picture___seoImage___publishedAt'
  | 'authorAvatar___picture___seoImage___title'
  | 'authorAvatar___picture___seoImage___description'
  | 'authorAvatar___picture___seoImage___keywords'
  | 'authorAvatar___picture___seoImage___id'
  | 'authorAvatar___picture___seoImage___children'
  | 'authorAvatar___picture___url'
  | 'authorAvatar___picture___id'
  | 'authorAvatar___picture___parent___id'
  | 'authorAvatar___picture___parent___children'
  | 'authorAvatar___picture___children'
  | 'authorAvatar___picture___children___id'
  | 'authorAvatar___picture___children___children'
  | 'authorAvatar___picture___internal___content'
  | 'authorAvatar___picture___internal___contentDigest'
  | 'authorAvatar___picture___internal___description'
  | 'authorAvatar___picture___internal___fieldOwners'
  | 'authorAvatar___picture___internal___ignoreType'
  | 'authorAvatar___picture___internal___mediaType'
  | 'authorAvatar___picture___internal___owner'
  | 'authorAvatar___picture___internal___type'
  | 'authorAvatar___title'
  | 'authorAvatar___biography'
  | 'authorAvatar___posts'
  | 'authorAvatar___posts___remoteTypeName'
  | 'authorAvatar___posts___remoteId'
  | 'authorAvatar___posts___stage'
  | 'authorAvatar___posts___createdAt'
  | 'authorAvatar___posts___createdBy___remoteTypeName'
  | 'authorAvatar___posts___createdBy___remoteId'
  | 'authorAvatar___posts___createdBy___stage'
  | 'authorAvatar___posts___createdBy___createdAt'
  | 'authorAvatar___posts___createdBy___updatedAt'
  | 'authorAvatar___posts___createdBy___publishedAt'
  | 'authorAvatar___posts___createdBy___name'
  | 'authorAvatar___posts___createdBy___picture'
  | 'authorAvatar___posts___createdBy___kind'
  | 'authorAvatar___posts___createdBy___id'
  | 'authorAvatar___posts___createdBy___children'
  | 'authorAvatar___posts___updatedAt'
  | 'authorAvatar___posts___updatedBy___remoteTypeName'
  | 'authorAvatar___posts___updatedBy___remoteId'
  | 'authorAvatar___posts___updatedBy___stage'
  | 'authorAvatar___posts___updatedBy___createdAt'
  | 'authorAvatar___posts___updatedBy___updatedAt'
  | 'authorAvatar___posts___updatedBy___publishedAt'
  | 'authorAvatar___posts___updatedBy___name'
  | 'authorAvatar___posts___updatedBy___picture'
  | 'authorAvatar___posts___updatedBy___kind'
  | 'authorAvatar___posts___updatedBy___id'
  | 'authorAvatar___posts___updatedBy___children'
  | 'authorAvatar___posts___publishedAt'
  | 'authorAvatar___posts___publishedBy___remoteTypeName'
  | 'authorAvatar___posts___publishedBy___remoteId'
  | 'authorAvatar___posts___publishedBy___stage'
  | 'authorAvatar___posts___publishedBy___createdAt'
  | 'authorAvatar___posts___publishedBy___updatedAt'
  | 'authorAvatar___posts___publishedBy___publishedAt'
  | 'authorAvatar___posts___publishedBy___name'
  | 'authorAvatar___posts___publishedBy___picture'
  | 'authorAvatar___posts___publishedBy___kind'
  | 'authorAvatar___posts___publishedBy___id'
  | 'authorAvatar___posts___publishedBy___children'
  | 'authorAvatar___posts___title'
  | 'authorAvatar___posts___slug'
  | 'authorAvatar___posts___date'
  | 'authorAvatar___posts___excerpt'
  | 'authorAvatar___posts___coverImage___remoteTypeName'
  | 'authorAvatar___posts___coverImage___remoteId'
  | 'authorAvatar___posts___coverImage___locale'
  | 'authorAvatar___posts___coverImage___stage'
  | 'authorAvatar___posts___coverImage___createdAt'
  | 'authorAvatar___posts___coverImage___updatedAt'
  | 'authorAvatar___posts___coverImage___publishedAt'
  | 'authorAvatar___posts___coverImage___handle'
  | 'authorAvatar___posts___coverImage___fileName'
  | 'authorAvatar___posts___coverImage___height'
  | 'authorAvatar___posts___coverImage___width'
  | 'authorAvatar___posts___coverImage___size'
  | 'authorAvatar___posts___coverImage___mimeType'
  | 'authorAvatar___posts___coverImage___coverImagePost'
  | 'authorAvatar___posts___coverImage___authorAvatar'
  | 'authorAvatar___posts___coverImage___seoImage'
  | 'authorAvatar___posts___coverImage___url'
  | 'authorAvatar___posts___coverImage___id'
  | 'authorAvatar___posts___coverImage___children'
  | 'authorAvatar___posts___content___remoteTypeName'
  | 'authorAvatar___posts___content___raw'
  | 'authorAvatar___posts___content___html'
  | 'authorAvatar___posts___content___markdown'
  | 'authorAvatar___posts___content___text'
  | 'authorAvatar___posts___tags'
  | 'authorAvatar___posts___author___remoteTypeName'
  | 'authorAvatar___posts___author___remoteId'
  | 'authorAvatar___posts___author___stage'
  | 'authorAvatar___posts___author___createdAt'
  | 'authorAvatar___posts___author___updatedAt'
  | 'authorAvatar___posts___author___publishedAt'
  | 'authorAvatar___posts___author___name'
  | 'authorAvatar___posts___author___title'
  | 'authorAvatar___posts___author___biography'
  | 'authorAvatar___posts___author___posts'
  | 'authorAvatar___posts___author___id'
  | 'authorAvatar___posts___author___children'
  | 'authorAvatar___posts___seo___remoteTypeName'
  | 'authorAvatar___posts___seo___remoteId'
  | 'authorAvatar___posts___seo___stage'
  | 'authorAvatar___posts___seo___createdAt'
  | 'authorAvatar___posts___seo___updatedAt'
  | 'authorAvatar___posts___seo___publishedAt'
  | 'authorAvatar___posts___seo___title'
  | 'authorAvatar___posts___seo___description'
  | 'authorAvatar___posts___seo___keywords'
  | 'authorAvatar___posts___seo___id'
  | 'authorAvatar___posts___seo___children'
  | 'authorAvatar___posts___id'
  | 'authorAvatar___posts___parent___id'
  | 'authorAvatar___posts___parent___children'
  | 'authorAvatar___posts___children'
  | 'authorAvatar___posts___children___id'
  | 'authorAvatar___posts___children___children'
  | 'authorAvatar___posts___internal___content'
  | 'authorAvatar___posts___internal___contentDigest'
  | 'authorAvatar___posts___internal___description'
  | 'authorAvatar___posts___internal___fieldOwners'
  | 'authorAvatar___posts___internal___ignoreType'
  | 'authorAvatar___posts___internal___mediaType'
  | 'authorAvatar___posts___internal___owner'
  | 'authorAvatar___posts___internal___type'
  | 'authorAvatar___id'
  | 'authorAvatar___parent___id'
  | 'authorAvatar___parent___parent___id'
  | 'authorAvatar___parent___parent___children'
  | 'authorAvatar___parent___children'
  | 'authorAvatar___parent___children___id'
  | 'authorAvatar___parent___children___children'
  | 'authorAvatar___parent___internal___content'
  | 'authorAvatar___parent___internal___contentDigest'
  | 'authorAvatar___parent___internal___description'
  | 'authorAvatar___parent___internal___fieldOwners'
  | 'authorAvatar___parent___internal___ignoreType'
  | 'authorAvatar___parent___internal___mediaType'
  | 'authorAvatar___parent___internal___owner'
  | 'authorAvatar___parent___internal___type'
  | 'authorAvatar___children'
  | 'authorAvatar___children___id'
  | 'authorAvatar___children___parent___id'
  | 'authorAvatar___children___parent___children'
  | 'authorAvatar___children___children'
  | 'authorAvatar___children___children___id'
  | 'authorAvatar___children___children___children'
  | 'authorAvatar___children___internal___content'
  | 'authorAvatar___children___internal___contentDigest'
  | 'authorAvatar___children___internal___description'
  | 'authorAvatar___children___internal___fieldOwners'
  | 'authorAvatar___children___internal___ignoreType'
  | 'authorAvatar___children___internal___mediaType'
  | 'authorAvatar___children___internal___owner'
  | 'authorAvatar___children___internal___type'
  | 'authorAvatar___internal___content'
  | 'authorAvatar___internal___contentDigest'
  | 'authorAvatar___internal___description'
  | 'authorAvatar___internal___fieldOwners'
  | 'authorAvatar___internal___ignoreType'
  | 'authorAvatar___internal___mediaType'
  | 'authorAvatar___internal___owner'
  | 'authorAvatar___internal___type'
  | 'seoImage'
  | 'seoImage___remoteTypeName'
  | 'seoImage___remoteId'
  | 'seoImage___stage'
  | 'seoImage___createdAt'
  | 'seoImage___createdBy___remoteTypeName'
  | 'seoImage___createdBy___remoteId'
  | 'seoImage___createdBy___stage'
  | 'seoImage___createdBy___createdAt'
  | 'seoImage___createdBy___updatedAt'
  | 'seoImage___createdBy___publishedAt'
  | 'seoImage___createdBy___name'
  | 'seoImage___createdBy___picture'
  | 'seoImage___createdBy___kind'
  | 'seoImage___createdBy___id'
  | 'seoImage___createdBy___parent___id'
  | 'seoImage___createdBy___parent___children'
  | 'seoImage___createdBy___children'
  | 'seoImage___createdBy___children___id'
  | 'seoImage___createdBy___children___children'
  | 'seoImage___createdBy___internal___content'
  | 'seoImage___createdBy___internal___contentDigest'
  | 'seoImage___createdBy___internal___description'
  | 'seoImage___createdBy___internal___fieldOwners'
  | 'seoImage___createdBy___internal___ignoreType'
  | 'seoImage___createdBy___internal___mediaType'
  | 'seoImage___createdBy___internal___owner'
  | 'seoImage___createdBy___internal___type'
  | 'seoImage___updatedAt'
  | 'seoImage___updatedBy___remoteTypeName'
  | 'seoImage___updatedBy___remoteId'
  | 'seoImage___updatedBy___stage'
  | 'seoImage___updatedBy___createdAt'
  | 'seoImage___updatedBy___updatedAt'
  | 'seoImage___updatedBy___publishedAt'
  | 'seoImage___updatedBy___name'
  | 'seoImage___updatedBy___picture'
  | 'seoImage___updatedBy___kind'
  | 'seoImage___updatedBy___id'
  | 'seoImage___updatedBy___parent___id'
  | 'seoImage___updatedBy___parent___children'
  | 'seoImage___updatedBy___children'
  | 'seoImage___updatedBy___children___id'
  | 'seoImage___updatedBy___children___children'
  | 'seoImage___updatedBy___internal___content'
  | 'seoImage___updatedBy___internal___contentDigest'
  | 'seoImage___updatedBy___internal___description'
  | 'seoImage___updatedBy___internal___fieldOwners'
  | 'seoImage___updatedBy___internal___ignoreType'
  | 'seoImage___updatedBy___internal___mediaType'
  | 'seoImage___updatedBy___internal___owner'
  | 'seoImage___updatedBy___internal___type'
  | 'seoImage___publishedAt'
  | 'seoImage___publishedBy___remoteTypeName'
  | 'seoImage___publishedBy___remoteId'
  | 'seoImage___publishedBy___stage'
  | 'seoImage___publishedBy___createdAt'
  | 'seoImage___publishedBy___updatedAt'
  | 'seoImage___publishedBy___publishedAt'
  | 'seoImage___publishedBy___name'
  | 'seoImage___publishedBy___picture'
  | 'seoImage___publishedBy___kind'
  | 'seoImage___publishedBy___id'
  | 'seoImage___publishedBy___parent___id'
  | 'seoImage___publishedBy___parent___children'
  | 'seoImage___publishedBy___children'
  | 'seoImage___publishedBy___children___id'
  | 'seoImage___publishedBy___children___children'
  | 'seoImage___publishedBy___internal___content'
  | 'seoImage___publishedBy___internal___contentDigest'
  | 'seoImage___publishedBy___internal___description'
  | 'seoImage___publishedBy___internal___fieldOwners'
  | 'seoImage___publishedBy___internal___ignoreType'
  | 'seoImage___publishedBy___internal___mediaType'
  | 'seoImage___publishedBy___internal___owner'
  | 'seoImage___publishedBy___internal___type'
  | 'seoImage___title'
  | 'seoImage___description'
  | 'seoImage___keywords'
  | 'seoImage___image___localFile___sourceInstanceName'
  | 'seoImage___image___localFile___absolutePath'
  | 'seoImage___image___localFile___relativePath'
  | 'seoImage___image___localFile___extension'
  | 'seoImage___image___localFile___size'
  | 'seoImage___image___localFile___prettySize'
  | 'seoImage___image___localFile___modifiedTime'
  | 'seoImage___image___localFile___accessTime'
  | 'seoImage___image___localFile___changeTime'
  | 'seoImage___image___localFile___birthTime'
  | 'seoImage___image___localFile___root'
  | 'seoImage___image___localFile___dir'
  | 'seoImage___image___localFile___base'
  | 'seoImage___image___localFile___ext'
  | 'seoImage___image___localFile___name'
  | 'seoImage___image___localFile___relativeDirectory'
  | 'seoImage___image___localFile___dev'
  | 'seoImage___image___localFile___mode'
  | 'seoImage___image___localFile___nlink'
  | 'seoImage___image___localFile___uid'
  | 'seoImage___image___localFile___gid'
  | 'seoImage___image___localFile___rdev'
  | 'seoImage___image___localFile___ino'
  | 'seoImage___image___localFile___atimeMs'
  | 'seoImage___image___localFile___mtimeMs'
  | 'seoImage___image___localFile___ctimeMs'
  | 'seoImage___image___localFile___atime'
  | 'seoImage___image___localFile___mtime'
  | 'seoImage___image___localFile___ctime'
  | 'seoImage___image___localFile___birthtime'
  | 'seoImage___image___localFile___birthtimeMs'
  | 'seoImage___image___localFile___blksize'
  | 'seoImage___image___localFile___blocks'
  | 'seoImage___image___localFile___url'
  | 'seoImage___image___localFile___publicURL'
  | 'seoImage___image___localFile___childrenImageSharp'
  | 'seoImage___image___localFile___id'
  | 'seoImage___image___localFile___children'
  | 'seoImage___image___remoteTypeName'
  | 'seoImage___image___remoteId'
  | 'seoImage___image___locale'
  | 'seoImage___image___stage'
  | 'seoImage___image___createdAt'
  | 'seoImage___image___createdBy___remoteTypeName'
  | 'seoImage___image___createdBy___remoteId'
  | 'seoImage___image___createdBy___stage'
  | 'seoImage___image___createdBy___createdAt'
  | 'seoImage___image___createdBy___updatedAt'
  | 'seoImage___image___createdBy___publishedAt'
  | 'seoImage___image___createdBy___name'
  | 'seoImage___image___createdBy___picture'
  | 'seoImage___image___createdBy___kind'
  | 'seoImage___image___createdBy___id'
  | 'seoImage___image___createdBy___children'
  | 'seoImage___image___updatedAt'
  | 'seoImage___image___updatedBy___remoteTypeName'
  | 'seoImage___image___updatedBy___remoteId'
  | 'seoImage___image___updatedBy___stage'
  | 'seoImage___image___updatedBy___createdAt'
  | 'seoImage___image___updatedBy___updatedAt'
  | 'seoImage___image___updatedBy___publishedAt'
  | 'seoImage___image___updatedBy___name'
  | 'seoImage___image___updatedBy___picture'
  | 'seoImage___image___updatedBy___kind'
  | 'seoImage___image___updatedBy___id'
  | 'seoImage___image___updatedBy___children'
  | 'seoImage___image___publishedAt'
  | 'seoImage___image___publishedBy___remoteTypeName'
  | 'seoImage___image___publishedBy___remoteId'
  | 'seoImage___image___publishedBy___stage'
  | 'seoImage___image___publishedBy___createdAt'
  | 'seoImage___image___publishedBy___updatedAt'
  | 'seoImage___image___publishedBy___publishedAt'
  | 'seoImage___image___publishedBy___name'
  | 'seoImage___image___publishedBy___picture'
  | 'seoImage___image___publishedBy___kind'
  | 'seoImage___image___publishedBy___id'
  | 'seoImage___image___publishedBy___children'
  | 'seoImage___image___handle'
  | 'seoImage___image___fileName'
  | 'seoImage___image___height'
  | 'seoImage___image___width'
  | 'seoImage___image___size'
  | 'seoImage___image___mimeType'
  | 'seoImage___image___coverImagePost'
  | 'seoImage___image___coverImagePost___remoteTypeName'
  | 'seoImage___image___coverImagePost___remoteId'
  | 'seoImage___image___coverImagePost___stage'
  | 'seoImage___image___coverImagePost___createdAt'
  | 'seoImage___image___coverImagePost___updatedAt'
  | 'seoImage___image___coverImagePost___publishedAt'
  | 'seoImage___image___coverImagePost___title'
  | 'seoImage___image___coverImagePost___slug'
  | 'seoImage___image___coverImagePost___date'
  | 'seoImage___image___coverImagePost___excerpt'
  | 'seoImage___image___coverImagePost___tags'
  | 'seoImage___image___coverImagePost___id'
  | 'seoImage___image___coverImagePost___children'
  | 'seoImage___image___authorAvatar'
  | 'seoImage___image___authorAvatar___remoteTypeName'
  | 'seoImage___image___authorAvatar___remoteId'
  | 'seoImage___image___authorAvatar___stage'
  | 'seoImage___image___authorAvatar___createdAt'
  | 'seoImage___image___authorAvatar___updatedAt'
  | 'seoImage___image___authorAvatar___publishedAt'
  | 'seoImage___image___authorAvatar___name'
  | 'seoImage___image___authorAvatar___title'
  | 'seoImage___image___authorAvatar___biography'
  | 'seoImage___image___authorAvatar___posts'
  | 'seoImage___image___authorAvatar___id'
  | 'seoImage___image___authorAvatar___children'
  | 'seoImage___image___seoImage'
  | 'seoImage___image___seoImage___remoteTypeName'
  | 'seoImage___image___seoImage___remoteId'
  | 'seoImage___image___seoImage___stage'
  | 'seoImage___image___seoImage___createdAt'
  | 'seoImage___image___seoImage___updatedAt'
  | 'seoImage___image___seoImage___publishedAt'
  | 'seoImage___image___seoImage___title'
  | 'seoImage___image___seoImage___description'
  | 'seoImage___image___seoImage___keywords'
  | 'seoImage___image___seoImage___id'
  | 'seoImage___image___seoImage___children'
  | 'seoImage___image___url'
  | 'seoImage___image___id'
  | 'seoImage___image___parent___id'
  | 'seoImage___image___parent___children'
  | 'seoImage___image___children'
  | 'seoImage___image___children___id'
  | 'seoImage___image___children___children'
  | 'seoImage___image___internal___content'
  | 'seoImage___image___internal___contentDigest'
  | 'seoImage___image___internal___description'
  | 'seoImage___image___internal___fieldOwners'
  | 'seoImage___image___internal___ignoreType'
  | 'seoImage___image___internal___mediaType'
  | 'seoImage___image___internal___owner'
  | 'seoImage___image___internal___type'
  | 'seoImage___id'
  | 'seoImage___parent___id'
  | 'seoImage___parent___parent___id'
  | 'seoImage___parent___parent___children'
  | 'seoImage___parent___children'
  | 'seoImage___parent___children___id'
  | 'seoImage___parent___children___children'
  | 'seoImage___parent___internal___content'
  | 'seoImage___parent___internal___contentDigest'
  | 'seoImage___parent___internal___description'
  | 'seoImage___parent___internal___fieldOwners'
  | 'seoImage___parent___internal___ignoreType'
  | 'seoImage___parent___internal___mediaType'
  | 'seoImage___parent___internal___owner'
  | 'seoImage___parent___internal___type'
  | 'seoImage___children'
  | 'seoImage___children___id'
  | 'seoImage___children___parent___id'
  | 'seoImage___children___parent___children'
  | 'seoImage___children___children'
  | 'seoImage___children___children___id'
  | 'seoImage___children___children___children'
  | 'seoImage___children___internal___content'
  | 'seoImage___children___internal___contentDigest'
  | 'seoImage___children___internal___description'
  | 'seoImage___children___internal___fieldOwners'
  | 'seoImage___children___internal___ignoreType'
  | 'seoImage___children___internal___mediaType'
  | 'seoImage___children___internal___owner'
  | 'seoImage___children___internal___type'
  | 'seoImage___internal___content'
  | 'seoImage___internal___contentDigest'
  | 'seoImage___internal___description'
  | 'seoImage___internal___fieldOwners'
  | 'seoImage___internal___ignoreType'
  | 'seoImage___internal___mediaType'
  | 'seoImage___internal___owner'
  | 'seoImage___internal___type'
  | 'url'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type GraphCms_AssetFilterInput = {
  localFile?: Maybe<FileFilterInput>
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  handle?: Maybe<StringQueryOperatorInput>
  fileName?: Maybe<StringQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  size?: Maybe<FloatQueryOperatorInput>
  mimeType?: Maybe<StringQueryOperatorInput>
  coverImagePost?: Maybe<GraphCms_PostFilterListInput>
  authorAvatar?: Maybe<GraphCms_AuthorFilterListInput>
  seoImage?: Maybe<GraphCms_SeoFilterListInput>
  url?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type GraphCms_AssetGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_AssetEdge>
  nodes: Array<GraphCms_Asset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphCms_AssetSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_AssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type GraphCms_Author = Node & {
  remoteTypeName: Scalars['String']
  remoteId: Scalars['ID']
  stage: GraphCms_Stage
  createdAt: Scalars['JSON']
  createdBy?: Maybe<GraphCms_User>
  updatedAt: Scalars['JSON']
  updatedBy?: Maybe<GraphCms_User>
  publishedAt?: Maybe<Scalars['JSON']>
  publishedBy?: Maybe<GraphCms_User>
  name: Scalars['String']
  picture?: Maybe<GraphCms_Asset>
  title?: Maybe<Scalars['String']>
  biography?: Maybe<Scalars['String']>
  posts: Array<GraphCms_Post>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type GraphCms_AuthorConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_AuthorEdge>
  nodes: Array<GraphCms_Author>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphCms_AuthorGroupConnection>
}

export type GraphCms_AuthorConnectionDistinctArgs = {
  field: GraphCms_AuthorFieldsEnum
}

export type GraphCms_AuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphCms_AuthorFieldsEnum
}

export type GraphCms_AuthorEdge = {
  next?: Maybe<GraphCms_Author>
  node: GraphCms_Author
  previous?: Maybe<GraphCms_Author>
}

export type GraphCms_AuthorFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedAt'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedAt'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'name'
  | 'picture___localFile___sourceInstanceName'
  | 'picture___localFile___absolutePath'
  | 'picture___localFile___relativePath'
  | 'picture___localFile___extension'
  | 'picture___localFile___size'
  | 'picture___localFile___prettySize'
  | 'picture___localFile___modifiedTime'
  | 'picture___localFile___accessTime'
  | 'picture___localFile___changeTime'
  | 'picture___localFile___birthTime'
  | 'picture___localFile___root'
  | 'picture___localFile___dir'
  | 'picture___localFile___base'
  | 'picture___localFile___ext'
  | 'picture___localFile___name'
  | 'picture___localFile___relativeDirectory'
  | 'picture___localFile___dev'
  | 'picture___localFile___mode'
  | 'picture___localFile___nlink'
  | 'picture___localFile___uid'
  | 'picture___localFile___gid'
  | 'picture___localFile___rdev'
  | 'picture___localFile___ino'
  | 'picture___localFile___atimeMs'
  | 'picture___localFile___mtimeMs'
  | 'picture___localFile___ctimeMs'
  | 'picture___localFile___atime'
  | 'picture___localFile___mtime'
  | 'picture___localFile___ctime'
  | 'picture___localFile___birthtime'
  | 'picture___localFile___birthtimeMs'
  | 'picture___localFile___blksize'
  | 'picture___localFile___blocks'
  | 'picture___localFile___url'
  | 'picture___localFile___publicURL'
  | 'picture___localFile___childrenImageSharp'
  | 'picture___localFile___childrenImageSharp___gatsbyImageData'
  | 'picture___localFile___childrenImageSharp___id'
  | 'picture___localFile___childrenImageSharp___children'
  | 'picture___localFile___childImageSharp___gatsbyImageData'
  | 'picture___localFile___childImageSharp___id'
  | 'picture___localFile___childImageSharp___children'
  | 'picture___localFile___id'
  | 'picture___localFile___parent___id'
  | 'picture___localFile___parent___children'
  | 'picture___localFile___children'
  | 'picture___localFile___children___id'
  | 'picture___localFile___children___children'
  | 'picture___localFile___internal___content'
  | 'picture___localFile___internal___contentDigest'
  | 'picture___localFile___internal___description'
  | 'picture___localFile___internal___fieldOwners'
  | 'picture___localFile___internal___ignoreType'
  | 'picture___localFile___internal___mediaType'
  | 'picture___localFile___internal___owner'
  | 'picture___localFile___internal___type'
  | 'picture___remoteTypeName'
  | 'picture___remoteId'
  | 'picture___locale'
  | 'picture___stage'
  | 'picture___createdAt'
  | 'picture___createdBy___remoteTypeName'
  | 'picture___createdBy___remoteId'
  | 'picture___createdBy___stage'
  | 'picture___createdBy___createdAt'
  | 'picture___createdBy___updatedAt'
  | 'picture___createdBy___publishedAt'
  | 'picture___createdBy___name'
  | 'picture___createdBy___picture'
  | 'picture___createdBy___kind'
  | 'picture___createdBy___id'
  | 'picture___createdBy___parent___id'
  | 'picture___createdBy___parent___children'
  | 'picture___createdBy___children'
  | 'picture___createdBy___children___id'
  | 'picture___createdBy___children___children'
  | 'picture___createdBy___internal___content'
  | 'picture___createdBy___internal___contentDigest'
  | 'picture___createdBy___internal___description'
  | 'picture___createdBy___internal___fieldOwners'
  | 'picture___createdBy___internal___ignoreType'
  | 'picture___createdBy___internal___mediaType'
  | 'picture___createdBy___internal___owner'
  | 'picture___createdBy___internal___type'
  | 'picture___updatedAt'
  | 'picture___updatedBy___remoteTypeName'
  | 'picture___updatedBy___remoteId'
  | 'picture___updatedBy___stage'
  | 'picture___updatedBy___createdAt'
  | 'picture___updatedBy___updatedAt'
  | 'picture___updatedBy___publishedAt'
  | 'picture___updatedBy___name'
  | 'picture___updatedBy___picture'
  | 'picture___updatedBy___kind'
  | 'picture___updatedBy___id'
  | 'picture___updatedBy___parent___id'
  | 'picture___updatedBy___parent___children'
  | 'picture___updatedBy___children'
  | 'picture___updatedBy___children___id'
  | 'picture___updatedBy___children___children'
  | 'picture___updatedBy___internal___content'
  | 'picture___updatedBy___internal___contentDigest'
  | 'picture___updatedBy___internal___description'
  | 'picture___updatedBy___internal___fieldOwners'
  | 'picture___updatedBy___internal___ignoreType'
  | 'picture___updatedBy___internal___mediaType'
  | 'picture___updatedBy___internal___owner'
  | 'picture___updatedBy___internal___type'
  | 'picture___publishedAt'
  | 'picture___publishedBy___remoteTypeName'
  | 'picture___publishedBy___remoteId'
  | 'picture___publishedBy___stage'
  | 'picture___publishedBy___createdAt'
  | 'picture___publishedBy___updatedAt'
  | 'picture___publishedBy___publishedAt'
  | 'picture___publishedBy___name'
  | 'picture___publishedBy___picture'
  | 'picture___publishedBy___kind'
  | 'picture___publishedBy___id'
  | 'picture___publishedBy___parent___id'
  | 'picture___publishedBy___parent___children'
  | 'picture___publishedBy___children'
  | 'picture___publishedBy___children___id'
  | 'picture___publishedBy___children___children'
  | 'picture___publishedBy___internal___content'
  | 'picture___publishedBy___internal___contentDigest'
  | 'picture___publishedBy___internal___description'
  | 'picture___publishedBy___internal___fieldOwners'
  | 'picture___publishedBy___internal___ignoreType'
  | 'picture___publishedBy___internal___mediaType'
  | 'picture___publishedBy___internal___owner'
  | 'picture___publishedBy___internal___type'
  | 'picture___handle'
  | 'picture___fileName'
  | 'picture___height'
  | 'picture___width'
  | 'picture___size'
  | 'picture___mimeType'
  | 'picture___coverImagePost'
  | 'picture___coverImagePost___remoteTypeName'
  | 'picture___coverImagePost___remoteId'
  | 'picture___coverImagePost___stage'
  | 'picture___coverImagePost___createdAt'
  | 'picture___coverImagePost___createdBy___remoteTypeName'
  | 'picture___coverImagePost___createdBy___remoteId'
  | 'picture___coverImagePost___createdBy___stage'
  | 'picture___coverImagePost___createdBy___createdAt'
  | 'picture___coverImagePost___createdBy___updatedAt'
  | 'picture___coverImagePost___createdBy___publishedAt'
  | 'picture___coverImagePost___createdBy___name'
  | 'picture___coverImagePost___createdBy___picture'
  | 'picture___coverImagePost___createdBy___kind'
  | 'picture___coverImagePost___createdBy___id'
  | 'picture___coverImagePost___createdBy___children'
  | 'picture___coverImagePost___updatedAt'
  | 'picture___coverImagePost___updatedBy___remoteTypeName'
  | 'picture___coverImagePost___updatedBy___remoteId'
  | 'picture___coverImagePost___updatedBy___stage'
  | 'picture___coverImagePost___updatedBy___createdAt'
  | 'picture___coverImagePost___updatedBy___updatedAt'
  | 'picture___coverImagePost___updatedBy___publishedAt'
  | 'picture___coverImagePost___updatedBy___name'
  | 'picture___coverImagePost___updatedBy___picture'
  | 'picture___coverImagePost___updatedBy___kind'
  | 'picture___coverImagePost___updatedBy___id'
  | 'picture___coverImagePost___updatedBy___children'
  | 'picture___coverImagePost___publishedAt'
  | 'picture___coverImagePost___publishedBy___remoteTypeName'
  | 'picture___coverImagePost___publishedBy___remoteId'
  | 'picture___coverImagePost___publishedBy___stage'
  | 'picture___coverImagePost___publishedBy___createdAt'
  | 'picture___coverImagePost___publishedBy___updatedAt'
  | 'picture___coverImagePost___publishedBy___publishedAt'
  | 'picture___coverImagePost___publishedBy___name'
  | 'picture___coverImagePost___publishedBy___picture'
  | 'picture___coverImagePost___publishedBy___kind'
  | 'picture___coverImagePost___publishedBy___id'
  | 'picture___coverImagePost___publishedBy___children'
  | 'picture___coverImagePost___title'
  | 'picture___coverImagePost___slug'
  | 'picture___coverImagePost___date'
  | 'picture___coverImagePost___excerpt'
  | 'picture___coverImagePost___coverImage___remoteTypeName'
  | 'picture___coverImagePost___coverImage___remoteId'
  | 'picture___coverImagePost___coverImage___locale'
  | 'picture___coverImagePost___coverImage___stage'
  | 'picture___coverImagePost___coverImage___createdAt'
  | 'picture___coverImagePost___coverImage___updatedAt'
  | 'picture___coverImagePost___coverImage___publishedAt'
  | 'picture___coverImagePost___coverImage___handle'
  | 'picture___coverImagePost___coverImage___fileName'
  | 'picture___coverImagePost___coverImage___height'
  | 'picture___coverImagePost___coverImage___width'
  | 'picture___coverImagePost___coverImage___size'
  | 'picture___coverImagePost___coverImage___mimeType'
  | 'picture___coverImagePost___coverImage___coverImagePost'
  | 'picture___coverImagePost___coverImage___authorAvatar'
  | 'picture___coverImagePost___coverImage___seoImage'
  | 'picture___coverImagePost___coverImage___url'
  | 'picture___coverImagePost___coverImage___id'
  | 'picture___coverImagePost___coverImage___children'
  | 'picture___coverImagePost___content___remoteTypeName'
  | 'picture___coverImagePost___content___raw'
  | 'picture___coverImagePost___content___html'
  | 'picture___coverImagePost___content___markdown'
  | 'picture___coverImagePost___content___text'
  | 'picture___coverImagePost___tags'
  | 'picture___coverImagePost___author___remoteTypeName'
  | 'picture___coverImagePost___author___remoteId'
  | 'picture___coverImagePost___author___stage'
  | 'picture___coverImagePost___author___createdAt'
  | 'picture___coverImagePost___author___updatedAt'
  | 'picture___coverImagePost___author___publishedAt'
  | 'picture___coverImagePost___author___name'
  | 'picture___coverImagePost___author___title'
  | 'picture___coverImagePost___author___biography'
  | 'picture___coverImagePost___author___posts'
  | 'picture___coverImagePost___author___id'
  | 'picture___coverImagePost___author___children'
  | 'picture___coverImagePost___seo___remoteTypeName'
  | 'picture___coverImagePost___seo___remoteId'
  | 'picture___coverImagePost___seo___stage'
  | 'picture___coverImagePost___seo___createdAt'
  | 'picture___coverImagePost___seo___updatedAt'
  | 'picture___coverImagePost___seo___publishedAt'
  | 'picture___coverImagePost___seo___title'
  | 'picture___coverImagePost___seo___description'
  | 'picture___coverImagePost___seo___keywords'
  | 'picture___coverImagePost___seo___id'
  | 'picture___coverImagePost___seo___children'
  | 'picture___coverImagePost___id'
  | 'picture___coverImagePost___parent___id'
  | 'picture___coverImagePost___parent___children'
  | 'picture___coverImagePost___children'
  | 'picture___coverImagePost___children___id'
  | 'picture___coverImagePost___children___children'
  | 'picture___coverImagePost___internal___content'
  | 'picture___coverImagePost___internal___contentDigest'
  | 'picture___coverImagePost___internal___description'
  | 'picture___coverImagePost___internal___fieldOwners'
  | 'picture___coverImagePost___internal___ignoreType'
  | 'picture___coverImagePost___internal___mediaType'
  | 'picture___coverImagePost___internal___owner'
  | 'picture___coverImagePost___internal___type'
  | 'picture___authorAvatar'
  | 'picture___authorAvatar___remoteTypeName'
  | 'picture___authorAvatar___remoteId'
  | 'picture___authorAvatar___stage'
  | 'picture___authorAvatar___createdAt'
  | 'picture___authorAvatar___createdBy___remoteTypeName'
  | 'picture___authorAvatar___createdBy___remoteId'
  | 'picture___authorAvatar___createdBy___stage'
  | 'picture___authorAvatar___createdBy___createdAt'
  | 'picture___authorAvatar___createdBy___updatedAt'
  | 'picture___authorAvatar___createdBy___publishedAt'
  | 'picture___authorAvatar___createdBy___name'
  | 'picture___authorAvatar___createdBy___picture'
  | 'picture___authorAvatar___createdBy___kind'
  | 'picture___authorAvatar___createdBy___id'
  | 'picture___authorAvatar___createdBy___children'
  | 'picture___authorAvatar___updatedAt'
  | 'picture___authorAvatar___updatedBy___remoteTypeName'
  | 'picture___authorAvatar___updatedBy___remoteId'
  | 'picture___authorAvatar___updatedBy___stage'
  | 'picture___authorAvatar___updatedBy___createdAt'
  | 'picture___authorAvatar___updatedBy___updatedAt'
  | 'picture___authorAvatar___updatedBy___publishedAt'
  | 'picture___authorAvatar___updatedBy___name'
  | 'picture___authorAvatar___updatedBy___picture'
  | 'picture___authorAvatar___updatedBy___kind'
  | 'picture___authorAvatar___updatedBy___id'
  | 'picture___authorAvatar___updatedBy___children'
  | 'picture___authorAvatar___publishedAt'
  | 'picture___authorAvatar___publishedBy___remoteTypeName'
  | 'picture___authorAvatar___publishedBy___remoteId'
  | 'picture___authorAvatar___publishedBy___stage'
  | 'picture___authorAvatar___publishedBy___createdAt'
  | 'picture___authorAvatar___publishedBy___updatedAt'
  | 'picture___authorAvatar___publishedBy___publishedAt'
  | 'picture___authorAvatar___publishedBy___name'
  | 'picture___authorAvatar___publishedBy___picture'
  | 'picture___authorAvatar___publishedBy___kind'
  | 'picture___authorAvatar___publishedBy___id'
  | 'picture___authorAvatar___publishedBy___children'
  | 'picture___authorAvatar___name'
  | 'picture___authorAvatar___picture___remoteTypeName'
  | 'picture___authorAvatar___picture___remoteId'
  | 'picture___authorAvatar___picture___locale'
  | 'picture___authorAvatar___picture___stage'
  | 'picture___authorAvatar___picture___createdAt'
  | 'picture___authorAvatar___picture___updatedAt'
  | 'picture___authorAvatar___picture___publishedAt'
  | 'picture___authorAvatar___picture___handle'
  | 'picture___authorAvatar___picture___fileName'
  | 'picture___authorAvatar___picture___height'
  | 'picture___authorAvatar___picture___width'
  | 'picture___authorAvatar___picture___size'
  | 'picture___authorAvatar___picture___mimeType'
  | 'picture___authorAvatar___picture___coverImagePost'
  | 'picture___authorAvatar___picture___authorAvatar'
  | 'picture___authorAvatar___picture___seoImage'
  | 'picture___authorAvatar___picture___url'
  | 'picture___authorAvatar___picture___id'
  | 'picture___authorAvatar___picture___children'
  | 'picture___authorAvatar___title'
  | 'picture___authorAvatar___biography'
  | 'picture___authorAvatar___posts'
  | 'picture___authorAvatar___posts___remoteTypeName'
  | 'picture___authorAvatar___posts___remoteId'
  | 'picture___authorAvatar___posts___stage'
  | 'picture___authorAvatar___posts___createdAt'
  | 'picture___authorAvatar___posts___updatedAt'
  | 'picture___authorAvatar___posts___publishedAt'
  | 'picture___authorAvatar___posts___title'
  | 'picture___authorAvatar___posts___slug'
  | 'picture___authorAvatar___posts___date'
  | 'picture___authorAvatar___posts___excerpt'
  | 'picture___authorAvatar___posts___tags'
  | 'picture___authorAvatar___posts___id'
  | 'picture___authorAvatar___posts___children'
  | 'picture___authorAvatar___id'
  | 'picture___authorAvatar___parent___id'
  | 'picture___authorAvatar___parent___children'
  | 'picture___authorAvatar___children'
  | 'picture___authorAvatar___children___id'
  | 'picture___authorAvatar___children___children'
  | 'picture___authorAvatar___internal___content'
  | 'picture___authorAvatar___internal___contentDigest'
  | 'picture___authorAvatar___internal___description'
  | 'picture___authorAvatar___internal___fieldOwners'
  | 'picture___authorAvatar___internal___ignoreType'
  | 'picture___authorAvatar___internal___mediaType'
  | 'picture___authorAvatar___internal___owner'
  | 'picture___authorAvatar___internal___type'
  | 'picture___seoImage'
  | 'picture___seoImage___remoteTypeName'
  | 'picture___seoImage___remoteId'
  | 'picture___seoImage___stage'
  | 'picture___seoImage___createdAt'
  | 'picture___seoImage___createdBy___remoteTypeName'
  | 'picture___seoImage___createdBy___remoteId'
  | 'picture___seoImage___createdBy___stage'
  | 'picture___seoImage___createdBy___createdAt'
  | 'picture___seoImage___createdBy___updatedAt'
  | 'picture___seoImage___createdBy___publishedAt'
  | 'picture___seoImage___createdBy___name'
  | 'picture___seoImage___createdBy___picture'
  | 'picture___seoImage___createdBy___kind'
  | 'picture___seoImage___createdBy___id'
  | 'picture___seoImage___createdBy___children'
  | 'picture___seoImage___updatedAt'
  | 'picture___seoImage___updatedBy___remoteTypeName'
  | 'picture___seoImage___updatedBy___remoteId'
  | 'picture___seoImage___updatedBy___stage'
  | 'picture___seoImage___updatedBy___createdAt'
  | 'picture___seoImage___updatedBy___updatedAt'
  | 'picture___seoImage___updatedBy___publishedAt'
  | 'picture___seoImage___updatedBy___name'
  | 'picture___seoImage___updatedBy___picture'
  | 'picture___seoImage___updatedBy___kind'
  | 'picture___seoImage___updatedBy___id'
  | 'picture___seoImage___updatedBy___children'
  | 'picture___seoImage___publishedAt'
  | 'picture___seoImage___publishedBy___remoteTypeName'
  | 'picture___seoImage___publishedBy___remoteId'
  | 'picture___seoImage___publishedBy___stage'
  | 'picture___seoImage___publishedBy___createdAt'
  | 'picture___seoImage___publishedBy___updatedAt'
  | 'picture___seoImage___publishedBy___publishedAt'
  | 'picture___seoImage___publishedBy___name'
  | 'picture___seoImage___publishedBy___picture'
  | 'picture___seoImage___publishedBy___kind'
  | 'picture___seoImage___publishedBy___id'
  | 'picture___seoImage___publishedBy___children'
  | 'picture___seoImage___title'
  | 'picture___seoImage___description'
  | 'picture___seoImage___keywords'
  | 'picture___seoImage___image___remoteTypeName'
  | 'picture___seoImage___image___remoteId'
  | 'picture___seoImage___image___locale'
  | 'picture___seoImage___image___stage'
  | 'picture___seoImage___image___createdAt'
  | 'picture___seoImage___image___updatedAt'
  | 'picture___seoImage___image___publishedAt'
  | 'picture___seoImage___image___handle'
  | 'picture___seoImage___image___fileName'
  | 'picture___seoImage___image___height'
  | 'picture___seoImage___image___width'
  | 'picture___seoImage___image___size'
  | 'picture___seoImage___image___mimeType'
  | 'picture___seoImage___image___coverImagePost'
  | 'picture___seoImage___image___authorAvatar'
  | 'picture___seoImage___image___seoImage'
  | 'picture___seoImage___image___url'
  | 'picture___seoImage___image___id'
  | 'picture___seoImage___image___children'
  | 'picture___seoImage___id'
  | 'picture___seoImage___parent___id'
  | 'picture___seoImage___parent___children'
  | 'picture___seoImage___children'
  | 'picture___seoImage___children___id'
  | 'picture___seoImage___children___children'
  | 'picture___seoImage___internal___content'
  | 'picture___seoImage___internal___contentDigest'
  | 'picture___seoImage___internal___description'
  | 'picture___seoImage___internal___fieldOwners'
  | 'picture___seoImage___internal___ignoreType'
  | 'picture___seoImage___internal___mediaType'
  | 'picture___seoImage___internal___owner'
  | 'picture___seoImage___internal___type'
  | 'picture___url'
  | 'picture___id'
  | 'picture___parent___id'
  | 'picture___parent___parent___id'
  | 'picture___parent___parent___children'
  | 'picture___parent___children'
  | 'picture___parent___children___id'
  | 'picture___parent___children___children'
  | 'picture___parent___internal___content'
  | 'picture___parent___internal___contentDigest'
  | 'picture___parent___internal___description'
  | 'picture___parent___internal___fieldOwners'
  | 'picture___parent___internal___ignoreType'
  | 'picture___parent___internal___mediaType'
  | 'picture___parent___internal___owner'
  | 'picture___parent___internal___type'
  | 'picture___children'
  | 'picture___children___id'
  | 'picture___children___parent___id'
  | 'picture___children___parent___children'
  | 'picture___children___children'
  | 'picture___children___children___id'
  | 'picture___children___children___children'
  | 'picture___children___internal___content'
  | 'picture___children___internal___contentDigest'
  | 'picture___children___internal___description'
  | 'picture___children___internal___fieldOwners'
  | 'picture___children___internal___ignoreType'
  | 'picture___children___internal___mediaType'
  | 'picture___children___internal___owner'
  | 'picture___children___internal___type'
  | 'picture___internal___content'
  | 'picture___internal___contentDigest'
  | 'picture___internal___description'
  | 'picture___internal___fieldOwners'
  | 'picture___internal___ignoreType'
  | 'picture___internal___mediaType'
  | 'picture___internal___owner'
  | 'picture___internal___type'
  | 'title'
  | 'biography'
  | 'posts'
  | 'posts___remoteTypeName'
  | 'posts___remoteId'
  | 'posts___stage'
  | 'posts___createdAt'
  | 'posts___createdBy___remoteTypeName'
  | 'posts___createdBy___remoteId'
  | 'posts___createdBy___stage'
  | 'posts___createdBy___createdAt'
  | 'posts___createdBy___updatedAt'
  | 'posts___createdBy___publishedAt'
  | 'posts___createdBy___name'
  | 'posts___createdBy___picture'
  | 'posts___createdBy___kind'
  | 'posts___createdBy___id'
  | 'posts___createdBy___parent___id'
  | 'posts___createdBy___parent___children'
  | 'posts___createdBy___children'
  | 'posts___createdBy___children___id'
  | 'posts___createdBy___children___children'
  | 'posts___createdBy___internal___content'
  | 'posts___createdBy___internal___contentDigest'
  | 'posts___createdBy___internal___description'
  | 'posts___createdBy___internal___fieldOwners'
  | 'posts___createdBy___internal___ignoreType'
  | 'posts___createdBy___internal___mediaType'
  | 'posts___createdBy___internal___owner'
  | 'posts___createdBy___internal___type'
  | 'posts___updatedAt'
  | 'posts___updatedBy___remoteTypeName'
  | 'posts___updatedBy___remoteId'
  | 'posts___updatedBy___stage'
  | 'posts___updatedBy___createdAt'
  | 'posts___updatedBy___updatedAt'
  | 'posts___updatedBy___publishedAt'
  | 'posts___updatedBy___name'
  | 'posts___updatedBy___picture'
  | 'posts___updatedBy___kind'
  | 'posts___updatedBy___id'
  | 'posts___updatedBy___parent___id'
  | 'posts___updatedBy___parent___children'
  | 'posts___updatedBy___children'
  | 'posts___updatedBy___children___id'
  | 'posts___updatedBy___children___children'
  | 'posts___updatedBy___internal___content'
  | 'posts___updatedBy___internal___contentDigest'
  | 'posts___updatedBy___internal___description'
  | 'posts___updatedBy___internal___fieldOwners'
  | 'posts___updatedBy___internal___ignoreType'
  | 'posts___updatedBy___internal___mediaType'
  | 'posts___updatedBy___internal___owner'
  | 'posts___updatedBy___internal___type'
  | 'posts___publishedAt'
  | 'posts___publishedBy___remoteTypeName'
  | 'posts___publishedBy___remoteId'
  | 'posts___publishedBy___stage'
  | 'posts___publishedBy___createdAt'
  | 'posts___publishedBy___updatedAt'
  | 'posts___publishedBy___publishedAt'
  | 'posts___publishedBy___name'
  | 'posts___publishedBy___picture'
  | 'posts___publishedBy___kind'
  | 'posts___publishedBy___id'
  | 'posts___publishedBy___parent___id'
  | 'posts___publishedBy___parent___children'
  | 'posts___publishedBy___children'
  | 'posts___publishedBy___children___id'
  | 'posts___publishedBy___children___children'
  | 'posts___publishedBy___internal___content'
  | 'posts___publishedBy___internal___contentDigest'
  | 'posts___publishedBy___internal___description'
  | 'posts___publishedBy___internal___fieldOwners'
  | 'posts___publishedBy___internal___ignoreType'
  | 'posts___publishedBy___internal___mediaType'
  | 'posts___publishedBy___internal___owner'
  | 'posts___publishedBy___internal___type'
  | 'posts___title'
  | 'posts___slug'
  | 'posts___date'
  | 'posts___excerpt'
  | 'posts___coverImage___localFile___sourceInstanceName'
  | 'posts___coverImage___localFile___absolutePath'
  | 'posts___coverImage___localFile___relativePath'
  | 'posts___coverImage___localFile___extension'
  | 'posts___coverImage___localFile___size'
  | 'posts___coverImage___localFile___prettySize'
  | 'posts___coverImage___localFile___modifiedTime'
  | 'posts___coverImage___localFile___accessTime'
  | 'posts___coverImage___localFile___changeTime'
  | 'posts___coverImage___localFile___birthTime'
  | 'posts___coverImage___localFile___root'
  | 'posts___coverImage___localFile___dir'
  | 'posts___coverImage___localFile___base'
  | 'posts___coverImage___localFile___ext'
  | 'posts___coverImage___localFile___name'
  | 'posts___coverImage___localFile___relativeDirectory'
  | 'posts___coverImage___localFile___dev'
  | 'posts___coverImage___localFile___mode'
  | 'posts___coverImage___localFile___nlink'
  | 'posts___coverImage___localFile___uid'
  | 'posts___coverImage___localFile___gid'
  | 'posts___coverImage___localFile___rdev'
  | 'posts___coverImage___localFile___ino'
  | 'posts___coverImage___localFile___atimeMs'
  | 'posts___coverImage___localFile___mtimeMs'
  | 'posts___coverImage___localFile___ctimeMs'
  | 'posts___coverImage___localFile___atime'
  | 'posts___coverImage___localFile___mtime'
  | 'posts___coverImage___localFile___ctime'
  | 'posts___coverImage___localFile___birthtime'
  | 'posts___coverImage___localFile___birthtimeMs'
  | 'posts___coverImage___localFile___blksize'
  | 'posts___coverImage___localFile___blocks'
  | 'posts___coverImage___localFile___url'
  | 'posts___coverImage___localFile___publicURL'
  | 'posts___coverImage___localFile___childrenImageSharp'
  | 'posts___coverImage___localFile___id'
  | 'posts___coverImage___localFile___children'
  | 'posts___coverImage___remoteTypeName'
  | 'posts___coverImage___remoteId'
  | 'posts___coverImage___locale'
  | 'posts___coverImage___stage'
  | 'posts___coverImage___createdAt'
  | 'posts___coverImage___createdBy___remoteTypeName'
  | 'posts___coverImage___createdBy___remoteId'
  | 'posts___coverImage___createdBy___stage'
  | 'posts___coverImage___createdBy___createdAt'
  | 'posts___coverImage___createdBy___updatedAt'
  | 'posts___coverImage___createdBy___publishedAt'
  | 'posts___coverImage___createdBy___name'
  | 'posts___coverImage___createdBy___picture'
  | 'posts___coverImage___createdBy___kind'
  | 'posts___coverImage___createdBy___id'
  | 'posts___coverImage___createdBy___children'
  | 'posts___coverImage___updatedAt'
  | 'posts___coverImage___updatedBy___remoteTypeName'
  | 'posts___coverImage___updatedBy___remoteId'
  | 'posts___coverImage___updatedBy___stage'
  | 'posts___coverImage___updatedBy___createdAt'
  | 'posts___coverImage___updatedBy___updatedAt'
  | 'posts___coverImage___updatedBy___publishedAt'
  | 'posts___coverImage___updatedBy___name'
  | 'posts___coverImage___updatedBy___picture'
  | 'posts___coverImage___updatedBy___kind'
  | 'posts___coverImage___updatedBy___id'
  | 'posts___coverImage___updatedBy___children'
  | 'posts___coverImage___publishedAt'
  | 'posts___coverImage___publishedBy___remoteTypeName'
  | 'posts___coverImage___publishedBy___remoteId'
  | 'posts___coverImage___publishedBy___stage'
  | 'posts___coverImage___publishedBy___createdAt'
  | 'posts___coverImage___publishedBy___updatedAt'
  | 'posts___coverImage___publishedBy___publishedAt'
  | 'posts___coverImage___publishedBy___name'
  | 'posts___coverImage___publishedBy___picture'
  | 'posts___coverImage___publishedBy___kind'
  | 'posts___coverImage___publishedBy___id'
  | 'posts___coverImage___publishedBy___children'
  | 'posts___coverImage___handle'
  | 'posts___coverImage___fileName'
  | 'posts___coverImage___height'
  | 'posts___coverImage___width'
  | 'posts___coverImage___size'
  | 'posts___coverImage___mimeType'
  | 'posts___coverImage___coverImagePost'
  | 'posts___coverImage___coverImagePost___remoteTypeName'
  | 'posts___coverImage___coverImagePost___remoteId'
  | 'posts___coverImage___coverImagePost___stage'
  | 'posts___coverImage___coverImagePost___createdAt'
  | 'posts___coverImage___coverImagePost___updatedAt'
  | 'posts___coverImage___coverImagePost___publishedAt'
  | 'posts___coverImage___coverImagePost___title'
  | 'posts___coverImage___coverImagePost___slug'
  | 'posts___coverImage___coverImagePost___date'
  | 'posts___coverImage___coverImagePost___excerpt'
  | 'posts___coverImage___coverImagePost___tags'
  | 'posts___coverImage___coverImagePost___id'
  | 'posts___coverImage___coverImagePost___children'
  | 'posts___coverImage___authorAvatar'
  | 'posts___coverImage___authorAvatar___remoteTypeName'
  | 'posts___coverImage___authorAvatar___remoteId'
  | 'posts___coverImage___authorAvatar___stage'
  | 'posts___coverImage___authorAvatar___createdAt'
  | 'posts___coverImage___authorAvatar___updatedAt'
  | 'posts___coverImage___authorAvatar___publishedAt'
  | 'posts___coverImage___authorAvatar___name'
  | 'posts___coverImage___authorAvatar___title'
  | 'posts___coverImage___authorAvatar___biography'
  | 'posts___coverImage___authorAvatar___posts'
  | 'posts___coverImage___authorAvatar___id'
  | 'posts___coverImage___authorAvatar___children'
  | 'posts___coverImage___seoImage'
  | 'posts___coverImage___seoImage___remoteTypeName'
  | 'posts___coverImage___seoImage___remoteId'
  | 'posts___coverImage___seoImage___stage'
  | 'posts___coverImage___seoImage___createdAt'
  | 'posts___coverImage___seoImage___updatedAt'
  | 'posts___coverImage___seoImage___publishedAt'
  | 'posts___coverImage___seoImage___title'
  | 'posts___coverImage___seoImage___description'
  | 'posts___coverImage___seoImage___keywords'
  | 'posts___coverImage___seoImage___id'
  | 'posts___coverImage___seoImage___children'
  | 'posts___coverImage___url'
  | 'posts___coverImage___id'
  | 'posts___coverImage___parent___id'
  | 'posts___coverImage___parent___children'
  | 'posts___coverImage___children'
  | 'posts___coverImage___children___id'
  | 'posts___coverImage___children___children'
  | 'posts___coverImage___internal___content'
  | 'posts___coverImage___internal___contentDigest'
  | 'posts___coverImage___internal___description'
  | 'posts___coverImage___internal___fieldOwners'
  | 'posts___coverImage___internal___ignoreType'
  | 'posts___coverImage___internal___mediaType'
  | 'posts___coverImage___internal___owner'
  | 'posts___coverImage___internal___type'
  | 'posts___content___markdownNode___id'
  | 'posts___content___markdownNode___children'
  | 'posts___content___remoteTypeName'
  | 'posts___content___raw'
  | 'posts___content___html'
  | 'posts___content___markdown'
  | 'posts___content___text'
  | 'posts___tags'
  | 'posts___author___remoteTypeName'
  | 'posts___author___remoteId'
  | 'posts___author___stage'
  | 'posts___author___createdAt'
  | 'posts___author___createdBy___remoteTypeName'
  | 'posts___author___createdBy___remoteId'
  | 'posts___author___createdBy___stage'
  | 'posts___author___createdBy___createdAt'
  | 'posts___author___createdBy___updatedAt'
  | 'posts___author___createdBy___publishedAt'
  | 'posts___author___createdBy___name'
  | 'posts___author___createdBy___picture'
  | 'posts___author___createdBy___kind'
  | 'posts___author___createdBy___id'
  | 'posts___author___createdBy___children'
  | 'posts___author___updatedAt'
  | 'posts___author___updatedBy___remoteTypeName'
  | 'posts___author___updatedBy___remoteId'
  | 'posts___author___updatedBy___stage'
  | 'posts___author___updatedBy___createdAt'
  | 'posts___author___updatedBy___updatedAt'
  | 'posts___author___updatedBy___publishedAt'
  | 'posts___author___updatedBy___name'
  | 'posts___author___updatedBy___picture'
  | 'posts___author___updatedBy___kind'
  | 'posts___author___updatedBy___id'
  | 'posts___author___updatedBy___children'
  | 'posts___author___publishedAt'
  | 'posts___author___publishedBy___remoteTypeName'
  | 'posts___author___publishedBy___remoteId'
  | 'posts___author___publishedBy___stage'
  | 'posts___author___publishedBy___createdAt'
  | 'posts___author___publishedBy___updatedAt'
  | 'posts___author___publishedBy___publishedAt'
  | 'posts___author___publishedBy___name'
  | 'posts___author___publishedBy___picture'
  | 'posts___author___publishedBy___kind'
  | 'posts___author___publishedBy___id'
  | 'posts___author___publishedBy___children'
  | 'posts___author___name'
  | 'posts___author___picture___remoteTypeName'
  | 'posts___author___picture___remoteId'
  | 'posts___author___picture___locale'
  | 'posts___author___picture___stage'
  | 'posts___author___picture___createdAt'
  | 'posts___author___picture___updatedAt'
  | 'posts___author___picture___publishedAt'
  | 'posts___author___picture___handle'
  | 'posts___author___picture___fileName'
  | 'posts___author___picture___height'
  | 'posts___author___picture___width'
  | 'posts___author___picture___size'
  | 'posts___author___picture___mimeType'
  | 'posts___author___picture___coverImagePost'
  | 'posts___author___picture___authorAvatar'
  | 'posts___author___picture___seoImage'
  | 'posts___author___picture___url'
  | 'posts___author___picture___id'
  | 'posts___author___picture___children'
  | 'posts___author___title'
  | 'posts___author___biography'
  | 'posts___author___posts'
  | 'posts___author___posts___remoteTypeName'
  | 'posts___author___posts___remoteId'
  | 'posts___author___posts___stage'
  | 'posts___author___posts___createdAt'
  | 'posts___author___posts___updatedAt'
  | 'posts___author___posts___publishedAt'
  | 'posts___author___posts___title'
  | 'posts___author___posts___slug'
  | 'posts___author___posts___date'
  | 'posts___author___posts___excerpt'
  | 'posts___author___posts___tags'
  | 'posts___author___posts___id'
  | 'posts___author___posts___children'
  | 'posts___author___id'
  | 'posts___author___parent___id'
  | 'posts___author___parent___children'
  | 'posts___author___children'
  | 'posts___author___children___id'
  | 'posts___author___children___children'
  | 'posts___author___internal___content'
  | 'posts___author___internal___contentDigest'
  | 'posts___author___internal___description'
  | 'posts___author___internal___fieldOwners'
  | 'posts___author___internal___ignoreType'
  | 'posts___author___internal___mediaType'
  | 'posts___author___internal___owner'
  | 'posts___author___internal___type'
  | 'posts___seo___remoteTypeName'
  | 'posts___seo___remoteId'
  | 'posts___seo___stage'
  | 'posts___seo___createdAt'
  | 'posts___seo___createdBy___remoteTypeName'
  | 'posts___seo___createdBy___remoteId'
  | 'posts___seo___createdBy___stage'
  | 'posts___seo___createdBy___createdAt'
  | 'posts___seo___createdBy___updatedAt'
  | 'posts___seo___createdBy___publishedAt'
  | 'posts___seo___createdBy___name'
  | 'posts___seo___createdBy___picture'
  | 'posts___seo___createdBy___kind'
  | 'posts___seo___createdBy___id'
  | 'posts___seo___createdBy___children'
  | 'posts___seo___updatedAt'
  | 'posts___seo___updatedBy___remoteTypeName'
  | 'posts___seo___updatedBy___remoteId'
  | 'posts___seo___updatedBy___stage'
  | 'posts___seo___updatedBy___createdAt'
  | 'posts___seo___updatedBy___updatedAt'
  | 'posts___seo___updatedBy___publishedAt'
  | 'posts___seo___updatedBy___name'
  | 'posts___seo___updatedBy___picture'
  | 'posts___seo___updatedBy___kind'
  | 'posts___seo___updatedBy___id'
  | 'posts___seo___updatedBy___children'
  | 'posts___seo___publishedAt'
  | 'posts___seo___publishedBy___remoteTypeName'
  | 'posts___seo___publishedBy___remoteId'
  | 'posts___seo___publishedBy___stage'
  | 'posts___seo___publishedBy___createdAt'
  | 'posts___seo___publishedBy___updatedAt'
  | 'posts___seo___publishedBy___publishedAt'
  | 'posts___seo___publishedBy___name'
  | 'posts___seo___publishedBy___picture'
  | 'posts___seo___publishedBy___kind'
  | 'posts___seo___publishedBy___id'
  | 'posts___seo___publishedBy___children'
  | 'posts___seo___title'
  | 'posts___seo___description'
  | 'posts___seo___keywords'
  | 'posts___seo___image___remoteTypeName'
  | 'posts___seo___image___remoteId'
  | 'posts___seo___image___locale'
  | 'posts___seo___image___stage'
  | 'posts___seo___image___createdAt'
  | 'posts___seo___image___updatedAt'
  | 'posts___seo___image___publishedAt'
  | 'posts___seo___image___handle'
  | 'posts___seo___image___fileName'
  | 'posts___seo___image___height'
  | 'posts___seo___image___width'
  | 'posts___seo___image___size'
  | 'posts___seo___image___mimeType'
  | 'posts___seo___image___coverImagePost'
  | 'posts___seo___image___authorAvatar'
  | 'posts___seo___image___seoImage'
  | 'posts___seo___image___url'
  | 'posts___seo___image___id'
  | 'posts___seo___image___children'
  | 'posts___seo___id'
  | 'posts___seo___parent___id'
  | 'posts___seo___parent___children'
  | 'posts___seo___children'
  | 'posts___seo___children___id'
  | 'posts___seo___children___children'
  | 'posts___seo___internal___content'
  | 'posts___seo___internal___contentDigest'
  | 'posts___seo___internal___description'
  | 'posts___seo___internal___fieldOwners'
  | 'posts___seo___internal___ignoreType'
  | 'posts___seo___internal___mediaType'
  | 'posts___seo___internal___owner'
  | 'posts___seo___internal___type'
  | 'posts___id'
  | 'posts___parent___id'
  | 'posts___parent___parent___id'
  | 'posts___parent___parent___children'
  | 'posts___parent___children'
  | 'posts___parent___children___id'
  | 'posts___parent___children___children'
  | 'posts___parent___internal___content'
  | 'posts___parent___internal___contentDigest'
  | 'posts___parent___internal___description'
  | 'posts___parent___internal___fieldOwners'
  | 'posts___parent___internal___ignoreType'
  | 'posts___parent___internal___mediaType'
  | 'posts___parent___internal___owner'
  | 'posts___parent___internal___type'
  | 'posts___children'
  | 'posts___children___id'
  | 'posts___children___parent___id'
  | 'posts___children___parent___children'
  | 'posts___children___children'
  | 'posts___children___children___id'
  | 'posts___children___children___children'
  | 'posts___children___internal___content'
  | 'posts___children___internal___contentDigest'
  | 'posts___children___internal___description'
  | 'posts___children___internal___fieldOwners'
  | 'posts___children___internal___ignoreType'
  | 'posts___children___internal___mediaType'
  | 'posts___children___internal___owner'
  | 'posts___children___internal___type'
  | 'posts___internal___content'
  | 'posts___internal___contentDigest'
  | 'posts___internal___description'
  | 'posts___internal___fieldOwners'
  | 'posts___internal___ignoreType'
  | 'posts___internal___mediaType'
  | 'posts___internal___owner'
  | 'posts___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type GraphCms_AuthorFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  picture?: Maybe<GraphCms_AssetFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  biography?: Maybe<StringQueryOperatorInput>
  posts?: Maybe<GraphCms_PostFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type GraphCms_AuthorFilterListInput = {
  elemMatch?: Maybe<GraphCms_AuthorFilterInput>
}

export type GraphCms_AuthorGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_AuthorEdge>
  nodes: Array<GraphCms_Author>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphCms_AuthorSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_AuthorFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type GraphCms_Locale = 'ja'

export type GraphCms_LocaleQueryOperatorInput = {
  eq?: Maybe<GraphCms_Locale>
  ne?: Maybe<GraphCms_Locale>
  in?: Maybe<Array<Maybe<GraphCms_Locale>>>
  nin?: Maybe<Array<Maybe<GraphCms_Locale>>>
}

export type GraphCms_MarkdownNode = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type GraphCms_MarkdownNodeConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_MarkdownNodeEdge>
  nodes: Array<GraphCms_MarkdownNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphCms_MarkdownNodeGroupConnection>
}

export type GraphCms_MarkdownNodeConnectionDistinctArgs = {
  field: GraphCms_MarkdownNodeFieldsEnum
}

export type GraphCms_MarkdownNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphCms_MarkdownNodeFieldsEnum
}

export type GraphCms_MarkdownNodeEdge = {
  next?: Maybe<GraphCms_MarkdownNode>
  node: GraphCms_MarkdownNode
  previous?: Maybe<GraphCms_MarkdownNode>
}

export type GraphCms_MarkdownNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type GraphCms_MarkdownNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type GraphCms_MarkdownNodeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_MarkdownNodeEdge>
  nodes: Array<GraphCms_MarkdownNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphCms_MarkdownNodeSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_MarkdownNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type GraphCms_Page = Node & {
  remoteTypeName: Scalars['String']
  remoteId: Scalars['ID']
  stage: GraphCms_Stage
  createdAt: Scalars['JSON']
  createdBy?: Maybe<GraphCms_User>
  coverImage?: Maybe<GraphCms_Asset>
  updatedAt: Scalars['JSON']
  updatedBy?: Maybe<GraphCms_User>
  publishedAt?: Maybe<Scalars['JSON']>
  publishedBy?: Maybe<GraphCms_User>
  title: Scalars['String']
  slug: Scalars['String']
  subtitle?: Maybe<Scalars['String']>
  content: GraphCms_RichText
  seo?: Maybe<GraphCms_Seo>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type GraphCms_PageConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_PageEdge>
  nodes: Array<GraphCms_Page>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphCms_PageGroupConnection>
}

export type GraphCms_PageConnectionDistinctArgs = {
  field: GraphCms_PageFieldsEnum
}

export type GraphCms_PageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphCms_PageFieldsEnum
}

export type GraphCms_PageEdge = {
  next?: Maybe<GraphCms_Page>
  node: GraphCms_Page
  previous?: Maybe<GraphCms_Page>
}

export type GraphCms_PageFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'coverImage___localFile___sourceInstanceName'
  | 'coverImage___localFile___absolutePath'
  | 'coverImage___localFile___relativePath'
  | 'coverImage___localFile___extension'
  | 'coverImage___localFile___size'
  | 'coverImage___localFile___prettySize'
  | 'coverImage___localFile___modifiedTime'
  | 'coverImage___localFile___accessTime'
  | 'coverImage___localFile___changeTime'
  | 'coverImage___localFile___birthTime'
  | 'coverImage___localFile___root'
  | 'coverImage___localFile___dir'
  | 'coverImage___localFile___base'
  | 'coverImage___localFile___ext'
  | 'coverImage___localFile___name'
  | 'coverImage___localFile___relativeDirectory'
  | 'coverImage___localFile___dev'
  | 'coverImage___localFile___mode'
  | 'coverImage___localFile___nlink'
  | 'coverImage___localFile___uid'
  | 'coverImage___localFile___gid'
  | 'coverImage___localFile___rdev'
  | 'coverImage___localFile___ino'
  | 'coverImage___localFile___atimeMs'
  | 'coverImage___localFile___mtimeMs'
  | 'coverImage___localFile___ctimeMs'
  | 'coverImage___localFile___atime'
  | 'coverImage___localFile___mtime'
  | 'coverImage___localFile___ctime'
  | 'coverImage___localFile___birthtime'
  | 'coverImage___localFile___birthtimeMs'
  | 'coverImage___localFile___blksize'
  | 'coverImage___localFile___blocks'
  | 'coverImage___localFile___url'
  | 'coverImage___localFile___publicURL'
  | 'coverImage___localFile___childrenImageSharp'
  | 'coverImage___localFile___childrenImageSharp___gatsbyImageData'
  | 'coverImage___localFile___childrenImageSharp___id'
  | 'coverImage___localFile___childrenImageSharp___children'
  | 'coverImage___localFile___childImageSharp___gatsbyImageData'
  | 'coverImage___localFile___childImageSharp___id'
  | 'coverImage___localFile___childImageSharp___children'
  | 'coverImage___localFile___id'
  | 'coverImage___localFile___parent___id'
  | 'coverImage___localFile___parent___children'
  | 'coverImage___localFile___children'
  | 'coverImage___localFile___children___id'
  | 'coverImage___localFile___children___children'
  | 'coverImage___localFile___internal___content'
  | 'coverImage___localFile___internal___contentDigest'
  | 'coverImage___localFile___internal___description'
  | 'coverImage___localFile___internal___fieldOwners'
  | 'coverImage___localFile___internal___ignoreType'
  | 'coverImage___localFile___internal___mediaType'
  | 'coverImage___localFile___internal___owner'
  | 'coverImage___localFile___internal___type'
  | 'coverImage___remoteTypeName'
  | 'coverImage___remoteId'
  | 'coverImage___locale'
  | 'coverImage___stage'
  | 'coverImage___createdAt'
  | 'coverImage___createdBy___remoteTypeName'
  | 'coverImage___createdBy___remoteId'
  | 'coverImage___createdBy___stage'
  | 'coverImage___createdBy___createdAt'
  | 'coverImage___createdBy___updatedAt'
  | 'coverImage___createdBy___publishedAt'
  | 'coverImage___createdBy___name'
  | 'coverImage___createdBy___picture'
  | 'coverImage___createdBy___kind'
  | 'coverImage___createdBy___id'
  | 'coverImage___createdBy___parent___id'
  | 'coverImage___createdBy___parent___children'
  | 'coverImage___createdBy___children'
  | 'coverImage___createdBy___children___id'
  | 'coverImage___createdBy___children___children'
  | 'coverImage___createdBy___internal___content'
  | 'coverImage___createdBy___internal___contentDigest'
  | 'coverImage___createdBy___internal___description'
  | 'coverImage___createdBy___internal___fieldOwners'
  | 'coverImage___createdBy___internal___ignoreType'
  | 'coverImage___createdBy___internal___mediaType'
  | 'coverImage___createdBy___internal___owner'
  | 'coverImage___createdBy___internal___type'
  | 'coverImage___updatedAt'
  | 'coverImage___updatedBy___remoteTypeName'
  | 'coverImage___updatedBy___remoteId'
  | 'coverImage___updatedBy___stage'
  | 'coverImage___updatedBy___createdAt'
  | 'coverImage___updatedBy___updatedAt'
  | 'coverImage___updatedBy___publishedAt'
  | 'coverImage___updatedBy___name'
  | 'coverImage___updatedBy___picture'
  | 'coverImage___updatedBy___kind'
  | 'coverImage___updatedBy___id'
  | 'coverImage___updatedBy___parent___id'
  | 'coverImage___updatedBy___parent___children'
  | 'coverImage___updatedBy___children'
  | 'coverImage___updatedBy___children___id'
  | 'coverImage___updatedBy___children___children'
  | 'coverImage___updatedBy___internal___content'
  | 'coverImage___updatedBy___internal___contentDigest'
  | 'coverImage___updatedBy___internal___description'
  | 'coverImage___updatedBy___internal___fieldOwners'
  | 'coverImage___updatedBy___internal___ignoreType'
  | 'coverImage___updatedBy___internal___mediaType'
  | 'coverImage___updatedBy___internal___owner'
  | 'coverImage___updatedBy___internal___type'
  | 'coverImage___publishedAt'
  | 'coverImage___publishedBy___remoteTypeName'
  | 'coverImage___publishedBy___remoteId'
  | 'coverImage___publishedBy___stage'
  | 'coverImage___publishedBy___createdAt'
  | 'coverImage___publishedBy___updatedAt'
  | 'coverImage___publishedBy___publishedAt'
  | 'coverImage___publishedBy___name'
  | 'coverImage___publishedBy___picture'
  | 'coverImage___publishedBy___kind'
  | 'coverImage___publishedBy___id'
  | 'coverImage___publishedBy___parent___id'
  | 'coverImage___publishedBy___parent___children'
  | 'coverImage___publishedBy___children'
  | 'coverImage___publishedBy___children___id'
  | 'coverImage___publishedBy___children___children'
  | 'coverImage___publishedBy___internal___content'
  | 'coverImage___publishedBy___internal___contentDigest'
  | 'coverImage___publishedBy___internal___description'
  | 'coverImage___publishedBy___internal___fieldOwners'
  | 'coverImage___publishedBy___internal___ignoreType'
  | 'coverImage___publishedBy___internal___mediaType'
  | 'coverImage___publishedBy___internal___owner'
  | 'coverImage___publishedBy___internal___type'
  | 'coverImage___handle'
  | 'coverImage___fileName'
  | 'coverImage___height'
  | 'coverImage___width'
  | 'coverImage___size'
  | 'coverImage___mimeType'
  | 'coverImage___coverImagePost'
  | 'coverImage___coverImagePost___remoteTypeName'
  | 'coverImage___coverImagePost___remoteId'
  | 'coverImage___coverImagePost___stage'
  | 'coverImage___coverImagePost___createdAt'
  | 'coverImage___coverImagePost___createdBy___remoteTypeName'
  | 'coverImage___coverImagePost___createdBy___remoteId'
  | 'coverImage___coverImagePost___createdBy___stage'
  | 'coverImage___coverImagePost___createdBy___createdAt'
  | 'coverImage___coverImagePost___createdBy___updatedAt'
  | 'coverImage___coverImagePost___createdBy___publishedAt'
  | 'coverImage___coverImagePost___createdBy___name'
  | 'coverImage___coverImagePost___createdBy___picture'
  | 'coverImage___coverImagePost___createdBy___kind'
  | 'coverImage___coverImagePost___createdBy___id'
  | 'coverImage___coverImagePost___createdBy___children'
  | 'coverImage___coverImagePost___updatedAt'
  | 'coverImage___coverImagePost___updatedBy___remoteTypeName'
  | 'coverImage___coverImagePost___updatedBy___remoteId'
  | 'coverImage___coverImagePost___updatedBy___stage'
  | 'coverImage___coverImagePost___updatedBy___createdAt'
  | 'coverImage___coverImagePost___updatedBy___updatedAt'
  | 'coverImage___coverImagePost___updatedBy___publishedAt'
  | 'coverImage___coverImagePost___updatedBy___name'
  | 'coverImage___coverImagePost___updatedBy___picture'
  | 'coverImage___coverImagePost___updatedBy___kind'
  | 'coverImage___coverImagePost___updatedBy___id'
  | 'coverImage___coverImagePost___updatedBy___children'
  | 'coverImage___coverImagePost___publishedAt'
  | 'coverImage___coverImagePost___publishedBy___remoteTypeName'
  | 'coverImage___coverImagePost___publishedBy___remoteId'
  | 'coverImage___coverImagePost___publishedBy___stage'
  | 'coverImage___coverImagePost___publishedBy___createdAt'
  | 'coverImage___coverImagePost___publishedBy___updatedAt'
  | 'coverImage___coverImagePost___publishedBy___publishedAt'
  | 'coverImage___coverImagePost___publishedBy___name'
  | 'coverImage___coverImagePost___publishedBy___picture'
  | 'coverImage___coverImagePost___publishedBy___kind'
  | 'coverImage___coverImagePost___publishedBy___id'
  | 'coverImage___coverImagePost___publishedBy___children'
  | 'coverImage___coverImagePost___title'
  | 'coverImage___coverImagePost___slug'
  | 'coverImage___coverImagePost___date'
  | 'coverImage___coverImagePost___excerpt'
  | 'coverImage___coverImagePost___coverImage___remoteTypeName'
  | 'coverImage___coverImagePost___coverImage___remoteId'
  | 'coverImage___coverImagePost___coverImage___locale'
  | 'coverImage___coverImagePost___coverImage___stage'
  | 'coverImage___coverImagePost___coverImage___createdAt'
  | 'coverImage___coverImagePost___coverImage___updatedAt'
  | 'coverImage___coverImagePost___coverImage___publishedAt'
  | 'coverImage___coverImagePost___coverImage___handle'
  | 'coverImage___coverImagePost___coverImage___fileName'
  | 'coverImage___coverImagePost___coverImage___height'
  | 'coverImage___coverImagePost___coverImage___width'
  | 'coverImage___coverImagePost___coverImage___size'
  | 'coverImage___coverImagePost___coverImage___mimeType'
  | 'coverImage___coverImagePost___coverImage___coverImagePost'
  | 'coverImage___coverImagePost___coverImage___authorAvatar'
  | 'coverImage___coverImagePost___coverImage___seoImage'
  | 'coverImage___coverImagePost___coverImage___url'
  | 'coverImage___coverImagePost___coverImage___id'
  | 'coverImage___coverImagePost___coverImage___children'
  | 'coverImage___coverImagePost___content___remoteTypeName'
  | 'coverImage___coverImagePost___content___raw'
  | 'coverImage___coverImagePost___content___html'
  | 'coverImage___coverImagePost___content___markdown'
  | 'coverImage___coverImagePost___content___text'
  | 'coverImage___coverImagePost___tags'
  | 'coverImage___coverImagePost___author___remoteTypeName'
  | 'coverImage___coverImagePost___author___remoteId'
  | 'coverImage___coverImagePost___author___stage'
  | 'coverImage___coverImagePost___author___createdAt'
  | 'coverImage___coverImagePost___author___updatedAt'
  | 'coverImage___coverImagePost___author___publishedAt'
  | 'coverImage___coverImagePost___author___name'
  | 'coverImage___coverImagePost___author___title'
  | 'coverImage___coverImagePost___author___biography'
  | 'coverImage___coverImagePost___author___posts'
  | 'coverImage___coverImagePost___author___id'
  | 'coverImage___coverImagePost___author___children'
  | 'coverImage___coverImagePost___seo___remoteTypeName'
  | 'coverImage___coverImagePost___seo___remoteId'
  | 'coverImage___coverImagePost___seo___stage'
  | 'coverImage___coverImagePost___seo___createdAt'
  | 'coverImage___coverImagePost___seo___updatedAt'
  | 'coverImage___coverImagePost___seo___publishedAt'
  | 'coverImage___coverImagePost___seo___title'
  | 'coverImage___coverImagePost___seo___description'
  | 'coverImage___coverImagePost___seo___keywords'
  | 'coverImage___coverImagePost___seo___id'
  | 'coverImage___coverImagePost___seo___children'
  | 'coverImage___coverImagePost___id'
  | 'coverImage___coverImagePost___parent___id'
  | 'coverImage___coverImagePost___parent___children'
  | 'coverImage___coverImagePost___children'
  | 'coverImage___coverImagePost___children___id'
  | 'coverImage___coverImagePost___children___children'
  | 'coverImage___coverImagePost___internal___content'
  | 'coverImage___coverImagePost___internal___contentDigest'
  | 'coverImage___coverImagePost___internal___description'
  | 'coverImage___coverImagePost___internal___fieldOwners'
  | 'coverImage___coverImagePost___internal___ignoreType'
  | 'coverImage___coverImagePost___internal___mediaType'
  | 'coverImage___coverImagePost___internal___owner'
  | 'coverImage___coverImagePost___internal___type'
  | 'coverImage___authorAvatar'
  | 'coverImage___authorAvatar___remoteTypeName'
  | 'coverImage___authorAvatar___remoteId'
  | 'coverImage___authorAvatar___stage'
  | 'coverImage___authorAvatar___createdAt'
  | 'coverImage___authorAvatar___createdBy___remoteTypeName'
  | 'coverImage___authorAvatar___createdBy___remoteId'
  | 'coverImage___authorAvatar___createdBy___stage'
  | 'coverImage___authorAvatar___createdBy___createdAt'
  | 'coverImage___authorAvatar___createdBy___updatedAt'
  | 'coverImage___authorAvatar___createdBy___publishedAt'
  | 'coverImage___authorAvatar___createdBy___name'
  | 'coverImage___authorAvatar___createdBy___picture'
  | 'coverImage___authorAvatar___createdBy___kind'
  | 'coverImage___authorAvatar___createdBy___id'
  | 'coverImage___authorAvatar___createdBy___children'
  | 'coverImage___authorAvatar___updatedAt'
  | 'coverImage___authorAvatar___updatedBy___remoteTypeName'
  | 'coverImage___authorAvatar___updatedBy___remoteId'
  | 'coverImage___authorAvatar___updatedBy___stage'
  | 'coverImage___authorAvatar___updatedBy___createdAt'
  | 'coverImage___authorAvatar___updatedBy___updatedAt'
  | 'coverImage___authorAvatar___updatedBy___publishedAt'
  | 'coverImage___authorAvatar___updatedBy___name'
  | 'coverImage___authorAvatar___updatedBy___picture'
  | 'coverImage___authorAvatar___updatedBy___kind'
  | 'coverImage___authorAvatar___updatedBy___id'
  | 'coverImage___authorAvatar___updatedBy___children'
  | 'coverImage___authorAvatar___publishedAt'
  | 'coverImage___authorAvatar___publishedBy___remoteTypeName'
  | 'coverImage___authorAvatar___publishedBy___remoteId'
  | 'coverImage___authorAvatar___publishedBy___stage'
  | 'coverImage___authorAvatar___publishedBy___createdAt'
  | 'coverImage___authorAvatar___publishedBy___updatedAt'
  | 'coverImage___authorAvatar___publishedBy___publishedAt'
  | 'coverImage___authorAvatar___publishedBy___name'
  | 'coverImage___authorAvatar___publishedBy___picture'
  | 'coverImage___authorAvatar___publishedBy___kind'
  | 'coverImage___authorAvatar___publishedBy___id'
  | 'coverImage___authorAvatar___publishedBy___children'
  | 'coverImage___authorAvatar___name'
  | 'coverImage___authorAvatar___picture___remoteTypeName'
  | 'coverImage___authorAvatar___picture___remoteId'
  | 'coverImage___authorAvatar___picture___locale'
  | 'coverImage___authorAvatar___picture___stage'
  | 'coverImage___authorAvatar___picture___createdAt'
  | 'coverImage___authorAvatar___picture___updatedAt'
  | 'coverImage___authorAvatar___picture___publishedAt'
  | 'coverImage___authorAvatar___picture___handle'
  | 'coverImage___authorAvatar___picture___fileName'
  | 'coverImage___authorAvatar___picture___height'
  | 'coverImage___authorAvatar___picture___width'
  | 'coverImage___authorAvatar___picture___size'
  | 'coverImage___authorAvatar___picture___mimeType'
  | 'coverImage___authorAvatar___picture___coverImagePost'
  | 'coverImage___authorAvatar___picture___authorAvatar'
  | 'coverImage___authorAvatar___picture___seoImage'
  | 'coverImage___authorAvatar___picture___url'
  | 'coverImage___authorAvatar___picture___id'
  | 'coverImage___authorAvatar___picture___children'
  | 'coverImage___authorAvatar___title'
  | 'coverImage___authorAvatar___biography'
  | 'coverImage___authorAvatar___posts'
  | 'coverImage___authorAvatar___posts___remoteTypeName'
  | 'coverImage___authorAvatar___posts___remoteId'
  | 'coverImage___authorAvatar___posts___stage'
  | 'coverImage___authorAvatar___posts___createdAt'
  | 'coverImage___authorAvatar___posts___updatedAt'
  | 'coverImage___authorAvatar___posts___publishedAt'
  | 'coverImage___authorAvatar___posts___title'
  | 'coverImage___authorAvatar___posts___slug'
  | 'coverImage___authorAvatar___posts___date'
  | 'coverImage___authorAvatar___posts___excerpt'
  | 'coverImage___authorAvatar___posts___tags'
  | 'coverImage___authorAvatar___posts___id'
  | 'coverImage___authorAvatar___posts___children'
  | 'coverImage___authorAvatar___id'
  | 'coverImage___authorAvatar___parent___id'
  | 'coverImage___authorAvatar___parent___children'
  | 'coverImage___authorAvatar___children'
  | 'coverImage___authorAvatar___children___id'
  | 'coverImage___authorAvatar___children___children'
  | 'coverImage___authorAvatar___internal___content'
  | 'coverImage___authorAvatar___internal___contentDigest'
  | 'coverImage___authorAvatar___internal___description'
  | 'coverImage___authorAvatar___internal___fieldOwners'
  | 'coverImage___authorAvatar___internal___ignoreType'
  | 'coverImage___authorAvatar___internal___mediaType'
  | 'coverImage___authorAvatar___internal___owner'
  | 'coverImage___authorAvatar___internal___type'
  | 'coverImage___seoImage'
  | 'coverImage___seoImage___remoteTypeName'
  | 'coverImage___seoImage___remoteId'
  | 'coverImage___seoImage___stage'
  | 'coverImage___seoImage___createdAt'
  | 'coverImage___seoImage___createdBy___remoteTypeName'
  | 'coverImage___seoImage___createdBy___remoteId'
  | 'coverImage___seoImage___createdBy___stage'
  | 'coverImage___seoImage___createdBy___createdAt'
  | 'coverImage___seoImage___createdBy___updatedAt'
  | 'coverImage___seoImage___createdBy___publishedAt'
  | 'coverImage___seoImage___createdBy___name'
  | 'coverImage___seoImage___createdBy___picture'
  | 'coverImage___seoImage___createdBy___kind'
  | 'coverImage___seoImage___createdBy___id'
  | 'coverImage___seoImage___createdBy___children'
  | 'coverImage___seoImage___updatedAt'
  | 'coverImage___seoImage___updatedBy___remoteTypeName'
  | 'coverImage___seoImage___updatedBy___remoteId'
  | 'coverImage___seoImage___updatedBy___stage'
  | 'coverImage___seoImage___updatedBy___createdAt'
  | 'coverImage___seoImage___updatedBy___updatedAt'
  | 'coverImage___seoImage___updatedBy___publishedAt'
  | 'coverImage___seoImage___updatedBy___name'
  | 'coverImage___seoImage___updatedBy___picture'
  | 'coverImage___seoImage___updatedBy___kind'
  | 'coverImage___seoImage___updatedBy___id'
  | 'coverImage___seoImage___updatedBy___children'
  | 'coverImage___seoImage___publishedAt'
  | 'coverImage___seoImage___publishedBy___remoteTypeName'
  | 'coverImage___seoImage___publishedBy___remoteId'
  | 'coverImage___seoImage___publishedBy___stage'
  | 'coverImage___seoImage___publishedBy___createdAt'
  | 'coverImage___seoImage___publishedBy___updatedAt'
  | 'coverImage___seoImage___publishedBy___publishedAt'
  | 'coverImage___seoImage___publishedBy___name'
  | 'coverImage___seoImage___publishedBy___picture'
  | 'coverImage___seoImage___publishedBy___kind'
  | 'coverImage___seoImage___publishedBy___id'
  | 'coverImage___seoImage___publishedBy___children'
  | 'coverImage___seoImage___title'
  | 'coverImage___seoImage___description'
  | 'coverImage___seoImage___keywords'
  | 'coverImage___seoImage___image___remoteTypeName'
  | 'coverImage___seoImage___image___remoteId'
  | 'coverImage___seoImage___image___locale'
  | 'coverImage___seoImage___image___stage'
  | 'coverImage___seoImage___image___createdAt'
  | 'coverImage___seoImage___image___updatedAt'
  | 'coverImage___seoImage___image___publishedAt'
  | 'coverImage___seoImage___image___handle'
  | 'coverImage___seoImage___image___fileName'
  | 'coverImage___seoImage___image___height'
  | 'coverImage___seoImage___image___width'
  | 'coverImage___seoImage___image___size'
  | 'coverImage___seoImage___image___mimeType'
  | 'coverImage___seoImage___image___coverImagePost'
  | 'coverImage___seoImage___image___authorAvatar'
  | 'coverImage___seoImage___image___seoImage'
  | 'coverImage___seoImage___image___url'
  | 'coverImage___seoImage___image___id'
  | 'coverImage___seoImage___image___children'
  | 'coverImage___seoImage___id'
  | 'coverImage___seoImage___parent___id'
  | 'coverImage___seoImage___parent___children'
  | 'coverImage___seoImage___children'
  | 'coverImage___seoImage___children___id'
  | 'coverImage___seoImage___children___children'
  | 'coverImage___seoImage___internal___content'
  | 'coverImage___seoImage___internal___contentDigest'
  | 'coverImage___seoImage___internal___description'
  | 'coverImage___seoImage___internal___fieldOwners'
  | 'coverImage___seoImage___internal___ignoreType'
  | 'coverImage___seoImage___internal___mediaType'
  | 'coverImage___seoImage___internal___owner'
  | 'coverImage___seoImage___internal___type'
  | 'coverImage___url'
  | 'coverImage___id'
  | 'coverImage___parent___id'
  | 'coverImage___parent___parent___id'
  | 'coverImage___parent___parent___children'
  | 'coverImage___parent___children'
  | 'coverImage___parent___children___id'
  | 'coverImage___parent___children___children'
  | 'coverImage___parent___internal___content'
  | 'coverImage___parent___internal___contentDigest'
  | 'coverImage___parent___internal___description'
  | 'coverImage___parent___internal___fieldOwners'
  | 'coverImage___parent___internal___ignoreType'
  | 'coverImage___parent___internal___mediaType'
  | 'coverImage___parent___internal___owner'
  | 'coverImage___parent___internal___type'
  | 'coverImage___children'
  | 'coverImage___children___id'
  | 'coverImage___children___parent___id'
  | 'coverImage___children___parent___children'
  | 'coverImage___children___children'
  | 'coverImage___children___children___id'
  | 'coverImage___children___children___children'
  | 'coverImage___children___internal___content'
  | 'coverImage___children___internal___contentDigest'
  | 'coverImage___children___internal___description'
  | 'coverImage___children___internal___fieldOwners'
  | 'coverImage___children___internal___ignoreType'
  | 'coverImage___children___internal___mediaType'
  | 'coverImage___children___internal___owner'
  | 'coverImage___children___internal___type'
  | 'coverImage___internal___content'
  | 'coverImage___internal___contentDigest'
  | 'coverImage___internal___description'
  | 'coverImage___internal___fieldOwners'
  | 'coverImage___internal___ignoreType'
  | 'coverImage___internal___mediaType'
  | 'coverImage___internal___owner'
  | 'coverImage___internal___type'
  | 'updatedAt'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedAt'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'title'
  | 'slug'
  | 'subtitle'
  | 'content___markdownNode___id'
  | 'content___markdownNode___parent___id'
  | 'content___markdownNode___parent___children'
  | 'content___markdownNode___children'
  | 'content___markdownNode___children___id'
  | 'content___markdownNode___children___children'
  | 'content___markdownNode___internal___content'
  | 'content___markdownNode___internal___contentDigest'
  | 'content___markdownNode___internal___description'
  | 'content___markdownNode___internal___fieldOwners'
  | 'content___markdownNode___internal___ignoreType'
  | 'content___markdownNode___internal___mediaType'
  | 'content___markdownNode___internal___owner'
  | 'content___markdownNode___internal___type'
  | 'content___remoteTypeName'
  | 'content___raw'
  | 'content___html'
  | 'content___markdown'
  | 'content___text'
  | 'seo___remoteTypeName'
  | 'seo___remoteId'
  | 'seo___stage'
  | 'seo___createdAt'
  | 'seo___createdBy___remoteTypeName'
  | 'seo___createdBy___remoteId'
  | 'seo___createdBy___stage'
  | 'seo___createdBy___createdAt'
  | 'seo___createdBy___updatedAt'
  | 'seo___createdBy___publishedAt'
  | 'seo___createdBy___name'
  | 'seo___createdBy___picture'
  | 'seo___createdBy___kind'
  | 'seo___createdBy___id'
  | 'seo___createdBy___parent___id'
  | 'seo___createdBy___parent___children'
  | 'seo___createdBy___children'
  | 'seo___createdBy___children___id'
  | 'seo___createdBy___children___children'
  | 'seo___createdBy___internal___content'
  | 'seo___createdBy___internal___contentDigest'
  | 'seo___createdBy___internal___description'
  | 'seo___createdBy___internal___fieldOwners'
  | 'seo___createdBy___internal___ignoreType'
  | 'seo___createdBy___internal___mediaType'
  | 'seo___createdBy___internal___owner'
  | 'seo___createdBy___internal___type'
  | 'seo___updatedAt'
  | 'seo___updatedBy___remoteTypeName'
  | 'seo___updatedBy___remoteId'
  | 'seo___updatedBy___stage'
  | 'seo___updatedBy___createdAt'
  | 'seo___updatedBy___updatedAt'
  | 'seo___updatedBy___publishedAt'
  | 'seo___updatedBy___name'
  | 'seo___updatedBy___picture'
  | 'seo___updatedBy___kind'
  | 'seo___updatedBy___id'
  | 'seo___updatedBy___parent___id'
  | 'seo___updatedBy___parent___children'
  | 'seo___updatedBy___children'
  | 'seo___updatedBy___children___id'
  | 'seo___updatedBy___children___children'
  | 'seo___updatedBy___internal___content'
  | 'seo___updatedBy___internal___contentDigest'
  | 'seo___updatedBy___internal___description'
  | 'seo___updatedBy___internal___fieldOwners'
  | 'seo___updatedBy___internal___ignoreType'
  | 'seo___updatedBy___internal___mediaType'
  | 'seo___updatedBy___internal___owner'
  | 'seo___updatedBy___internal___type'
  | 'seo___publishedAt'
  | 'seo___publishedBy___remoteTypeName'
  | 'seo___publishedBy___remoteId'
  | 'seo___publishedBy___stage'
  | 'seo___publishedBy___createdAt'
  | 'seo___publishedBy___updatedAt'
  | 'seo___publishedBy___publishedAt'
  | 'seo___publishedBy___name'
  | 'seo___publishedBy___picture'
  | 'seo___publishedBy___kind'
  | 'seo___publishedBy___id'
  | 'seo___publishedBy___parent___id'
  | 'seo___publishedBy___parent___children'
  | 'seo___publishedBy___children'
  | 'seo___publishedBy___children___id'
  | 'seo___publishedBy___children___children'
  | 'seo___publishedBy___internal___content'
  | 'seo___publishedBy___internal___contentDigest'
  | 'seo___publishedBy___internal___description'
  | 'seo___publishedBy___internal___fieldOwners'
  | 'seo___publishedBy___internal___ignoreType'
  | 'seo___publishedBy___internal___mediaType'
  | 'seo___publishedBy___internal___owner'
  | 'seo___publishedBy___internal___type'
  | 'seo___title'
  | 'seo___description'
  | 'seo___keywords'
  | 'seo___image___localFile___sourceInstanceName'
  | 'seo___image___localFile___absolutePath'
  | 'seo___image___localFile___relativePath'
  | 'seo___image___localFile___extension'
  | 'seo___image___localFile___size'
  | 'seo___image___localFile___prettySize'
  | 'seo___image___localFile___modifiedTime'
  | 'seo___image___localFile___accessTime'
  | 'seo___image___localFile___changeTime'
  | 'seo___image___localFile___birthTime'
  | 'seo___image___localFile___root'
  | 'seo___image___localFile___dir'
  | 'seo___image___localFile___base'
  | 'seo___image___localFile___ext'
  | 'seo___image___localFile___name'
  | 'seo___image___localFile___relativeDirectory'
  | 'seo___image___localFile___dev'
  | 'seo___image___localFile___mode'
  | 'seo___image___localFile___nlink'
  | 'seo___image___localFile___uid'
  | 'seo___image___localFile___gid'
  | 'seo___image___localFile___rdev'
  | 'seo___image___localFile___ino'
  | 'seo___image___localFile___atimeMs'
  | 'seo___image___localFile___mtimeMs'
  | 'seo___image___localFile___ctimeMs'
  | 'seo___image___localFile___atime'
  | 'seo___image___localFile___mtime'
  | 'seo___image___localFile___ctime'
  | 'seo___image___localFile___birthtime'
  | 'seo___image___localFile___birthtimeMs'
  | 'seo___image___localFile___blksize'
  | 'seo___image___localFile___blocks'
  | 'seo___image___localFile___url'
  | 'seo___image___localFile___publicURL'
  | 'seo___image___localFile___childrenImageSharp'
  | 'seo___image___localFile___id'
  | 'seo___image___localFile___children'
  | 'seo___image___remoteTypeName'
  | 'seo___image___remoteId'
  | 'seo___image___locale'
  | 'seo___image___stage'
  | 'seo___image___createdAt'
  | 'seo___image___createdBy___remoteTypeName'
  | 'seo___image___createdBy___remoteId'
  | 'seo___image___createdBy___stage'
  | 'seo___image___createdBy___createdAt'
  | 'seo___image___createdBy___updatedAt'
  | 'seo___image___createdBy___publishedAt'
  | 'seo___image___createdBy___name'
  | 'seo___image___createdBy___picture'
  | 'seo___image___createdBy___kind'
  | 'seo___image___createdBy___id'
  | 'seo___image___createdBy___children'
  | 'seo___image___updatedAt'
  | 'seo___image___updatedBy___remoteTypeName'
  | 'seo___image___updatedBy___remoteId'
  | 'seo___image___updatedBy___stage'
  | 'seo___image___updatedBy___createdAt'
  | 'seo___image___updatedBy___updatedAt'
  | 'seo___image___updatedBy___publishedAt'
  | 'seo___image___updatedBy___name'
  | 'seo___image___updatedBy___picture'
  | 'seo___image___updatedBy___kind'
  | 'seo___image___updatedBy___id'
  | 'seo___image___updatedBy___children'
  | 'seo___image___publishedAt'
  | 'seo___image___publishedBy___remoteTypeName'
  | 'seo___image___publishedBy___remoteId'
  | 'seo___image___publishedBy___stage'
  | 'seo___image___publishedBy___createdAt'
  | 'seo___image___publishedBy___updatedAt'
  | 'seo___image___publishedBy___publishedAt'
  | 'seo___image___publishedBy___name'
  | 'seo___image___publishedBy___picture'
  | 'seo___image___publishedBy___kind'
  | 'seo___image___publishedBy___id'
  | 'seo___image___publishedBy___children'
  | 'seo___image___handle'
  | 'seo___image___fileName'
  | 'seo___image___height'
  | 'seo___image___width'
  | 'seo___image___size'
  | 'seo___image___mimeType'
  | 'seo___image___coverImagePost'
  | 'seo___image___coverImagePost___remoteTypeName'
  | 'seo___image___coverImagePost___remoteId'
  | 'seo___image___coverImagePost___stage'
  | 'seo___image___coverImagePost___createdAt'
  | 'seo___image___coverImagePost___updatedAt'
  | 'seo___image___coverImagePost___publishedAt'
  | 'seo___image___coverImagePost___title'
  | 'seo___image___coverImagePost___slug'
  | 'seo___image___coverImagePost___date'
  | 'seo___image___coverImagePost___excerpt'
  | 'seo___image___coverImagePost___tags'
  | 'seo___image___coverImagePost___id'
  | 'seo___image___coverImagePost___children'
  | 'seo___image___authorAvatar'
  | 'seo___image___authorAvatar___remoteTypeName'
  | 'seo___image___authorAvatar___remoteId'
  | 'seo___image___authorAvatar___stage'
  | 'seo___image___authorAvatar___createdAt'
  | 'seo___image___authorAvatar___updatedAt'
  | 'seo___image___authorAvatar___publishedAt'
  | 'seo___image___authorAvatar___name'
  | 'seo___image___authorAvatar___title'
  | 'seo___image___authorAvatar___biography'
  | 'seo___image___authorAvatar___posts'
  | 'seo___image___authorAvatar___id'
  | 'seo___image___authorAvatar___children'
  | 'seo___image___seoImage'
  | 'seo___image___seoImage___remoteTypeName'
  | 'seo___image___seoImage___remoteId'
  | 'seo___image___seoImage___stage'
  | 'seo___image___seoImage___createdAt'
  | 'seo___image___seoImage___updatedAt'
  | 'seo___image___seoImage___publishedAt'
  | 'seo___image___seoImage___title'
  | 'seo___image___seoImage___description'
  | 'seo___image___seoImage___keywords'
  | 'seo___image___seoImage___id'
  | 'seo___image___seoImage___children'
  | 'seo___image___url'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___id'
  | 'seo___parent___id'
  | 'seo___parent___parent___id'
  | 'seo___parent___parent___children'
  | 'seo___parent___children'
  | 'seo___parent___children___id'
  | 'seo___parent___children___children'
  | 'seo___parent___internal___content'
  | 'seo___parent___internal___contentDigest'
  | 'seo___parent___internal___description'
  | 'seo___parent___internal___fieldOwners'
  | 'seo___parent___internal___ignoreType'
  | 'seo___parent___internal___mediaType'
  | 'seo___parent___internal___owner'
  | 'seo___parent___internal___type'
  | 'seo___children'
  | 'seo___children___id'
  | 'seo___children___parent___id'
  | 'seo___children___parent___children'
  | 'seo___children___children'
  | 'seo___children___children___id'
  | 'seo___children___children___children'
  | 'seo___children___internal___content'
  | 'seo___children___internal___contentDigest'
  | 'seo___children___internal___description'
  | 'seo___children___internal___fieldOwners'
  | 'seo___children___internal___ignoreType'
  | 'seo___children___internal___mediaType'
  | 'seo___children___internal___owner'
  | 'seo___children___internal___type'
  | 'seo___internal___content'
  | 'seo___internal___contentDigest'
  | 'seo___internal___description'
  | 'seo___internal___fieldOwners'
  | 'seo___internal___ignoreType'
  | 'seo___internal___mediaType'
  | 'seo___internal___owner'
  | 'seo___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type GraphCms_PageFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  coverImage?: Maybe<GraphCms_AssetFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  subtitle?: Maybe<StringQueryOperatorInput>
  content?: Maybe<GraphCms_RichTextFilterInput>
  seo?: Maybe<GraphCms_SeoFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type GraphCms_PageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_PageEdge>
  nodes: Array<GraphCms_Page>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphCms_PageSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_PageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type GraphCms_Post = Node & {
  remoteTypeName: Scalars['String']
  remoteId: Scalars['ID']
  stage: GraphCms_Stage
  createdAt: Scalars['JSON']
  createdBy?: Maybe<GraphCms_User>
  updatedAt: Scalars['JSON']
  updatedBy?: Maybe<GraphCms_User>
  publishedAt?: Maybe<Scalars['JSON']>
  publishedBy?: Maybe<GraphCms_User>
  title: Scalars['String']
  slug: Scalars['String']
  date: Scalars['JSON']
  excerpt?: Maybe<Scalars['String']>
  coverImage?: Maybe<GraphCms_Asset>
  content?: Maybe<GraphCms_RichText>
  tags: Array<Scalars['String']>
  author?: Maybe<GraphCms_Author>
  seo?: Maybe<GraphCms_Seo>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type GraphCms_PostConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_PostEdge>
  nodes: Array<GraphCms_Post>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphCms_PostGroupConnection>
}

export type GraphCms_PostConnectionDistinctArgs = {
  field: GraphCms_PostFieldsEnum
}

export type GraphCms_PostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphCms_PostFieldsEnum
}

export type GraphCms_PostEdge = {
  next?: Maybe<GraphCms_Post>
  node: GraphCms_Post
  previous?: Maybe<GraphCms_Post>
}

export type GraphCms_PostFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedAt'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedAt'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'title'
  | 'slug'
  | 'date'
  | 'excerpt'
  | 'coverImage___localFile___sourceInstanceName'
  | 'coverImage___localFile___absolutePath'
  | 'coverImage___localFile___relativePath'
  | 'coverImage___localFile___extension'
  | 'coverImage___localFile___size'
  | 'coverImage___localFile___prettySize'
  | 'coverImage___localFile___modifiedTime'
  | 'coverImage___localFile___accessTime'
  | 'coverImage___localFile___changeTime'
  | 'coverImage___localFile___birthTime'
  | 'coverImage___localFile___root'
  | 'coverImage___localFile___dir'
  | 'coverImage___localFile___base'
  | 'coverImage___localFile___ext'
  | 'coverImage___localFile___name'
  | 'coverImage___localFile___relativeDirectory'
  | 'coverImage___localFile___dev'
  | 'coverImage___localFile___mode'
  | 'coverImage___localFile___nlink'
  | 'coverImage___localFile___uid'
  | 'coverImage___localFile___gid'
  | 'coverImage___localFile___rdev'
  | 'coverImage___localFile___ino'
  | 'coverImage___localFile___atimeMs'
  | 'coverImage___localFile___mtimeMs'
  | 'coverImage___localFile___ctimeMs'
  | 'coverImage___localFile___atime'
  | 'coverImage___localFile___mtime'
  | 'coverImage___localFile___ctime'
  | 'coverImage___localFile___birthtime'
  | 'coverImage___localFile___birthtimeMs'
  | 'coverImage___localFile___blksize'
  | 'coverImage___localFile___blocks'
  | 'coverImage___localFile___url'
  | 'coverImage___localFile___publicURL'
  | 'coverImage___localFile___childrenImageSharp'
  | 'coverImage___localFile___childrenImageSharp___gatsbyImageData'
  | 'coverImage___localFile___childrenImageSharp___id'
  | 'coverImage___localFile___childrenImageSharp___children'
  | 'coverImage___localFile___childImageSharp___gatsbyImageData'
  | 'coverImage___localFile___childImageSharp___id'
  | 'coverImage___localFile___childImageSharp___children'
  | 'coverImage___localFile___id'
  | 'coverImage___localFile___parent___id'
  | 'coverImage___localFile___parent___children'
  | 'coverImage___localFile___children'
  | 'coverImage___localFile___children___id'
  | 'coverImage___localFile___children___children'
  | 'coverImage___localFile___internal___content'
  | 'coverImage___localFile___internal___contentDigest'
  | 'coverImage___localFile___internal___description'
  | 'coverImage___localFile___internal___fieldOwners'
  | 'coverImage___localFile___internal___ignoreType'
  | 'coverImage___localFile___internal___mediaType'
  | 'coverImage___localFile___internal___owner'
  | 'coverImage___localFile___internal___type'
  | 'coverImage___remoteTypeName'
  | 'coverImage___remoteId'
  | 'coverImage___locale'
  | 'coverImage___stage'
  | 'coverImage___createdAt'
  | 'coverImage___createdBy___remoteTypeName'
  | 'coverImage___createdBy___remoteId'
  | 'coverImage___createdBy___stage'
  | 'coverImage___createdBy___createdAt'
  | 'coverImage___createdBy___updatedAt'
  | 'coverImage___createdBy___publishedAt'
  | 'coverImage___createdBy___name'
  | 'coverImage___createdBy___picture'
  | 'coverImage___createdBy___kind'
  | 'coverImage___createdBy___id'
  | 'coverImage___createdBy___parent___id'
  | 'coverImage___createdBy___parent___children'
  | 'coverImage___createdBy___children'
  | 'coverImage___createdBy___children___id'
  | 'coverImage___createdBy___children___children'
  | 'coverImage___createdBy___internal___content'
  | 'coverImage___createdBy___internal___contentDigest'
  | 'coverImage___createdBy___internal___description'
  | 'coverImage___createdBy___internal___fieldOwners'
  | 'coverImage___createdBy___internal___ignoreType'
  | 'coverImage___createdBy___internal___mediaType'
  | 'coverImage___createdBy___internal___owner'
  | 'coverImage___createdBy___internal___type'
  | 'coverImage___updatedAt'
  | 'coverImage___updatedBy___remoteTypeName'
  | 'coverImage___updatedBy___remoteId'
  | 'coverImage___updatedBy___stage'
  | 'coverImage___updatedBy___createdAt'
  | 'coverImage___updatedBy___updatedAt'
  | 'coverImage___updatedBy___publishedAt'
  | 'coverImage___updatedBy___name'
  | 'coverImage___updatedBy___picture'
  | 'coverImage___updatedBy___kind'
  | 'coverImage___updatedBy___id'
  | 'coverImage___updatedBy___parent___id'
  | 'coverImage___updatedBy___parent___children'
  | 'coverImage___updatedBy___children'
  | 'coverImage___updatedBy___children___id'
  | 'coverImage___updatedBy___children___children'
  | 'coverImage___updatedBy___internal___content'
  | 'coverImage___updatedBy___internal___contentDigest'
  | 'coverImage___updatedBy___internal___description'
  | 'coverImage___updatedBy___internal___fieldOwners'
  | 'coverImage___updatedBy___internal___ignoreType'
  | 'coverImage___updatedBy___internal___mediaType'
  | 'coverImage___updatedBy___internal___owner'
  | 'coverImage___updatedBy___internal___type'
  | 'coverImage___publishedAt'
  | 'coverImage___publishedBy___remoteTypeName'
  | 'coverImage___publishedBy___remoteId'
  | 'coverImage___publishedBy___stage'
  | 'coverImage___publishedBy___createdAt'
  | 'coverImage___publishedBy___updatedAt'
  | 'coverImage___publishedBy___publishedAt'
  | 'coverImage___publishedBy___name'
  | 'coverImage___publishedBy___picture'
  | 'coverImage___publishedBy___kind'
  | 'coverImage___publishedBy___id'
  | 'coverImage___publishedBy___parent___id'
  | 'coverImage___publishedBy___parent___children'
  | 'coverImage___publishedBy___children'
  | 'coverImage___publishedBy___children___id'
  | 'coverImage___publishedBy___children___children'
  | 'coverImage___publishedBy___internal___content'
  | 'coverImage___publishedBy___internal___contentDigest'
  | 'coverImage___publishedBy___internal___description'
  | 'coverImage___publishedBy___internal___fieldOwners'
  | 'coverImage___publishedBy___internal___ignoreType'
  | 'coverImage___publishedBy___internal___mediaType'
  | 'coverImage___publishedBy___internal___owner'
  | 'coverImage___publishedBy___internal___type'
  | 'coverImage___handle'
  | 'coverImage___fileName'
  | 'coverImage___height'
  | 'coverImage___width'
  | 'coverImage___size'
  | 'coverImage___mimeType'
  | 'coverImage___coverImagePost'
  | 'coverImage___coverImagePost___remoteTypeName'
  | 'coverImage___coverImagePost___remoteId'
  | 'coverImage___coverImagePost___stage'
  | 'coverImage___coverImagePost___createdAt'
  | 'coverImage___coverImagePost___createdBy___remoteTypeName'
  | 'coverImage___coverImagePost___createdBy___remoteId'
  | 'coverImage___coverImagePost___createdBy___stage'
  | 'coverImage___coverImagePost___createdBy___createdAt'
  | 'coverImage___coverImagePost___createdBy___updatedAt'
  | 'coverImage___coverImagePost___createdBy___publishedAt'
  | 'coverImage___coverImagePost___createdBy___name'
  | 'coverImage___coverImagePost___createdBy___picture'
  | 'coverImage___coverImagePost___createdBy___kind'
  | 'coverImage___coverImagePost___createdBy___id'
  | 'coverImage___coverImagePost___createdBy___children'
  | 'coverImage___coverImagePost___updatedAt'
  | 'coverImage___coverImagePost___updatedBy___remoteTypeName'
  | 'coverImage___coverImagePost___updatedBy___remoteId'
  | 'coverImage___coverImagePost___updatedBy___stage'
  | 'coverImage___coverImagePost___updatedBy___createdAt'
  | 'coverImage___coverImagePost___updatedBy___updatedAt'
  | 'coverImage___coverImagePost___updatedBy___publishedAt'
  | 'coverImage___coverImagePost___updatedBy___name'
  | 'coverImage___coverImagePost___updatedBy___picture'
  | 'coverImage___coverImagePost___updatedBy___kind'
  | 'coverImage___coverImagePost___updatedBy___id'
  | 'coverImage___coverImagePost___updatedBy___children'
  | 'coverImage___coverImagePost___publishedAt'
  | 'coverImage___coverImagePost___publishedBy___remoteTypeName'
  | 'coverImage___coverImagePost___publishedBy___remoteId'
  | 'coverImage___coverImagePost___publishedBy___stage'
  | 'coverImage___coverImagePost___publishedBy___createdAt'
  | 'coverImage___coverImagePost___publishedBy___updatedAt'
  | 'coverImage___coverImagePost___publishedBy___publishedAt'
  | 'coverImage___coverImagePost___publishedBy___name'
  | 'coverImage___coverImagePost___publishedBy___picture'
  | 'coverImage___coverImagePost___publishedBy___kind'
  | 'coverImage___coverImagePost___publishedBy___id'
  | 'coverImage___coverImagePost___publishedBy___children'
  | 'coverImage___coverImagePost___title'
  | 'coverImage___coverImagePost___slug'
  | 'coverImage___coverImagePost___date'
  | 'coverImage___coverImagePost___excerpt'
  | 'coverImage___coverImagePost___coverImage___remoteTypeName'
  | 'coverImage___coverImagePost___coverImage___remoteId'
  | 'coverImage___coverImagePost___coverImage___locale'
  | 'coverImage___coverImagePost___coverImage___stage'
  | 'coverImage___coverImagePost___coverImage___createdAt'
  | 'coverImage___coverImagePost___coverImage___updatedAt'
  | 'coverImage___coverImagePost___coverImage___publishedAt'
  | 'coverImage___coverImagePost___coverImage___handle'
  | 'coverImage___coverImagePost___coverImage___fileName'
  | 'coverImage___coverImagePost___coverImage___height'
  | 'coverImage___coverImagePost___coverImage___width'
  | 'coverImage___coverImagePost___coverImage___size'
  | 'coverImage___coverImagePost___coverImage___mimeType'
  | 'coverImage___coverImagePost___coverImage___coverImagePost'
  | 'coverImage___coverImagePost___coverImage___authorAvatar'
  | 'coverImage___coverImagePost___coverImage___seoImage'
  | 'coverImage___coverImagePost___coverImage___url'
  | 'coverImage___coverImagePost___coverImage___id'
  | 'coverImage___coverImagePost___coverImage___children'
  | 'coverImage___coverImagePost___content___remoteTypeName'
  | 'coverImage___coverImagePost___content___raw'
  | 'coverImage___coverImagePost___content___html'
  | 'coverImage___coverImagePost___content___markdown'
  | 'coverImage___coverImagePost___content___text'
  | 'coverImage___coverImagePost___tags'
  | 'coverImage___coverImagePost___author___remoteTypeName'
  | 'coverImage___coverImagePost___author___remoteId'
  | 'coverImage___coverImagePost___author___stage'
  | 'coverImage___coverImagePost___author___createdAt'
  | 'coverImage___coverImagePost___author___updatedAt'
  | 'coverImage___coverImagePost___author___publishedAt'
  | 'coverImage___coverImagePost___author___name'
  | 'coverImage___coverImagePost___author___title'
  | 'coverImage___coverImagePost___author___biography'
  | 'coverImage___coverImagePost___author___posts'
  | 'coverImage___coverImagePost___author___id'
  | 'coverImage___coverImagePost___author___children'
  | 'coverImage___coverImagePost___seo___remoteTypeName'
  | 'coverImage___coverImagePost___seo___remoteId'
  | 'coverImage___coverImagePost___seo___stage'
  | 'coverImage___coverImagePost___seo___createdAt'
  | 'coverImage___coverImagePost___seo___updatedAt'
  | 'coverImage___coverImagePost___seo___publishedAt'
  | 'coverImage___coverImagePost___seo___title'
  | 'coverImage___coverImagePost___seo___description'
  | 'coverImage___coverImagePost___seo___keywords'
  | 'coverImage___coverImagePost___seo___id'
  | 'coverImage___coverImagePost___seo___children'
  | 'coverImage___coverImagePost___id'
  | 'coverImage___coverImagePost___parent___id'
  | 'coverImage___coverImagePost___parent___children'
  | 'coverImage___coverImagePost___children'
  | 'coverImage___coverImagePost___children___id'
  | 'coverImage___coverImagePost___children___children'
  | 'coverImage___coverImagePost___internal___content'
  | 'coverImage___coverImagePost___internal___contentDigest'
  | 'coverImage___coverImagePost___internal___description'
  | 'coverImage___coverImagePost___internal___fieldOwners'
  | 'coverImage___coverImagePost___internal___ignoreType'
  | 'coverImage___coverImagePost___internal___mediaType'
  | 'coverImage___coverImagePost___internal___owner'
  | 'coverImage___coverImagePost___internal___type'
  | 'coverImage___authorAvatar'
  | 'coverImage___authorAvatar___remoteTypeName'
  | 'coverImage___authorAvatar___remoteId'
  | 'coverImage___authorAvatar___stage'
  | 'coverImage___authorAvatar___createdAt'
  | 'coverImage___authorAvatar___createdBy___remoteTypeName'
  | 'coverImage___authorAvatar___createdBy___remoteId'
  | 'coverImage___authorAvatar___createdBy___stage'
  | 'coverImage___authorAvatar___createdBy___createdAt'
  | 'coverImage___authorAvatar___createdBy___updatedAt'
  | 'coverImage___authorAvatar___createdBy___publishedAt'
  | 'coverImage___authorAvatar___createdBy___name'
  | 'coverImage___authorAvatar___createdBy___picture'
  | 'coverImage___authorAvatar___createdBy___kind'
  | 'coverImage___authorAvatar___createdBy___id'
  | 'coverImage___authorAvatar___createdBy___children'
  | 'coverImage___authorAvatar___updatedAt'
  | 'coverImage___authorAvatar___updatedBy___remoteTypeName'
  | 'coverImage___authorAvatar___updatedBy___remoteId'
  | 'coverImage___authorAvatar___updatedBy___stage'
  | 'coverImage___authorAvatar___updatedBy___createdAt'
  | 'coverImage___authorAvatar___updatedBy___updatedAt'
  | 'coverImage___authorAvatar___updatedBy___publishedAt'
  | 'coverImage___authorAvatar___updatedBy___name'
  | 'coverImage___authorAvatar___updatedBy___picture'
  | 'coverImage___authorAvatar___updatedBy___kind'
  | 'coverImage___authorAvatar___updatedBy___id'
  | 'coverImage___authorAvatar___updatedBy___children'
  | 'coverImage___authorAvatar___publishedAt'
  | 'coverImage___authorAvatar___publishedBy___remoteTypeName'
  | 'coverImage___authorAvatar___publishedBy___remoteId'
  | 'coverImage___authorAvatar___publishedBy___stage'
  | 'coverImage___authorAvatar___publishedBy___createdAt'
  | 'coverImage___authorAvatar___publishedBy___updatedAt'
  | 'coverImage___authorAvatar___publishedBy___publishedAt'
  | 'coverImage___authorAvatar___publishedBy___name'
  | 'coverImage___authorAvatar___publishedBy___picture'
  | 'coverImage___authorAvatar___publishedBy___kind'
  | 'coverImage___authorAvatar___publishedBy___id'
  | 'coverImage___authorAvatar___publishedBy___children'
  | 'coverImage___authorAvatar___name'
  | 'coverImage___authorAvatar___picture___remoteTypeName'
  | 'coverImage___authorAvatar___picture___remoteId'
  | 'coverImage___authorAvatar___picture___locale'
  | 'coverImage___authorAvatar___picture___stage'
  | 'coverImage___authorAvatar___picture___createdAt'
  | 'coverImage___authorAvatar___picture___updatedAt'
  | 'coverImage___authorAvatar___picture___publishedAt'
  | 'coverImage___authorAvatar___picture___handle'
  | 'coverImage___authorAvatar___picture___fileName'
  | 'coverImage___authorAvatar___picture___height'
  | 'coverImage___authorAvatar___picture___width'
  | 'coverImage___authorAvatar___picture___size'
  | 'coverImage___authorAvatar___picture___mimeType'
  | 'coverImage___authorAvatar___picture___coverImagePost'
  | 'coverImage___authorAvatar___picture___authorAvatar'
  | 'coverImage___authorAvatar___picture___seoImage'
  | 'coverImage___authorAvatar___picture___url'
  | 'coverImage___authorAvatar___picture___id'
  | 'coverImage___authorAvatar___picture___children'
  | 'coverImage___authorAvatar___title'
  | 'coverImage___authorAvatar___biography'
  | 'coverImage___authorAvatar___posts'
  | 'coverImage___authorAvatar___posts___remoteTypeName'
  | 'coverImage___authorAvatar___posts___remoteId'
  | 'coverImage___authorAvatar___posts___stage'
  | 'coverImage___authorAvatar___posts___createdAt'
  | 'coverImage___authorAvatar___posts___updatedAt'
  | 'coverImage___authorAvatar___posts___publishedAt'
  | 'coverImage___authorAvatar___posts___title'
  | 'coverImage___authorAvatar___posts___slug'
  | 'coverImage___authorAvatar___posts___date'
  | 'coverImage___authorAvatar___posts___excerpt'
  | 'coverImage___authorAvatar___posts___tags'
  | 'coverImage___authorAvatar___posts___id'
  | 'coverImage___authorAvatar___posts___children'
  | 'coverImage___authorAvatar___id'
  | 'coverImage___authorAvatar___parent___id'
  | 'coverImage___authorAvatar___parent___children'
  | 'coverImage___authorAvatar___children'
  | 'coverImage___authorAvatar___children___id'
  | 'coverImage___authorAvatar___children___children'
  | 'coverImage___authorAvatar___internal___content'
  | 'coverImage___authorAvatar___internal___contentDigest'
  | 'coverImage___authorAvatar___internal___description'
  | 'coverImage___authorAvatar___internal___fieldOwners'
  | 'coverImage___authorAvatar___internal___ignoreType'
  | 'coverImage___authorAvatar___internal___mediaType'
  | 'coverImage___authorAvatar___internal___owner'
  | 'coverImage___authorAvatar___internal___type'
  | 'coverImage___seoImage'
  | 'coverImage___seoImage___remoteTypeName'
  | 'coverImage___seoImage___remoteId'
  | 'coverImage___seoImage___stage'
  | 'coverImage___seoImage___createdAt'
  | 'coverImage___seoImage___createdBy___remoteTypeName'
  | 'coverImage___seoImage___createdBy___remoteId'
  | 'coverImage___seoImage___createdBy___stage'
  | 'coverImage___seoImage___createdBy___createdAt'
  | 'coverImage___seoImage___createdBy___updatedAt'
  | 'coverImage___seoImage___createdBy___publishedAt'
  | 'coverImage___seoImage___createdBy___name'
  | 'coverImage___seoImage___createdBy___picture'
  | 'coverImage___seoImage___createdBy___kind'
  | 'coverImage___seoImage___createdBy___id'
  | 'coverImage___seoImage___createdBy___children'
  | 'coverImage___seoImage___updatedAt'
  | 'coverImage___seoImage___updatedBy___remoteTypeName'
  | 'coverImage___seoImage___updatedBy___remoteId'
  | 'coverImage___seoImage___updatedBy___stage'
  | 'coverImage___seoImage___updatedBy___createdAt'
  | 'coverImage___seoImage___updatedBy___updatedAt'
  | 'coverImage___seoImage___updatedBy___publishedAt'
  | 'coverImage___seoImage___updatedBy___name'
  | 'coverImage___seoImage___updatedBy___picture'
  | 'coverImage___seoImage___updatedBy___kind'
  | 'coverImage___seoImage___updatedBy___id'
  | 'coverImage___seoImage___updatedBy___children'
  | 'coverImage___seoImage___publishedAt'
  | 'coverImage___seoImage___publishedBy___remoteTypeName'
  | 'coverImage___seoImage___publishedBy___remoteId'
  | 'coverImage___seoImage___publishedBy___stage'
  | 'coverImage___seoImage___publishedBy___createdAt'
  | 'coverImage___seoImage___publishedBy___updatedAt'
  | 'coverImage___seoImage___publishedBy___publishedAt'
  | 'coverImage___seoImage___publishedBy___name'
  | 'coverImage___seoImage___publishedBy___picture'
  | 'coverImage___seoImage___publishedBy___kind'
  | 'coverImage___seoImage___publishedBy___id'
  | 'coverImage___seoImage___publishedBy___children'
  | 'coverImage___seoImage___title'
  | 'coverImage___seoImage___description'
  | 'coverImage___seoImage___keywords'
  | 'coverImage___seoImage___image___remoteTypeName'
  | 'coverImage___seoImage___image___remoteId'
  | 'coverImage___seoImage___image___locale'
  | 'coverImage___seoImage___image___stage'
  | 'coverImage___seoImage___image___createdAt'
  | 'coverImage___seoImage___image___updatedAt'
  | 'coverImage___seoImage___image___publishedAt'
  | 'coverImage___seoImage___image___handle'
  | 'coverImage___seoImage___image___fileName'
  | 'coverImage___seoImage___image___height'
  | 'coverImage___seoImage___image___width'
  | 'coverImage___seoImage___image___size'
  | 'coverImage___seoImage___image___mimeType'
  | 'coverImage___seoImage___image___coverImagePost'
  | 'coverImage___seoImage___image___authorAvatar'
  | 'coverImage___seoImage___image___seoImage'
  | 'coverImage___seoImage___image___url'
  | 'coverImage___seoImage___image___id'
  | 'coverImage___seoImage___image___children'
  | 'coverImage___seoImage___id'
  | 'coverImage___seoImage___parent___id'
  | 'coverImage___seoImage___parent___children'
  | 'coverImage___seoImage___children'
  | 'coverImage___seoImage___children___id'
  | 'coverImage___seoImage___children___children'
  | 'coverImage___seoImage___internal___content'
  | 'coverImage___seoImage___internal___contentDigest'
  | 'coverImage___seoImage___internal___description'
  | 'coverImage___seoImage___internal___fieldOwners'
  | 'coverImage___seoImage___internal___ignoreType'
  | 'coverImage___seoImage___internal___mediaType'
  | 'coverImage___seoImage___internal___owner'
  | 'coverImage___seoImage___internal___type'
  | 'coverImage___url'
  | 'coverImage___id'
  | 'coverImage___parent___id'
  | 'coverImage___parent___parent___id'
  | 'coverImage___parent___parent___children'
  | 'coverImage___parent___children'
  | 'coverImage___parent___children___id'
  | 'coverImage___parent___children___children'
  | 'coverImage___parent___internal___content'
  | 'coverImage___parent___internal___contentDigest'
  | 'coverImage___parent___internal___description'
  | 'coverImage___parent___internal___fieldOwners'
  | 'coverImage___parent___internal___ignoreType'
  | 'coverImage___parent___internal___mediaType'
  | 'coverImage___parent___internal___owner'
  | 'coverImage___parent___internal___type'
  | 'coverImage___children'
  | 'coverImage___children___id'
  | 'coverImage___children___parent___id'
  | 'coverImage___children___parent___children'
  | 'coverImage___children___children'
  | 'coverImage___children___children___id'
  | 'coverImage___children___children___children'
  | 'coverImage___children___internal___content'
  | 'coverImage___children___internal___contentDigest'
  | 'coverImage___children___internal___description'
  | 'coverImage___children___internal___fieldOwners'
  | 'coverImage___children___internal___ignoreType'
  | 'coverImage___children___internal___mediaType'
  | 'coverImage___children___internal___owner'
  | 'coverImage___children___internal___type'
  | 'coverImage___internal___content'
  | 'coverImage___internal___contentDigest'
  | 'coverImage___internal___description'
  | 'coverImage___internal___fieldOwners'
  | 'coverImage___internal___ignoreType'
  | 'coverImage___internal___mediaType'
  | 'coverImage___internal___owner'
  | 'coverImage___internal___type'
  | 'content___markdownNode___id'
  | 'content___markdownNode___parent___id'
  | 'content___markdownNode___parent___children'
  | 'content___markdownNode___children'
  | 'content___markdownNode___children___id'
  | 'content___markdownNode___children___children'
  | 'content___markdownNode___internal___content'
  | 'content___markdownNode___internal___contentDigest'
  | 'content___markdownNode___internal___description'
  | 'content___markdownNode___internal___fieldOwners'
  | 'content___markdownNode___internal___ignoreType'
  | 'content___markdownNode___internal___mediaType'
  | 'content___markdownNode___internal___owner'
  | 'content___markdownNode___internal___type'
  | 'content___remoteTypeName'
  | 'content___raw'
  | 'content___html'
  | 'content___markdown'
  | 'content___text'
  | 'tags'
  | 'author___remoteTypeName'
  | 'author___remoteId'
  | 'author___stage'
  | 'author___createdAt'
  | 'author___createdBy___remoteTypeName'
  | 'author___createdBy___remoteId'
  | 'author___createdBy___stage'
  | 'author___createdBy___createdAt'
  | 'author___createdBy___updatedAt'
  | 'author___createdBy___publishedAt'
  | 'author___createdBy___name'
  | 'author___createdBy___picture'
  | 'author___createdBy___kind'
  | 'author___createdBy___id'
  | 'author___createdBy___parent___id'
  | 'author___createdBy___parent___children'
  | 'author___createdBy___children'
  | 'author___createdBy___children___id'
  | 'author___createdBy___children___children'
  | 'author___createdBy___internal___content'
  | 'author___createdBy___internal___contentDigest'
  | 'author___createdBy___internal___description'
  | 'author___createdBy___internal___fieldOwners'
  | 'author___createdBy___internal___ignoreType'
  | 'author___createdBy___internal___mediaType'
  | 'author___createdBy___internal___owner'
  | 'author___createdBy___internal___type'
  | 'author___updatedAt'
  | 'author___updatedBy___remoteTypeName'
  | 'author___updatedBy___remoteId'
  | 'author___updatedBy___stage'
  | 'author___updatedBy___createdAt'
  | 'author___updatedBy___updatedAt'
  | 'author___updatedBy___publishedAt'
  | 'author___updatedBy___name'
  | 'author___updatedBy___picture'
  | 'author___updatedBy___kind'
  | 'author___updatedBy___id'
  | 'author___updatedBy___parent___id'
  | 'author___updatedBy___parent___children'
  | 'author___updatedBy___children'
  | 'author___updatedBy___children___id'
  | 'author___updatedBy___children___children'
  | 'author___updatedBy___internal___content'
  | 'author___updatedBy___internal___contentDigest'
  | 'author___updatedBy___internal___description'
  | 'author___updatedBy___internal___fieldOwners'
  | 'author___updatedBy___internal___ignoreType'
  | 'author___updatedBy___internal___mediaType'
  | 'author___updatedBy___internal___owner'
  | 'author___updatedBy___internal___type'
  | 'author___publishedAt'
  | 'author___publishedBy___remoteTypeName'
  | 'author___publishedBy___remoteId'
  | 'author___publishedBy___stage'
  | 'author___publishedBy___createdAt'
  | 'author___publishedBy___updatedAt'
  | 'author___publishedBy___publishedAt'
  | 'author___publishedBy___name'
  | 'author___publishedBy___picture'
  | 'author___publishedBy___kind'
  | 'author___publishedBy___id'
  | 'author___publishedBy___parent___id'
  | 'author___publishedBy___parent___children'
  | 'author___publishedBy___children'
  | 'author___publishedBy___children___id'
  | 'author___publishedBy___children___children'
  | 'author___publishedBy___internal___content'
  | 'author___publishedBy___internal___contentDigest'
  | 'author___publishedBy___internal___description'
  | 'author___publishedBy___internal___fieldOwners'
  | 'author___publishedBy___internal___ignoreType'
  | 'author___publishedBy___internal___mediaType'
  | 'author___publishedBy___internal___owner'
  | 'author___publishedBy___internal___type'
  | 'author___name'
  | 'author___picture___localFile___sourceInstanceName'
  | 'author___picture___localFile___absolutePath'
  | 'author___picture___localFile___relativePath'
  | 'author___picture___localFile___extension'
  | 'author___picture___localFile___size'
  | 'author___picture___localFile___prettySize'
  | 'author___picture___localFile___modifiedTime'
  | 'author___picture___localFile___accessTime'
  | 'author___picture___localFile___changeTime'
  | 'author___picture___localFile___birthTime'
  | 'author___picture___localFile___root'
  | 'author___picture___localFile___dir'
  | 'author___picture___localFile___base'
  | 'author___picture___localFile___ext'
  | 'author___picture___localFile___name'
  | 'author___picture___localFile___relativeDirectory'
  | 'author___picture___localFile___dev'
  | 'author___picture___localFile___mode'
  | 'author___picture___localFile___nlink'
  | 'author___picture___localFile___uid'
  | 'author___picture___localFile___gid'
  | 'author___picture___localFile___rdev'
  | 'author___picture___localFile___ino'
  | 'author___picture___localFile___atimeMs'
  | 'author___picture___localFile___mtimeMs'
  | 'author___picture___localFile___ctimeMs'
  | 'author___picture___localFile___atime'
  | 'author___picture___localFile___mtime'
  | 'author___picture___localFile___ctime'
  | 'author___picture___localFile___birthtime'
  | 'author___picture___localFile___birthtimeMs'
  | 'author___picture___localFile___blksize'
  | 'author___picture___localFile___blocks'
  | 'author___picture___localFile___url'
  | 'author___picture___localFile___publicURL'
  | 'author___picture___localFile___childrenImageSharp'
  | 'author___picture___localFile___id'
  | 'author___picture___localFile___children'
  | 'author___picture___remoteTypeName'
  | 'author___picture___remoteId'
  | 'author___picture___locale'
  | 'author___picture___stage'
  | 'author___picture___createdAt'
  | 'author___picture___createdBy___remoteTypeName'
  | 'author___picture___createdBy___remoteId'
  | 'author___picture___createdBy___stage'
  | 'author___picture___createdBy___createdAt'
  | 'author___picture___createdBy___updatedAt'
  | 'author___picture___createdBy___publishedAt'
  | 'author___picture___createdBy___name'
  | 'author___picture___createdBy___picture'
  | 'author___picture___createdBy___kind'
  | 'author___picture___createdBy___id'
  | 'author___picture___createdBy___children'
  | 'author___picture___updatedAt'
  | 'author___picture___updatedBy___remoteTypeName'
  | 'author___picture___updatedBy___remoteId'
  | 'author___picture___updatedBy___stage'
  | 'author___picture___updatedBy___createdAt'
  | 'author___picture___updatedBy___updatedAt'
  | 'author___picture___updatedBy___publishedAt'
  | 'author___picture___updatedBy___name'
  | 'author___picture___updatedBy___picture'
  | 'author___picture___updatedBy___kind'
  | 'author___picture___updatedBy___id'
  | 'author___picture___updatedBy___children'
  | 'author___picture___publishedAt'
  | 'author___picture___publishedBy___remoteTypeName'
  | 'author___picture___publishedBy___remoteId'
  | 'author___picture___publishedBy___stage'
  | 'author___picture___publishedBy___createdAt'
  | 'author___picture___publishedBy___updatedAt'
  | 'author___picture___publishedBy___publishedAt'
  | 'author___picture___publishedBy___name'
  | 'author___picture___publishedBy___picture'
  | 'author___picture___publishedBy___kind'
  | 'author___picture___publishedBy___id'
  | 'author___picture___publishedBy___children'
  | 'author___picture___handle'
  | 'author___picture___fileName'
  | 'author___picture___height'
  | 'author___picture___width'
  | 'author___picture___size'
  | 'author___picture___mimeType'
  | 'author___picture___coverImagePost'
  | 'author___picture___coverImagePost___remoteTypeName'
  | 'author___picture___coverImagePost___remoteId'
  | 'author___picture___coverImagePost___stage'
  | 'author___picture___coverImagePost___createdAt'
  | 'author___picture___coverImagePost___updatedAt'
  | 'author___picture___coverImagePost___publishedAt'
  | 'author___picture___coverImagePost___title'
  | 'author___picture___coverImagePost___slug'
  | 'author___picture___coverImagePost___date'
  | 'author___picture___coverImagePost___excerpt'
  | 'author___picture___coverImagePost___tags'
  | 'author___picture___coverImagePost___id'
  | 'author___picture___coverImagePost___children'
  | 'author___picture___authorAvatar'
  | 'author___picture___authorAvatar___remoteTypeName'
  | 'author___picture___authorAvatar___remoteId'
  | 'author___picture___authorAvatar___stage'
  | 'author___picture___authorAvatar___createdAt'
  | 'author___picture___authorAvatar___updatedAt'
  | 'author___picture___authorAvatar___publishedAt'
  | 'author___picture___authorAvatar___name'
  | 'author___picture___authorAvatar___title'
  | 'author___picture___authorAvatar___biography'
  | 'author___picture___authorAvatar___posts'
  | 'author___picture___authorAvatar___id'
  | 'author___picture___authorAvatar___children'
  | 'author___picture___seoImage'
  | 'author___picture___seoImage___remoteTypeName'
  | 'author___picture___seoImage___remoteId'
  | 'author___picture___seoImage___stage'
  | 'author___picture___seoImage___createdAt'
  | 'author___picture___seoImage___updatedAt'
  | 'author___picture___seoImage___publishedAt'
  | 'author___picture___seoImage___title'
  | 'author___picture___seoImage___description'
  | 'author___picture___seoImage___keywords'
  | 'author___picture___seoImage___id'
  | 'author___picture___seoImage___children'
  | 'author___picture___url'
  | 'author___picture___id'
  | 'author___picture___parent___id'
  | 'author___picture___parent___children'
  | 'author___picture___children'
  | 'author___picture___children___id'
  | 'author___picture___children___children'
  | 'author___picture___internal___content'
  | 'author___picture___internal___contentDigest'
  | 'author___picture___internal___description'
  | 'author___picture___internal___fieldOwners'
  | 'author___picture___internal___ignoreType'
  | 'author___picture___internal___mediaType'
  | 'author___picture___internal___owner'
  | 'author___picture___internal___type'
  | 'author___title'
  | 'author___biography'
  | 'author___posts'
  | 'author___posts___remoteTypeName'
  | 'author___posts___remoteId'
  | 'author___posts___stage'
  | 'author___posts___createdAt'
  | 'author___posts___createdBy___remoteTypeName'
  | 'author___posts___createdBy___remoteId'
  | 'author___posts___createdBy___stage'
  | 'author___posts___createdBy___createdAt'
  | 'author___posts___createdBy___updatedAt'
  | 'author___posts___createdBy___publishedAt'
  | 'author___posts___createdBy___name'
  | 'author___posts___createdBy___picture'
  | 'author___posts___createdBy___kind'
  | 'author___posts___createdBy___id'
  | 'author___posts___createdBy___children'
  | 'author___posts___updatedAt'
  | 'author___posts___updatedBy___remoteTypeName'
  | 'author___posts___updatedBy___remoteId'
  | 'author___posts___updatedBy___stage'
  | 'author___posts___updatedBy___createdAt'
  | 'author___posts___updatedBy___updatedAt'
  | 'author___posts___updatedBy___publishedAt'
  | 'author___posts___updatedBy___name'
  | 'author___posts___updatedBy___picture'
  | 'author___posts___updatedBy___kind'
  | 'author___posts___updatedBy___id'
  | 'author___posts___updatedBy___children'
  | 'author___posts___publishedAt'
  | 'author___posts___publishedBy___remoteTypeName'
  | 'author___posts___publishedBy___remoteId'
  | 'author___posts___publishedBy___stage'
  | 'author___posts___publishedBy___createdAt'
  | 'author___posts___publishedBy___updatedAt'
  | 'author___posts___publishedBy___publishedAt'
  | 'author___posts___publishedBy___name'
  | 'author___posts___publishedBy___picture'
  | 'author___posts___publishedBy___kind'
  | 'author___posts___publishedBy___id'
  | 'author___posts___publishedBy___children'
  | 'author___posts___title'
  | 'author___posts___slug'
  | 'author___posts___date'
  | 'author___posts___excerpt'
  | 'author___posts___coverImage___remoteTypeName'
  | 'author___posts___coverImage___remoteId'
  | 'author___posts___coverImage___locale'
  | 'author___posts___coverImage___stage'
  | 'author___posts___coverImage___createdAt'
  | 'author___posts___coverImage___updatedAt'
  | 'author___posts___coverImage___publishedAt'
  | 'author___posts___coverImage___handle'
  | 'author___posts___coverImage___fileName'
  | 'author___posts___coverImage___height'
  | 'author___posts___coverImage___width'
  | 'author___posts___coverImage___size'
  | 'author___posts___coverImage___mimeType'
  | 'author___posts___coverImage___coverImagePost'
  | 'author___posts___coverImage___authorAvatar'
  | 'author___posts___coverImage___seoImage'
  | 'author___posts___coverImage___url'
  | 'author___posts___coverImage___id'
  | 'author___posts___coverImage___children'
  | 'author___posts___content___remoteTypeName'
  | 'author___posts___content___raw'
  | 'author___posts___content___html'
  | 'author___posts___content___markdown'
  | 'author___posts___content___text'
  | 'author___posts___tags'
  | 'author___posts___author___remoteTypeName'
  | 'author___posts___author___remoteId'
  | 'author___posts___author___stage'
  | 'author___posts___author___createdAt'
  | 'author___posts___author___updatedAt'
  | 'author___posts___author___publishedAt'
  | 'author___posts___author___name'
  | 'author___posts___author___title'
  | 'author___posts___author___biography'
  | 'author___posts___author___posts'
  | 'author___posts___author___id'
  | 'author___posts___author___children'
  | 'author___posts___seo___remoteTypeName'
  | 'author___posts___seo___remoteId'
  | 'author___posts___seo___stage'
  | 'author___posts___seo___createdAt'
  | 'author___posts___seo___updatedAt'
  | 'author___posts___seo___publishedAt'
  | 'author___posts___seo___title'
  | 'author___posts___seo___description'
  | 'author___posts___seo___keywords'
  | 'author___posts___seo___id'
  | 'author___posts___seo___children'
  | 'author___posts___id'
  | 'author___posts___parent___id'
  | 'author___posts___parent___children'
  | 'author___posts___children'
  | 'author___posts___children___id'
  | 'author___posts___children___children'
  | 'author___posts___internal___content'
  | 'author___posts___internal___contentDigest'
  | 'author___posts___internal___description'
  | 'author___posts___internal___fieldOwners'
  | 'author___posts___internal___ignoreType'
  | 'author___posts___internal___mediaType'
  | 'author___posts___internal___owner'
  | 'author___posts___internal___type'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'seo___remoteTypeName'
  | 'seo___remoteId'
  | 'seo___stage'
  | 'seo___createdAt'
  | 'seo___createdBy___remoteTypeName'
  | 'seo___createdBy___remoteId'
  | 'seo___createdBy___stage'
  | 'seo___createdBy___createdAt'
  | 'seo___createdBy___updatedAt'
  | 'seo___createdBy___publishedAt'
  | 'seo___createdBy___name'
  | 'seo___createdBy___picture'
  | 'seo___createdBy___kind'
  | 'seo___createdBy___id'
  | 'seo___createdBy___parent___id'
  | 'seo___createdBy___parent___children'
  | 'seo___createdBy___children'
  | 'seo___createdBy___children___id'
  | 'seo___createdBy___children___children'
  | 'seo___createdBy___internal___content'
  | 'seo___createdBy___internal___contentDigest'
  | 'seo___createdBy___internal___description'
  | 'seo___createdBy___internal___fieldOwners'
  | 'seo___createdBy___internal___ignoreType'
  | 'seo___createdBy___internal___mediaType'
  | 'seo___createdBy___internal___owner'
  | 'seo___createdBy___internal___type'
  | 'seo___updatedAt'
  | 'seo___updatedBy___remoteTypeName'
  | 'seo___updatedBy___remoteId'
  | 'seo___updatedBy___stage'
  | 'seo___updatedBy___createdAt'
  | 'seo___updatedBy___updatedAt'
  | 'seo___updatedBy___publishedAt'
  | 'seo___updatedBy___name'
  | 'seo___updatedBy___picture'
  | 'seo___updatedBy___kind'
  | 'seo___updatedBy___id'
  | 'seo___updatedBy___parent___id'
  | 'seo___updatedBy___parent___children'
  | 'seo___updatedBy___children'
  | 'seo___updatedBy___children___id'
  | 'seo___updatedBy___children___children'
  | 'seo___updatedBy___internal___content'
  | 'seo___updatedBy___internal___contentDigest'
  | 'seo___updatedBy___internal___description'
  | 'seo___updatedBy___internal___fieldOwners'
  | 'seo___updatedBy___internal___ignoreType'
  | 'seo___updatedBy___internal___mediaType'
  | 'seo___updatedBy___internal___owner'
  | 'seo___updatedBy___internal___type'
  | 'seo___publishedAt'
  | 'seo___publishedBy___remoteTypeName'
  | 'seo___publishedBy___remoteId'
  | 'seo___publishedBy___stage'
  | 'seo___publishedBy___createdAt'
  | 'seo___publishedBy___updatedAt'
  | 'seo___publishedBy___publishedAt'
  | 'seo___publishedBy___name'
  | 'seo___publishedBy___picture'
  | 'seo___publishedBy___kind'
  | 'seo___publishedBy___id'
  | 'seo___publishedBy___parent___id'
  | 'seo___publishedBy___parent___children'
  | 'seo___publishedBy___children'
  | 'seo___publishedBy___children___id'
  | 'seo___publishedBy___children___children'
  | 'seo___publishedBy___internal___content'
  | 'seo___publishedBy___internal___contentDigest'
  | 'seo___publishedBy___internal___description'
  | 'seo___publishedBy___internal___fieldOwners'
  | 'seo___publishedBy___internal___ignoreType'
  | 'seo___publishedBy___internal___mediaType'
  | 'seo___publishedBy___internal___owner'
  | 'seo___publishedBy___internal___type'
  | 'seo___title'
  | 'seo___description'
  | 'seo___keywords'
  | 'seo___image___localFile___sourceInstanceName'
  | 'seo___image___localFile___absolutePath'
  | 'seo___image___localFile___relativePath'
  | 'seo___image___localFile___extension'
  | 'seo___image___localFile___size'
  | 'seo___image___localFile___prettySize'
  | 'seo___image___localFile___modifiedTime'
  | 'seo___image___localFile___accessTime'
  | 'seo___image___localFile___changeTime'
  | 'seo___image___localFile___birthTime'
  | 'seo___image___localFile___root'
  | 'seo___image___localFile___dir'
  | 'seo___image___localFile___base'
  | 'seo___image___localFile___ext'
  | 'seo___image___localFile___name'
  | 'seo___image___localFile___relativeDirectory'
  | 'seo___image___localFile___dev'
  | 'seo___image___localFile___mode'
  | 'seo___image___localFile___nlink'
  | 'seo___image___localFile___uid'
  | 'seo___image___localFile___gid'
  | 'seo___image___localFile___rdev'
  | 'seo___image___localFile___ino'
  | 'seo___image___localFile___atimeMs'
  | 'seo___image___localFile___mtimeMs'
  | 'seo___image___localFile___ctimeMs'
  | 'seo___image___localFile___atime'
  | 'seo___image___localFile___mtime'
  | 'seo___image___localFile___ctime'
  | 'seo___image___localFile___birthtime'
  | 'seo___image___localFile___birthtimeMs'
  | 'seo___image___localFile___blksize'
  | 'seo___image___localFile___blocks'
  | 'seo___image___localFile___url'
  | 'seo___image___localFile___publicURL'
  | 'seo___image___localFile___childrenImageSharp'
  | 'seo___image___localFile___id'
  | 'seo___image___localFile___children'
  | 'seo___image___remoteTypeName'
  | 'seo___image___remoteId'
  | 'seo___image___locale'
  | 'seo___image___stage'
  | 'seo___image___createdAt'
  | 'seo___image___createdBy___remoteTypeName'
  | 'seo___image___createdBy___remoteId'
  | 'seo___image___createdBy___stage'
  | 'seo___image___createdBy___createdAt'
  | 'seo___image___createdBy___updatedAt'
  | 'seo___image___createdBy___publishedAt'
  | 'seo___image___createdBy___name'
  | 'seo___image___createdBy___picture'
  | 'seo___image___createdBy___kind'
  | 'seo___image___createdBy___id'
  | 'seo___image___createdBy___children'
  | 'seo___image___updatedAt'
  | 'seo___image___updatedBy___remoteTypeName'
  | 'seo___image___updatedBy___remoteId'
  | 'seo___image___updatedBy___stage'
  | 'seo___image___updatedBy___createdAt'
  | 'seo___image___updatedBy___updatedAt'
  | 'seo___image___updatedBy___publishedAt'
  | 'seo___image___updatedBy___name'
  | 'seo___image___updatedBy___picture'
  | 'seo___image___updatedBy___kind'
  | 'seo___image___updatedBy___id'
  | 'seo___image___updatedBy___children'
  | 'seo___image___publishedAt'
  | 'seo___image___publishedBy___remoteTypeName'
  | 'seo___image___publishedBy___remoteId'
  | 'seo___image___publishedBy___stage'
  | 'seo___image___publishedBy___createdAt'
  | 'seo___image___publishedBy___updatedAt'
  | 'seo___image___publishedBy___publishedAt'
  | 'seo___image___publishedBy___name'
  | 'seo___image___publishedBy___picture'
  | 'seo___image___publishedBy___kind'
  | 'seo___image___publishedBy___id'
  | 'seo___image___publishedBy___children'
  | 'seo___image___handle'
  | 'seo___image___fileName'
  | 'seo___image___height'
  | 'seo___image___width'
  | 'seo___image___size'
  | 'seo___image___mimeType'
  | 'seo___image___coverImagePost'
  | 'seo___image___coverImagePost___remoteTypeName'
  | 'seo___image___coverImagePost___remoteId'
  | 'seo___image___coverImagePost___stage'
  | 'seo___image___coverImagePost___createdAt'
  | 'seo___image___coverImagePost___updatedAt'
  | 'seo___image___coverImagePost___publishedAt'
  | 'seo___image___coverImagePost___title'
  | 'seo___image___coverImagePost___slug'
  | 'seo___image___coverImagePost___date'
  | 'seo___image___coverImagePost___excerpt'
  | 'seo___image___coverImagePost___tags'
  | 'seo___image___coverImagePost___id'
  | 'seo___image___coverImagePost___children'
  | 'seo___image___authorAvatar'
  | 'seo___image___authorAvatar___remoteTypeName'
  | 'seo___image___authorAvatar___remoteId'
  | 'seo___image___authorAvatar___stage'
  | 'seo___image___authorAvatar___createdAt'
  | 'seo___image___authorAvatar___updatedAt'
  | 'seo___image___authorAvatar___publishedAt'
  | 'seo___image___authorAvatar___name'
  | 'seo___image___authorAvatar___title'
  | 'seo___image___authorAvatar___biography'
  | 'seo___image___authorAvatar___posts'
  | 'seo___image___authorAvatar___id'
  | 'seo___image___authorAvatar___children'
  | 'seo___image___seoImage'
  | 'seo___image___seoImage___remoteTypeName'
  | 'seo___image___seoImage___remoteId'
  | 'seo___image___seoImage___stage'
  | 'seo___image___seoImage___createdAt'
  | 'seo___image___seoImage___updatedAt'
  | 'seo___image___seoImage___publishedAt'
  | 'seo___image___seoImage___title'
  | 'seo___image___seoImage___description'
  | 'seo___image___seoImage___keywords'
  | 'seo___image___seoImage___id'
  | 'seo___image___seoImage___children'
  | 'seo___image___url'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___id'
  | 'seo___parent___id'
  | 'seo___parent___parent___id'
  | 'seo___parent___parent___children'
  | 'seo___parent___children'
  | 'seo___parent___children___id'
  | 'seo___parent___children___children'
  | 'seo___parent___internal___content'
  | 'seo___parent___internal___contentDigest'
  | 'seo___parent___internal___description'
  | 'seo___parent___internal___fieldOwners'
  | 'seo___parent___internal___ignoreType'
  | 'seo___parent___internal___mediaType'
  | 'seo___parent___internal___owner'
  | 'seo___parent___internal___type'
  | 'seo___children'
  | 'seo___children___id'
  | 'seo___children___parent___id'
  | 'seo___children___parent___children'
  | 'seo___children___children'
  | 'seo___children___children___id'
  | 'seo___children___children___children'
  | 'seo___children___internal___content'
  | 'seo___children___internal___contentDigest'
  | 'seo___children___internal___description'
  | 'seo___children___internal___fieldOwners'
  | 'seo___children___internal___ignoreType'
  | 'seo___children___internal___mediaType'
  | 'seo___children___internal___owner'
  | 'seo___children___internal___type'
  | 'seo___internal___content'
  | 'seo___internal___contentDigest'
  | 'seo___internal___description'
  | 'seo___internal___fieldOwners'
  | 'seo___internal___ignoreType'
  | 'seo___internal___mediaType'
  | 'seo___internal___owner'
  | 'seo___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type GraphCms_PostFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  date?: Maybe<JsonQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  coverImage?: Maybe<GraphCms_AssetFilterInput>
  content?: Maybe<GraphCms_RichTextFilterInput>
  tags?: Maybe<StringQueryOperatorInput>
  author?: Maybe<GraphCms_AuthorFilterInput>
  seo?: Maybe<GraphCms_SeoFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type GraphCms_PostFilterListInput = {
  elemMatch?: Maybe<GraphCms_PostFilterInput>
}

export type GraphCms_PostGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_PostEdge>
  nodes: Array<GraphCms_Post>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphCms_PostSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_PostFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type GraphCms_RichText = {
  markdownNode?: Maybe<GraphCms_MarkdownNode>
  remoteTypeName: Scalars['String']
  raw: Scalars['JSON']
  html: Scalars['String']
  markdown: Scalars['String']
  text: Scalars['String']
}

export type GraphCms_RichTextFilterInput = {
  markdownNode?: Maybe<GraphCms_MarkdownNodeFilterInput>
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  raw?: Maybe<JsonQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  markdown?: Maybe<StringQueryOperatorInput>
  text?: Maybe<StringQueryOperatorInput>
}

export type GraphCms_Seo = Node & {
  remoteTypeName: Scalars['String']
  remoteId: Scalars['ID']
  stage: GraphCms_Stage
  createdAt: Scalars['JSON']
  createdBy?: Maybe<GraphCms_User>
  updatedAt: Scalars['JSON']
  updatedBy?: Maybe<GraphCms_User>
  publishedAt?: Maybe<Scalars['JSON']>
  publishedBy?: Maybe<GraphCms_User>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords: Array<Scalars['String']>
  image?: Maybe<GraphCms_Asset>
  remoteParent?: Maybe<GraphCms_SeoParent>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type GraphCms_SeoConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_SeoEdge>
  nodes: Array<GraphCms_Seo>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphCms_SeoGroupConnection>
}

export type GraphCms_SeoConnectionDistinctArgs = {
  field: GraphCms_SeoFieldsEnum
}

export type GraphCms_SeoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphCms_SeoFieldsEnum
}

export type GraphCms_SeoEdge = {
  next?: Maybe<GraphCms_Seo>
  node: GraphCms_Seo
  previous?: Maybe<GraphCms_Seo>
}

export type GraphCms_SeoFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedAt'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedAt'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'title'
  | 'description'
  | 'keywords'
  | 'image___localFile___sourceInstanceName'
  | 'image___localFile___absolutePath'
  | 'image___localFile___relativePath'
  | 'image___localFile___extension'
  | 'image___localFile___size'
  | 'image___localFile___prettySize'
  | 'image___localFile___modifiedTime'
  | 'image___localFile___accessTime'
  | 'image___localFile___changeTime'
  | 'image___localFile___birthTime'
  | 'image___localFile___root'
  | 'image___localFile___dir'
  | 'image___localFile___base'
  | 'image___localFile___ext'
  | 'image___localFile___name'
  | 'image___localFile___relativeDirectory'
  | 'image___localFile___dev'
  | 'image___localFile___mode'
  | 'image___localFile___nlink'
  | 'image___localFile___uid'
  | 'image___localFile___gid'
  | 'image___localFile___rdev'
  | 'image___localFile___ino'
  | 'image___localFile___atimeMs'
  | 'image___localFile___mtimeMs'
  | 'image___localFile___ctimeMs'
  | 'image___localFile___atime'
  | 'image___localFile___mtime'
  | 'image___localFile___ctime'
  | 'image___localFile___birthtime'
  | 'image___localFile___birthtimeMs'
  | 'image___localFile___blksize'
  | 'image___localFile___blocks'
  | 'image___localFile___url'
  | 'image___localFile___publicURL'
  | 'image___localFile___childrenImageSharp'
  | 'image___localFile___childrenImageSharp___gatsbyImageData'
  | 'image___localFile___childrenImageSharp___id'
  | 'image___localFile___childrenImageSharp___children'
  | 'image___localFile___childImageSharp___gatsbyImageData'
  | 'image___localFile___childImageSharp___id'
  | 'image___localFile___childImageSharp___children'
  | 'image___localFile___id'
  | 'image___localFile___parent___id'
  | 'image___localFile___parent___children'
  | 'image___localFile___children'
  | 'image___localFile___children___id'
  | 'image___localFile___children___children'
  | 'image___localFile___internal___content'
  | 'image___localFile___internal___contentDigest'
  | 'image___localFile___internal___description'
  | 'image___localFile___internal___fieldOwners'
  | 'image___localFile___internal___ignoreType'
  | 'image___localFile___internal___mediaType'
  | 'image___localFile___internal___owner'
  | 'image___localFile___internal___type'
  | 'image___remoteTypeName'
  | 'image___remoteId'
  | 'image___locale'
  | 'image___stage'
  | 'image___createdAt'
  | 'image___createdBy___remoteTypeName'
  | 'image___createdBy___remoteId'
  | 'image___createdBy___stage'
  | 'image___createdBy___createdAt'
  | 'image___createdBy___updatedAt'
  | 'image___createdBy___publishedAt'
  | 'image___createdBy___name'
  | 'image___createdBy___picture'
  | 'image___createdBy___kind'
  | 'image___createdBy___id'
  | 'image___createdBy___parent___id'
  | 'image___createdBy___parent___children'
  | 'image___createdBy___children'
  | 'image___createdBy___children___id'
  | 'image___createdBy___children___children'
  | 'image___createdBy___internal___content'
  | 'image___createdBy___internal___contentDigest'
  | 'image___createdBy___internal___description'
  | 'image___createdBy___internal___fieldOwners'
  | 'image___createdBy___internal___ignoreType'
  | 'image___createdBy___internal___mediaType'
  | 'image___createdBy___internal___owner'
  | 'image___createdBy___internal___type'
  | 'image___updatedAt'
  | 'image___updatedBy___remoteTypeName'
  | 'image___updatedBy___remoteId'
  | 'image___updatedBy___stage'
  | 'image___updatedBy___createdAt'
  | 'image___updatedBy___updatedAt'
  | 'image___updatedBy___publishedAt'
  | 'image___updatedBy___name'
  | 'image___updatedBy___picture'
  | 'image___updatedBy___kind'
  | 'image___updatedBy___id'
  | 'image___updatedBy___parent___id'
  | 'image___updatedBy___parent___children'
  | 'image___updatedBy___children'
  | 'image___updatedBy___children___id'
  | 'image___updatedBy___children___children'
  | 'image___updatedBy___internal___content'
  | 'image___updatedBy___internal___contentDigest'
  | 'image___updatedBy___internal___description'
  | 'image___updatedBy___internal___fieldOwners'
  | 'image___updatedBy___internal___ignoreType'
  | 'image___updatedBy___internal___mediaType'
  | 'image___updatedBy___internal___owner'
  | 'image___updatedBy___internal___type'
  | 'image___publishedAt'
  | 'image___publishedBy___remoteTypeName'
  | 'image___publishedBy___remoteId'
  | 'image___publishedBy___stage'
  | 'image___publishedBy___createdAt'
  | 'image___publishedBy___updatedAt'
  | 'image___publishedBy___publishedAt'
  | 'image___publishedBy___name'
  | 'image___publishedBy___picture'
  | 'image___publishedBy___kind'
  | 'image___publishedBy___id'
  | 'image___publishedBy___parent___id'
  | 'image___publishedBy___parent___children'
  | 'image___publishedBy___children'
  | 'image___publishedBy___children___id'
  | 'image___publishedBy___children___children'
  | 'image___publishedBy___internal___content'
  | 'image___publishedBy___internal___contentDigest'
  | 'image___publishedBy___internal___description'
  | 'image___publishedBy___internal___fieldOwners'
  | 'image___publishedBy___internal___ignoreType'
  | 'image___publishedBy___internal___mediaType'
  | 'image___publishedBy___internal___owner'
  | 'image___publishedBy___internal___type'
  | 'image___handle'
  | 'image___fileName'
  | 'image___height'
  | 'image___width'
  | 'image___size'
  | 'image___mimeType'
  | 'image___coverImagePost'
  | 'image___coverImagePost___remoteTypeName'
  | 'image___coverImagePost___remoteId'
  | 'image___coverImagePost___stage'
  | 'image___coverImagePost___createdAt'
  | 'image___coverImagePost___createdBy___remoteTypeName'
  | 'image___coverImagePost___createdBy___remoteId'
  | 'image___coverImagePost___createdBy___stage'
  | 'image___coverImagePost___createdBy___createdAt'
  | 'image___coverImagePost___createdBy___updatedAt'
  | 'image___coverImagePost___createdBy___publishedAt'
  | 'image___coverImagePost___createdBy___name'
  | 'image___coverImagePost___createdBy___picture'
  | 'image___coverImagePost___createdBy___kind'
  | 'image___coverImagePost___createdBy___id'
  | 'image___coverImagePost___createdBy___children'
  | 'image___coverImagePost___updatedAt'
  | 'image___coverImagePost___updatedBy___remoteTypeName'
  | 'image___coverImagePost___updatedBy___remoteId'
  | 'image___coverImagePost___updatedBy___stage'
  | 'image___coverImagePost___updatedBy___createdAt'
  | 'image___coverImagePost___updatedBy___updatedAt'
  | 'image___coverImagePost___updatedBy___publishedAt'
  | 'image___coverImagePost___updatedBy___name'
  | 'image___coverImagePost___updatedBy___picture'
  | 'image___coverImagePost___updatedBy___kind'
  | 'image___coverImagePost___updatedBy___id'
  | 'image___coverImagePost___updatedBy___children'
  | 'image___coverImagePost___publishedAt'
  | 'image___coverImagePost___publishedBy___remoteTypeName'
  | 'image___coverImagePost___publishedBy___remoteId'
  | 'image___coverImagePost___publishedBy___stage'
  | 'image___coverImagePost___publishedBy___createdAt'
  | 'image___coverImagePost___publishedBy___updatedAt'
  | 'image___coverImagePost___publishedBy___publishedAt'
  | 'image___coverImagePost___publishedBy___name'
  | 'image___coverImagePost___publishedBy___picture'
  | 'image___coverImagePost___publishedBy___kind'
  | 'image___coverImagePost___publishedBy___id'
  | 'image___coverImagePost___publishedBy___children'
  | 'image___coverImagePost___title'
  | 'image___coverImagePost___slug'
  | 'image___coverImagePost___date'
  | 'image___coverImagePost___excerpt'
  | 'image___coverImagePost___coverImage___remoteTypeName'
  | 'image___coverImagePost___coverImage___remoteId'
  | 'image___coverImagePost___coverImage___locale'
  | 'image___coverImagePost___coverImage___stage'
  | 'image___coverImagePost___coverImage___createdAt'
  | 'image___coverImagePost___coverImage___updatedAt'
  | 'image___coverImagePost___coverImage___publishedAt'
  | 'image___coverImagePost___coverImage___handle'
  | 'image___coverImagePost___coverImage___fileName'
  | 'image___coverImagePost___coverImage___height'
  | 'image___coverImagePost___coverImage___width'
  | 'image___coverImagePost___coverImage___size'
  | 'image___coverImagePost___coverImage___mimeType'
  | 'image___coverImagePost___coverImage___coverImagePost'
  | 'image___coverImagePost___coverImage___authorAvatar'
  | 'image___coverImagePost___coverImage___seoImage'
  | 'image___coverImagePost___coverImage___url'
  | 'image___coverImagePost___coverImage___id'
  | 'image___coverImagePost___coverImage___children'
  | 'image___coverImagePost___content___remoteTypeName'
  | 'image___coverImagePost___content___raw'
  | 'image___coverImagePost___content___html'
  | 'image___coverImagePost___content___markdown'
  | 'image___coverImagePost___content___text'
  | 'image___coverImagePost___tags'
  | 'image___coverImagePost___author___remoteTypeName'
  | 'image___coverImagePost___author___remoteId'
  | 'image___coverImagePost___author___stage'
  | 'image___coverImagePost___author___createdAt'
  | 'image___coverImagePost___author___updatedAt'
  | 'image___coverImagePost___author___publishedAt'
  | 'image___coverImagePost___author___name'
  | 'image___coverImagePost___author___title'
  | 'image___coverImagePost___author___biography'
  | 'image___coverImagePost___author___posts'
  | 'image___coverImagePost___author___id'
  | 'image___coverImagePost___author___children'
  | 'image___coverImagePost___seo___remoteTypeName'
  | 'image___coverImagePost___seo___remoteId'
  | 'image___coverImagePost___seo___stage'
  | 'image___coverImagePost___seo___createdAt'
  | 'image___coverImagePost___seo___updatedAt'
  | 'image___coverImagePost___seo___publishedAt'
  | 'image___coverImagePost___seo___title'
  | 'image___coverImagePost___seo___description'
  | 'image___coverImagePost___seo___keywords'
  | 'image___coverImagePost___seo___id'
  | 'image___coverImagePost___seo___children'
  | 'image___coverImagePost___id'
  | 'image___coverImagePost___parent___id'
  | 'image___coverImagePost___parent___children'
  | 'image___coverImagePost___children'
  | 'image___coverImagePost___children___id'
  | 'image___coverImagePost___children___children'
  | 'image___coverImagePost___internal___content'
  | 'image___coverImagePost___internal___contentDigest'
  | 'image___coverImagePost___internal___description'
  | 'image___coverImagePost___internal___fieldOwners'
  | 'image___coverImagePost___internal___ignoreType'
  | 'image___coverImagePost___internal___mediaType'
  | 'image___coverImagePost___internal___owner'
  | 'image___coverImagePost___internal___type'
  | 'image___authorAvatar'
  | 'image___authorAvatar___remoteTypeName'
  | 'image___authorAvatar___remoteId'
  | 'image___authorAvatar___stage'
  | 'image___authorAvatar___createdAt'
  | 'image___authorAvatar___createdBy___remoteTypeName'
  | 'image___authorAvatar___createdBy___remoteId'
  | 'image___authorAvatar___createdBy___stage'
  | 'image___authorAvatar___createdBy___createdAt'
  | 'image___authorAvatar___createdBy___updatedAt'
  | 'image___authorAvatar___createdBy___publishedAt'
  | 'image___authorAvatar___createdBy___name'
  | 'image___authorAvatar___createdBy___picture'
  | 'image___authorAvatar___createdBy___kind'
  | 'image___authorAvatar___createdBy___id'
  | 'image___authorAvatar___createdBy___children'
  | 'image___authorAvatar___updatedAt'
  | 'image___authorAvatar___updatedBy___remoteTypeName'
  | 'image___authorAvatar___updatedBy___remoteId'
  | 'image___authorAvatar___updatedBy___stage'
  | 'image___authorAvatar___updatedBy___createdAt'
  | 'image___authorAvatar___updatedBy___updatedAt'
  | 'image___authorAvatar___updatedBy___publishedAt'
  | 'image___authorAvatar___updatedBy___name'
  | 'image___authorAvatar___updatedBy___picture'
  | 'image___authorAvatar___updatedBy___kind'
  | 'image___authorAvatar___updatedBy___id'
  | 'image___authorAvatar___updatedBy___children'
  | 'image___authorAvatar___publishedAt'
  | 'image___authorAvatar___publishedBy___remoteTypeName'
  | 'image___authorAvatar___publishedBy___remoteId'
  | 'image___authorAvatar___publishedBy___stage'
  | 'image___authorAvatar___publishedBy___createdAt'
  | 'image___authorAvatar___publishedBy___updatedAt'
  | 'image___authorAvatar___publishedBy___publishedAt'
  | 'image___authorAvatar___publishedBy___name'
  | 'image___authorAvatar___publishedBy___picture'
  | 'image___authorAvatar___publishedBy___kind'
  | 'image___authorAvatar___publishedBy___id'
  | 'image___authorAvatar___publishedBy___children'
  | 'image___authorAvatar___name'
  | 'image___authorAvatar___picture___remoteTypeName'
  | 'image___authorAvatar___picture___remoteId'
  | 'image___authorAvatar___picture___locale'
  | 'image___authorAvatar___picture___stage'
  | 'image___authorAvatar___picture___createdAt'
  | 'image___authorAvatar___picture___updatedAt'
  | 'image___authorAvatar___picture___publishedAt'
  | 'image___authorAvatar___picture___handle'
  | 'image___authorAvatar___picture___fileName'
  | 'image___authorAvatar___picture___height'
  | 'image___authorAvatar___picture___width'
  | 'image___authorAvatar___picture___size'
  | 'image___authorAvatar___picture___mimeType'
  | 'image___authorAvatar___picture___coverImagePost'
  | 'image___authorAvatar___picture___authorAvatar'
  | 'image___authorAvatar___picture___seoImage'
  | 'image___authorAvatar___picture___url'
  | 'image___authorAvatar___picture___id'
  | 'image___authorAvatar___picture___children'
  | 'image___authorAvatar___title'
  | 'image___authorAvatar___biography'
  | 'image___authorAvatar___posts'
  | 'image___authorAvatar___posts___remoteTypeName'
  | 'image___authorAvatar___posts___remoteId'
  | 'image___authorAvatar___posts___stage'
  | 'image___authorAvatar___posts___createdAt'
  | 'image___authorAvatar___posts___updatedAt'
  | 'image___authorAvatar___posts___publishedAt'
  | 'image___authorAvatar___posts___title'
  | 'image___authorAvatar___posts___slug'
  | 'image___authorAvatar___posts___date'
  | 'image___authorAvatar___posts___excerpt'
  | 'image___authorAvatar___posts___tags'
  | 'image___authorAvatar___posts___id'
  | 'image___authorAvatar___posts___children'
  | 'image___authorAvatar___id'
  | 'image___authorAvatar___parent___id'
  | 'image___authorAvatar___parent___children'
  | 'image___authorAvatar___children'
  | 'image___authorAvatar___children___id'
  | 'image___authorAvatar___children___children'
  | 'image___authorAvatar___internal___content'
  | 'image___authorAvatar___internal___contentDigest'
  | 'image___authorAvatar___internal___description'
  | 'image___authorAvatar___internal___fieldOwners'
  | 'image___authorAvatar___internal___ignoreType'
  | 'image___authorAvatar___internal___mediaType'
  | 'image___authorAvatar___internal___owner'
  | 'image___authorAvatar___internal___type'
  | 'image___seoImage'
  | 'image___seoImage___remoteTypeName'
  | 'image___seoImage___remoteId'
  | 'image___seoImage___stage'
  | 'image___seoImage___createdAt'
  | 'image___seoImage___createdBy___remoteTypeName'
  | 'image___seoImage___createdBy___remoteId'
  | 'image___seoImage___createdBy___stage'
  | 'image___seoImage___createdBy___createdAt'
  | 'image___seoImage___createdBy___updatedAt'
  | 'image___seoImage___createdBy___publishedAt'
  | 'image___seoImage___createdBy___name'
  | 'image___seoImage___createdBy___picture'
  | 'image___seoImage___createdBy___kind'
  | 'image___seoImage___createdBy___id'
  | 'image___seoImage___createdBy___children'
  | 'image___seoImage___updatedAt'
  | 'image___seoImage___updatedBy___remoteTypeName'
  | 'image___seoImage___updatedBy___remoteId'
  | 'image___seoImage___updatedBy___stage'
  | 'image___seoImage___updatedBy___createdAt'
  | 'image___seoImage___updatedBy___updatedAt'
  | 'image___seoImage___updatedBy___publishedAt'
  | 'image___seoImage___updatedBy___name'
  | 'image___seoImage___updatedBy___picture'
  | 'image___seoImage___updatedBy___kind'
  | 'image___seoImage___updatedBy___id'
  | 'image___seoImage___updatedBy___children'
  | 'image___seoImage___publishedAt'
  | 'image___seoImage___publishedBy___remoteTypeName'
  | 'image___seoImage___publishedBy___remoteId'
  | 'image___seoImage___publishedBy___stage'
  | 'image___seoImage___publishedBy___createdAt'
  | 'image___seoImage___publishedBy___updatedAt'
  | 'image___seoImage___publishedBy___publishedAt'
  | 'image___seoImage___publishedBy___name'
  | 'image___seoImage___publishedBy___picture'
  | 'image___seoImage___publishedBy___kind'
  | 'image___seoImage___publishedBy___id'
  | 'image___seoImage___publishedBy___children'
  | 'image___seoImage___title'
  | 'image___seoImage___description'
  | 'image___seoImage___keywords'
  | 'image___seoImage___image___remoteTypeName'
  | 'image___seoImage___image___remoteId'
  | 'image___seoImage___image___locale'
  | 'image___seoImage___image___stage'
  | 'image___seoImage___image___createdAt'
  | 'image___seoImage___image___updatedAt'
  | 'image___seoImage___image___publishedAt'
  | 'image___seoImage___image___handle'
  | 'image___seoImage___image___fileName'
  | 'image___seoImage___image___height'
  | 'image___seoImage___image___width'
  | 'image___seoImage___image___size'
  | 'image___seoImage___image___mimeType'
  | 'image___seoImage___image___coverImagePost'
  | 'image___seoImage___image___authorAvatar'
  | 'image___seoImage___image___seoImage'
  | 'image___seoImage___image___url'
  | 'image___seoImage___image___id'
  | 'image___seoImage___image___children'
  | 'image___seoImage___id'
  | 'image___seoImage___parent___id'
  | 'image___seoImage___parent___children'
  | 'image___seoImage___children'
  | 'image___seoImage___children___id'
  | 'image___seoImage___children___children'
  | 'image___seoImage___internal___content'
  | 'image___seoImage___internal___contentDigest'
  | 'image___seoImage___internal___description'
  | 'image___seoImage___internal___fieldOwners'
  | 'image___seoImage___internal___ignoreType'
  | 'image___seoImage___internal___mediaType'
  | 'image___seoImage___internal___owner'
  | 'image___seoImage___internal___type'
  | 'image___url'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type GraphCms_SeoFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  image?: Maybe<GraphCms_AssetFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type GraphCms_SeoFilterListInput = {
  elemMatch?: Maybe<GraphCms_SeoFilterInput>
}

export type GraphCms_SeoGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_SeoEdge>
  nodes: Array<GraphCms_Seo>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphCms_SeoParent = GraphCms_Page | GraphCms_Post

export type GraphCms_SeoSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_SeoFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type GraphCms_Stage = 'DRAFT' | 'PUBLISHED'

export type GraphCms_StageQueryOperatorInput = {
  eq?: Maybe<GraphCms_Stage>
  ne?: Maybe<GraphCms_Stage>
  in?: Maybe<Array<Maybe<GraphCms_Stage>>>
  nin?: Maybe<Array<Maybe<GraphCms_Stage>>>
}

export type GraphCms_User = Node & {
  remoteTypeName: Scalars['String']
  remoteId: Scalars['ID']
  stage: GraphCms_Stage
  createdAt: Scalars['JSON']
  updatedAt: Scalars['JSON']
  publishedAt?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  picture?: Maybe<Scalars['String']>
  kind: GraphCms_UserKind
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type GraphCms_UserConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_UserEdge>
  nodes: Array<GraphCms_User>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphCms_UserGroupConnection>
}

export type GraphCms_UserConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum
}

export type GraphCms_UserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphCms_UserFieldsEnum
}

export type GraphCms_UserEdge = {
  next?: Maybe<GraphCms_User>
  node: GraphCms_User
  previous?: Maybe<GraphCms_User>
}

export type GraphCms_UserFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'picture'
  | 'kind'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type GraphCms_UserFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  picture?: Maybe<StringQueryOperatorInput>
  kind?: Maybe<GraphCms_UserKindQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type GraphCms_UserGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<GraphCms_UserEdge>
  nodes: Array<GraphCms_User>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphCms_UserKind = 'MEMBER' | 'PAT' | 'PUBLIC' | 'WEBHOOK'

export type GraphCms_UserKindQueryOperatorInput = {
  eq?: Maybe<GraphCms_UserKind>
  ne?: Maybe<GraphCms_UserKind>
  in?: Maybe<Array<Maybe<GraphCms_UserKind>>>
  nin?: Maybe<Array<Maybe<GraphCms_UserKind>>>
}

export type GraphCms_UserSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_UserFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>
  ne?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION'

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE'

export type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF'

export type ImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE'

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>
  fluid?: Maybe<ImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>
  gatsbyImageData: Scalars['JSON']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  avifOptions?: Maybe<AvifOptions>
  transformOptions?: Maybe<TransformOptions>
  backgroundColor?: Maybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>
  progressive?: Maybe<Scalars['Boolean']>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>
  compressionSpeed?: Maybe<Scalars['Int']>
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY'

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  graphCmsAsset?: Maybe<GraphCms_Asset>
  allGraphCmsAsset: GraphCms_AssetConnection
  graphCmsMarkdownNode?: Maybe<GraphCms_MarkdownNode>
  allGraphCmsMarkdownNode: GraphCms_MarkdownNodeConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  graphCmsUser?: Maybe<GraphCms_User>
  allGraphCmsUser: GraphCms_UserConnection
  graphCmsPost?: Maybe<GraphCms_Post>
  allGraphCmsPost: GraphCms_PostConnection
  graphCmsAuthor?: Maybe<GraphCms_Author>
  allGraphCmsAuthor: GraphCms_AuthorConnection
  graphCmsSeo?: Maybe<GraphCms_Seo>
  allGraphCmsSeo: GraphCms_SeoConnection
  graphCmsPage?: Maybe<GraphCms_Page>
  allGraphCmsPage: GraphCms_PageConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphCmsAssetArgs = {
  localFile?: Maybe<FileFilterInput>
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  handle?: Maybe<StringQueryOperatorInput>
  fileName?: Maybe<StringQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  size?: Maybe<FloatQueryOperatorInput>
  mimeType?: Maybe<StringQueryOperatorInput>
  coverImagePost?: Maybe<GraphCms_PostFilterListInput>
  authorAvatar?: Maybe<GraphCms_AuthorFilterListInput>
  seoImage?: Maybe<GraphCms_SeoFilterListInput>
  url?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllGraphCmsAssetArgs = {
  filter?: Maybe<GraphCms_AssetFilterInput>
  sort?: Maybe<GraphCms_AssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphCmsMarkdownNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllGraphCmsMarkdownNodeArgs = {
  filter?: Maybe<GraphCms_MarkdownNodeFilterInput>
  sort?: Maybe<GraphCms_MarkdownNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphCmsUserArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  picture?: Maybe<StringQueryOperatorInput>
  kind?: Maybe<GraphCms_UserKindQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllGraphCmsUserArgs = {
  filter?: Maybe<GraphCms_UserFilterInput>
  sort?: Maybe<GraphCms_UserSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphCmsPostArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  date?: Maybe<JsonQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  coverImage?: Maybe<GraphCms_AssetFilterInput>
  content?: Maybe<GraphCms_RichTextFilterInput>
  tags?: Maybe<StringQueryOperatorInput>
  author?: Maybe<GraphCms_AuthorFilterInput>
  seo?: Maybe<GraphCms_SeoFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllGraphCmsPostArgs = {
  filter?: Maybe<GraphCms_PostFilterInput>
  sort?: Maybe<GraphCms_PostSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphCmsAuthorArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  picture?: Maybe<GraphCms_AssetFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  biography?: Maybe<StringQueryOperatorInput>
  posts?: Maybe<GraphCms_PostFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllGraphCmsAuthorArgs = {
  filter?: Maybe<GraphCms_AuthorFilterInput>
  sort?: Maybe<GraphCms_AuthorSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphCmsSeoArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  image?: Maybe<GraphCms_AssetFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllGraphCmsSeoArgs = {
  filter?: Maybe<GraphCms_SeoFilterInput>
  sort?: Maybe<GraphCms_SeoSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphCmsPageArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>
  remoteId?: Maybe<IdQueryOperatorInput>
  stage?: Maybe<GraphCms_StageQueryOperatorInput>
  createdAt?: Maybe<JsonQueryOperatorInput>
  createdBy?: Maybe<GraphCms_UserFilterInput>
  coverImage?: Maybe<GraphCms_AssetFilterInput>
  updatedAt?: Maybe<JsonQueryOperatorInput>
  updatedBy?: Maybe<GraphCms_UserFilterInput>
  publishedAt?: Maybe<JsonQueryOperatorInput>
  publishedBy?: Maybe<GraphCms_UserFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  subtitle?: Maybe<StringQueryOperatorInput>
  content?: Maybe<GraphCms_RichTextFilterInput>
  seo?: Maybe<GraphCms_SeoFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllGraphCmsPageArgs = {
  filter?: Maybe<GraphCms_PageFilterInput>
  sort?: Maybe<GraphCms_PageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime'

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  id?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___endpoint'
  | 'pluginCreator___pluginOptions___locales'
  | 'pluginCreator___pluginOptions___buildMarkdownNodes'
  | 'pluginCreator___pluginOptions___downloadLocalImages'
  | 'pluginCreator___pluginOptions___fragmentsPath'
  | 'pluginCreator___pluginOptions___stages'
  | 'pluginCreator___pluginOptions___typePrefix'
  | 'pluginCreator___pluginOptions___indentedSyntax'
  | 'pluginCreator___pluginOptions___indentType'
  | 'pluginCreator___pluginOptions___indentWidth'
  | 'pluginCreator___pluginOptions___linefeed'
  | 'pluginCreator___pluginOptions___omitSourceMapUrl'
  | 'pluginCreator___pluginOptions___precision'
  | 'pluginCreator___pluginOptions___sourceComments'
  | 'pluginCreator___pluginOptions___sourceMapContents'
  | 'pluginCreator___pluginOptions___sourceMapEmbed'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___develop'
  | 'pluginCreator___pluginOptions___purgeOnly'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___exclude'
  | 'pluginCreator___pluginOptions___options___emitWarning'
  | 'pluginCreator___pluginOptions___options___failOnError'
  | 'pluginCreator___pluginOptions___options___extensions'
  | 'pluginCreator___pluginOptions___options___exclude'
  | 'pluginCreator___pluginOptions___prettier___patterns'
  | 'pluginCreator___pluginOptions___eslint___patterns'
  | 'pluginCreator___pluginOptions___alias____src'
  | 'pluginCreator___pluginOptions___alias____components'
  | 'pluginCreator___pluginOptions___alias____pages'
  | 'pluginCreator___pluginOptions___alias____templates'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___endpoint'
  | 'pluginOptions___locales'
  | 'pluginOptions___buildMarkdownNodes'
  | 'pluginOptions___downloadLocalImages'
  | 'pluginOptions___fragmentsPath'
  | 'pluginOptions___stages'
  | 'pluginOptions___typePrefix'
  | 'pluginOptions___indentedSyntax'
  | 'pluginOptions___indentType'
  | 'pluginOptions___indentWidth'
  | 'pluginOptions___linefeed'
  | 'pluginOptions___omitSourceMapUrl'
  | 'pluginOptions___precision'
  | 'pluginOptions___sourceComments'
  | 'pluginOptions___sourceMapContents'
  | 'pluginOptions___sourceMapEmbed'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___develop'
  | 'pluginOptions___purgeOnly'
  | 'pluginOptions___extensions'
  | 'pluginOptions___exclude'
  | 'pluginOptions___options___emitWarning'
  | 'pluginOptions___options___failOnError'
  | 'pluginOptions___options___extensions'
  | 'pluginOptions___options___exclude'
  | 'pluginOptions___prettier___patterns'
  | 'pluginOptions___eslint___patterns'
  | 'pluginOptions___eslint___customOptions___fix'
  | 'pluginOptions___eslint___customOptions___cache'
  | 'pluginOptions___alias____src'
  | 'pluginOptions___alias____components'
  | 'pluginOptions___alias____pages'
  | 'pluginOptions___alias____templates'
  | 'pluginOptions___fileName'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  endpoint?: Maybe<Scalars['String']>
  locales?: Maybe<Array<Maybe<Scalars['String']>>>
  buildMarkdownNodes?: Maybe<Scalars['Boolean']>
  downloadLocalImages?: Maybe<Scalars['Boolean']>
  fragmentsPath?: Maybe<Scalars['String']>
  stages?: Maybe<Array<Maybe<Scalars['String']>>>
  typePrefix?: Maybe<Scalars['String']>
  indentedSyntax?: Maybe<Scalars['Boolean']>
  indentType?: Maybe<Scalars['String']>
  indentWidth?: Maybe<Scalars['Int']>
  linefeed?: Maybe<Scalars['String']>
  omitSourceMapUrl?: Maybe<Scalars['Boolean']>
  precision?: Maybe<Scalars['Int']>
  sourceComments?: Maybe<Scalars['Boolean']>
  sourceMapContents?: Maybe<Scalars['Boolean']>
  sourceMapEmbed?: Maybe<Scalars['Boolean']>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  failOnError?: Maybe<Scalars['Boolean']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
  allExtensions?: Maybe<Scalars['Boolean']>
  develop?: Maybe<Scalars['Boolean']>
  purgeOnly?: Maybe<Array<Maybe<Scalars['String']>>>
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
  options?: Maybe<SitePluginPluginOptionsOptions>
  prettier?: Maybe<SitePluginPluginOptionsPrettier>
  eslint?: Maybe<SitePluginPluginOptionsEslint>
  alias?: Maybe<SitePluginPluginOptionsAlias>
  fileName?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsAlias = {
  _src?: Maybe<Scalars['String']>
  _components?: Maybe<Scalars['String']>
  _pages?: Maybe<Scalars['String']>
  _templates?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsAliasFilterInput = {
  _src?: Maybe<StringQueryOperatorInput>
  _components?: Maybe<StringQueryOperatorInput>
  _pages?: Maybe<StringQueryOperatorInput>
  _templates?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEslint = {
  patterns?: Maybe<Scalars['String']>
  customOptions?: Maybe<SitePluginPluginOptionsEslintCustomOptions>
}

export type SitePluginPluginOptionsEslintCustomOptions = {
  fix?: Maybe<Scalars['Boolean']>
  cache?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsEslintCustomOptionsFilterInput = {
  fix?: Maybe<BooleanQueryOperatorInput>
  cache?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsEslintFilterInput = {
  patterns?: Maybe<StringQueryOperatorInput>
  customOptions?: Maybe<SitePluginPluginOptionsEslintCustomOptionsFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  endpoint?: Maybe<StringQueryOperatorInput>
  locales?: Maybe<StringQueryOperatorInput>
  buildMarkdownNodes?: Maybe<BooleanQueryOperatorInput>
  downloadLocalImages?: Maybe<BooleanQueryOperatorInput>
  fragmentsPath?: Maybe<StringQueryOperatorInput>
  stages?: Maybe<StringQueryOperatorInput>
  typePrefix?: Maybe<StringQueryOperatorInput>
  indentedSyntax?: Maybe<BooleanQueryOperatorInput>
  indentType?: Maybe<StringQueryOperatorInput>
  indentWidth?: Maybe<IntQueryOperatorInput>
  linefeed?: Maybe<StringQueryOperatorInput>
  omitSourceMapUrl?: Maybe<BooleanQueryOperatorInput>
  precision?: Maybe<IntQueryOperatorInput>
  sourceComments?: Maybe<BooleanQueryOperatorInput>
  sourceMapContents?: Maybe<BooleanQueryOperatorInput>
  sourceMapEmbed?: Maybe<BooleanQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  develop?: Maybe<BooleanQueryOperatorInput>
  purgeOnly?: Maybe<StringQueryOperatorInput>
  extensions?: Maybe<StringQueryOperatorInput>
  exclude?: Maybe<StringQueryOperatorInput>
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>
  prettier?: Maybe<SitePluginPluginOptionsPrettierFilterInput>
  eslint?: Maybe<SitePluginPluginOptionsEslintFilterInput>
  alias?: Maybe<SitePluginPluginOptionsAliasFilterInput>
  fileName?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsOptions = {
  emitWarning?: Maybe<Scalars['Boolean']>
  failOnError?: Maybe<Scalars['Boolean']>
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsOptionsFilterInput = {
  emitWarning?: Maybe<BooleanQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  extensions?: Maybe<StringQueryOperatorInput>
  exclude?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPrettier = {
  patterns?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsPrettierFilterInput = {
  patterns?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
}

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>
}

export type AllCoursePageQueryVariables = Exact<{ [key: string]: never }>

export type AllCoursePageQuery = {
  allGraphCmsPage: {
    edges: Array<{ node: Pick<GraphCms_Page, 'slug' | 'title'> }>
  }
}

export type Site_Metadata_QueryQueryVariables = Exact<{ [key: string]: never }>

export type Site_Metadata_QueryQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>>
  }>
}

export type AboutPageAssetQueryQueryVariables = Exact<{ [key: string]: never }>

export type AboutPageAssetQueryQuery = {
  graphCmsAsset?: Maybe<Pick<GraphCms_Asset, 'gatsbyImageData'>>
}

export type BlogRollQueryQueryVariables = Exact<{ [key: string]: never }>

export type BlogRollQueryQuery = {
  allGraphCmsPost: {
    nodes: Array<
      Pick<GraphCms_Post, 'id' | 'excerpt' | 'date' | 'slug' | 'title'> & {
        coverImage?: Maybe<Pick<GraphCms_Asset, 'url'>>
      }
    >
  }
}

export type IndexPageAssetQueryQueryVariables = Exact<{ [key: string]: never }>

export type IndexPageAssetQueryQuery = {
  graphCmsAsset?: Maybe<Pick<GraphCms_Asset, 'gatsbyImageData'>>
}

export type BlogPostByIdQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type BlogPostByIdQuery = {
  graphCmsPost?: Maybe<
    Pick<GraphCms_Post, 'id' | 'date' | 'slug' | 'title' | 'tags'> & {
      content?: Maybe<Pick<GraphCms_RichText, 'html'>>
      coverImage?: Maybe<Pick<GraphCms_Asset, 'url'>>
    }
  >
}

export type CoursePageByIdQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type CoursePageByIdQuery = {
  graphCmsPage?: Maybe<
    Pick<GraphCms_Page, 'title'> & {
      content: Pick<GraphCms_RichText, 'html'>
      coverImage?: Maybe<Pick<GraphCms_Asset, 'url'>>
    }
  >
}

export type GatsbyImageSharpFixedFragment = Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: ImageSharpFluid['presentationHeight']
  maxWidth: ImageSharpFluid['presentationWidth']
}

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutionsFragment = Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizesFragment = Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<
  ImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<
  ImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>
