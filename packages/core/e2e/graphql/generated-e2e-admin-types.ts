/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Money: number;
  Upload: any;
};

export type AddFulfillmentToOrderResult = CreateFulfillmentError | EmptyOrderLineSelectionError | Fulfillment | FulfillmentStateTransitionError | InsufficientStockOnHandError | InvalidFulfillmentHandlerError | ItemsAlreadyFulfilledError;

export type AddItemInput = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type AddItemToDraftOrderInput = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type AddManualPaymentToOrderResult = ManualPaymentStateError | Order;

export type AddNoteToCustomerInput = {
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  note: Scalars['String'];
};

export type AddNoteToOrderInput = {
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  note: Scalars['String'];
};

export type Address = Node & {
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Country;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AdjustDraftOrderLineInput = {
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type Adjustment = {
  adjustmentSource: Scalars['String'];
  amount: Scalars['Money'];
  data?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  type: AdjustmentType;
};

export enum AdjustmentType {
  DISTRIBUTED_ORDER_PROMOTION = 'DISTRIBUTED_ORDER_PROMOTION',
  OTHER = 'OTHER',
  PROMOTION = 'PROMOTION'
}

export type Administrator = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type AdministratorFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type AdministratorList = PaginatedList & {
  items: Array<Administrator>;
  totalItems: Scalars['Int'];
};

export type AdministratorListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AdministratorFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AdministratorSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type AdministratorPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
};

export type AdministratorRefundInput = {
  paymentId: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
};

export type AdministratorSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Allocation = Node & StockMovement & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

/** Returned if an attempting to refund an OrderItem which has already been refunded */
export type AlreadyRefundedError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  refundId: Scalars['ID'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Asset = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  fileSize: Scalars['Int'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  preview: Scalars['String'];
  source: Scalars['String'];
  tags: Array<Tag>;
  type: AssetType;
  updatedAt: Scalars['DateTime'];
  width: Scalars['Int'];
};

export type AssetFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  fileSize?: InputMaybe<NumberOperators>;
  height?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  mimeType?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  preview?: InputMaybe<StringOperators>;
  source?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  width?: InputMaybe<NumberOperators>;
};

export type AssetList = PaginatedList & {
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export type AssetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AssetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AssetSortParameter>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tagsOperator?: InputMaybe<LogicalOperator>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type AssetSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  fileSize?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  preview?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum AssetType {
  BINARY = 'BINARY',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

export type AssignAssetsToChannelInput = {
  assetIds: Array<Scalars['ID']>;
  channelId: Scalars['ID'];
};

export type AssignCollectionsToChannelInput = {
  channelId: Scalars['ID'];
  collectionIds: Array<Scalars['ID']>;
};

export type AssignFacetsToChannelInput = {
  channelId: Scalars['ID'];
  facetIds: Array<Scalars['ID']>;
};

export type AssignPaymentMethodsToChannelInput = {
  channelId: Scalars['ID'];
  paymentMethodIds: Array<Scalars['ID']>;
};

export type AssignProductVariantsToChannelInput = {
  channelId: Scalars['ID'];
  priceFactor?: InputMaybe<Scalars['Float']>;
  productVariantIds: Array<Scalars['ID']>;
};

export type AssignProductsToChannelInput = {
  channelId: Scalars['ID'];
  priceFactor?: InputMaybe<Scalars['Float']>;
  productIds: Array<Scalars['ID']>;
};

export type AssignPromotionsToChannelInput = {
  channelId: Scalars['ID'];
  promotionIds: Array<Scalars['ID']>;
};

export type AssignShippingMethodsToChannelInput = {
  channelId: Scalars['ID'];
  shippingMethodIds: Array<Scalars['ID']>;
};

export type AssignStockLocationsToChannelInput = {
  channelId: Scalars['ID'];
  stockLocationIds: Array<Scalars['ID']>;
};

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  strategy: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError;

export type BooleanCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
  inList: Scalars['Boolean'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

/** Returned if an attempting to cancel lines from an Order which is still active */
export type CancelActiveOrderError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  orderState: Scalars['String'];
};

export type CancelOrderInput = {
  /** Specify whether the shipping charges should also be cancelled. Defaults to false */
  cancelShipping?: InputMaybe<Scalars['Boolean']>;
  /** Optionally specify which OrderLines to cancel. If not provided, all OrderLines will be cancelled */
  lines?: InputMaybe<Array<OrderLineInput>>;
  /** The id of the order to be cancelled */
  orderId: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
};

export type CancelOrderResult = CancelActiveOrderError | EmptyOrderLineSelectionError | MultipleOrderError | Order | OrderStateTransitionError | QuantityTooGreatError;

/** Returned if the Payment cancellation fails */
export type CancelPaymentError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

export type CancelPaymentResult = CancelPaymentError | Payment | PaymentStateTransitionError;

export type Cancellation = Node & StockMovement & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type Channel = Node & {
  availableCurrencyCodes: Array<CurrencyCode>;
  availableLanguageCodes?: Maybe<Array<LanguageCode>>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  defaultCurrencyCode: CurrencyCode;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID'];
  /** Not yet used - will be implemented in a future release. */
  outOfStockThreshold?: Maybe<Scalars['Int']>;
  pricesIncludeTax: Scalars['Boolean'];
  seller?: Maybe<Seller>;
  token: Scalars['String'];
  /** Not yet used - will be implemented in a future release. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
};

/**
 * Returned when the default LanguageCode of a Channel is no longer found in the `availableLanguages`
 * of the GlobalSettings
 */
export type ChannelDefaultLanguageError = ErrorResult & {
  channelCode: Scalars['String'];
  errorCode: ErrorCode;
  language: Scalars['String'];
  message: Scalars['String'];
};

export type ChannelFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  defaultCurrencyCode?: InputMaybe<StringOperators>;
  defaultLanguageCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  outOfStockThreshold?: InputMaybe<NumberOperators>;
  pricesIncludeTax?: InputMaybe<BooleanOperators>;
  token?: InputMaybe<StringOperators>;
  trackInventory?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ChannelList = PaginatedList & {
  items: Array<Channel>;
  totalItems: Scalars['Int'];
};

export type ChannelListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ChannelFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ChannelSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ChannelSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  outOfStockThreshold?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Collection = Node & {
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID'];
  inheritFilters: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  parent?: Maybe<Collection>;
  parentId: Scalars['ID'];
  position: Scalars['Int'];
  productVariants: ProductVariantList;
  slug: Scalars['String'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CollectionFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  inheritFilters?: InputMaybe<BooleanOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  position?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
  topLevelOnly?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  collection: Collection;
  count: Scalars['Int'];
};

export type CollectionSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ConfigArg = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigArgDefinition = {
  defaultValue?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String'];
};

export type ConfigurableOperation = {
  args: Array<ConfigArg>;
  code: Scalars['String'];
};

export type ConfigurableOperationDefinition = {
  args: Array<ConfigArgDefinition>;
  code: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String'];
};

export type Coordinate = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CoordinateInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Country = Node & Region & {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CountryFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CountryList = PaginatedList & {
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CountryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CountrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CountrySortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CountryTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  limit: Scalars['Int'];
  message: Scalars['String'];
};

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type CreateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  roleIds: Array<Scalars['ID']>;
};

export type CreateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  file: Scalars['Upload'];
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateAssetResult = Asset | MimeTypeError;

export type CreateChannelInput = {
  availableCurrencyCodes?: InputMaybe<Array<CurrencyCode>>;
  availableLanguageCodes?: InputMaybe<Array<LanguageCode>>;
  code: Scalars['String'];
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode?: InputMaybe<CurrencyCode>;
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultCurrencyCode?: InputMaybe<CurrencyCode>;
  defaultLanguageCode: LanguageCode;
  defaultShippingZoneId: Scalars['ID'];
  defaultTaxZoneId: Scalars['ID'];
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  pricesIncludeTax: Scalars['Boolean'];
  sellerId?: InputMaybe<Scalars['ID']>;
  token: Scalars['String'];
  trackInventory?: InputMaybe<Scalars['Boolean']>;
};

export type CreateChannelResult = Channel | LanguageNotAvailableError;

export type CreateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  filters: Array<ConfigurableOperationInput>;
  inheritFilters?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  parentId?: InputMaybe<Scalars['ID']>;
  translations: Array<CreateCollectionTranslationInput>;
};

export type CreateCollectionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CreateCountryInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  translations: Array<CountryTranslationInput>;
};

export type CreateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  customerIds?: InputMaybe<Array<Scalars['ID']>>;
  name: Scalars['String'];
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerResult = Customer | EmailAddressConflictError;

export type CreateFacetInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  isPrivate: Scalars['Boolean'];
  translations: Array<FacetTranslationInput>;
  values?: InputMaybe<Array<CreateFacetValueWithFacetInput>>;
};

export type CreateFacetValueInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  facetId: Scalars['ID'];
  translations: Array<FacetValueTranslationInput>;
};

export type CreateFacetValueWithFacetInput = {
  code: Scalars['String'];
  translations: Array<FacetValueTranslationInput>;
};

/** Returned if an error is thrown in a FulfillmentHandler's createFulfillment method */
export type CreateFulfillmentError = ErrorResult & {
  errorCode: ErrorCode;
  fulfillmentHandlerError: Scalars['String'];
  message: Scalars['String'];
};

export type CreateGroupOptionInput = {
  code: Scalars['String'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperationInput;
  translations: Array<PaymentMethodTranslationInput>;
};

export type CreateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  translations: Array<ProductTranslationInput>;
};

export type CreateProductOptionGroupInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  options: Array<CreateGroupOptionInput>;
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductOptionInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  productOptionGroupId: Scalars['ID'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  optionIds?: InputMaybe<Array<Scalars['ID']>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Money']>;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  stockLevels?: InputMaybe<Array<StockLevelInput>>;
  stockOnHand?: InputMaybe<Scalars['Int']>;
  taxCategoryId?: InputMaybe<Scalars['ID']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations: Array<ProductVariantTranslationInput>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']>;
};

export type CreateProductVariantOptionInput = {
  code: Scalars['String'];
  optionGroupId: Scalars['ID'];
  translations: Array<ProductOptionTranslationInput>;
};

export type CreatePromotionInput = {
  actions: Array<ConfigurableOperationInput>;
  conditions: Array<ConfigurableOperationInput>;
  couponCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  endsAt?: InputMaybe<Scalars['DateTime']>;
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']>;
  startsAt?: InputMaybe<Scalars['DateTime']>;
  translations: Array<PromotionTranslationInput>;
};

export type CreatePromotionResult = MissingConditionsError | Promotion;

export type CreateProvinceInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  translations: Array<ProvinceTranslationInput>;
};

export type CreateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']>>;
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
};

export type CreateSellerInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
};

export type CreateShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  fulfillmentHandler: Scalars['String'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type CreateStockLocationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateTagInput = {
  value: Scalars['String'];
};

export type CreateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type CreateTaxRateInput = {
  categoryId: Scalars['ID'];
  customFields?: InputMaybe<Scalars['JSON']>;
  customerGroupId?: InputMaybe<Scalars['ID']>;
  enabled: Scalars['Boolean'];
  name: Scalars['String'];
  value: Scalars['Float'];
  zoneId: Scalars['ID'];
};

export type CreateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  memberIds?: InputMaybe<Array<Scalars['ID']>>;
  name: Scalars['String'];
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  AED = 'AED',
  /** Afghan afghani */
  AFN = 'AFN',
  /** Albanian lek */
  ALL = 'ALL',
  /** Armenian dram */
  AMD = 'AMD',
  /** Netherlands Antillean guilder */
  ANG = 'ANG',
  /** Angolan kwanza */
  AOA = 'AOA',
  /** Argentine peso */
  ARS = 'ARS',
  /** Australian dollar */
  AUD = 'AUD',
  /** Aruban florin */
  AWG = 'AWG',
  /** Azerbaijani manat */
  AZN = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  BAM = 'BAM',
  /** Barbados dollar */
  BBD = 'BBD',
  /** Bangladeshi taka */
  BDT = 'BDT',
  /** Bulgarian lev */
  BGN = 'BGN',
  /** Bahraini dinar */
  BHD = 'BHD',
  /** Burundian franc */
  BIF = 'BIF',
  /** Bermudian dollar */
  BMD = 'BMD',
  /** Brunei dollar */
  BND = 'BND',
  /** Boliviano */
  BOB = 'BOB',
  /** Brazilian real */
  BRL = 'BRL',
  /** Bahamian dollar */
  BSD = 'BSD',
  /** Bhutanese ngultrum */
  BTN = 'BTN',
  /** Botswana pula */
  BWP = 'BWP',
  /** Belarusian ruble */
  BYN = 'BYN',
  /** Belize dollar */
  BZD = 'BZD',
  /** Canadian dollar */
  CAD = 'CAD',
  /** Congolese franc */
  CDF = 'CDF',
  /** Swiss franc */
  CHF = 'CHF',
  /** Chilean peso */
  CLP = 'CLP',
  /** Renminbi (Chinese) yuan */
  CNY = 'CNY',
  /** Colombian peso */
  COP = 'COP',
  /** Costa Rican colon */
  CRC = 'CRC',
  /** Cuban convertible peso */
  CUC = 'CUC',
  /** Cuban peso */
  CUP = 'CUP',
  /** Cape Verde escudo */
  CVE = 'CVE',
  /** Czech koruna */
  CZK = 'CZK',
  /** Djiboutian franc */
  DJF = 'DJF',
  /** Danish krone */
  DKK = 'DKK',
  /** Dominican peso */
  DOP = 'DOP',
  /** Algerian dinar */
  DZD = 'DZD',
  /** Egyptian pound */
  EGP = 'EGP',
  /** Eritrean nakfa */
  ERN = 'ERN',
  /** Ethiopian birr */
  ETB = 'ETB',
  /** Euro */
  EUR = 'EUR',
  /** Fiji dollar */
  FJD = 'FJD',
  /** Falkland Islands pound */
  FKP = 'FKP',
  /** Pound sterling */
  GBP = 'GBP',
  /** Georgian lari */
  GEL = 'GEL',
  /** Ghanaian cedi */
  GHS = 'GHS',
  /** Gibraltar pound */
  GIP = 'GIP',
  /** Gambian dalasi */
  GMD = 'GMD',
  /** Guinean franc */
  GNF = 'GNF',
  /** Guatemalan quetzal */
  GTQ = 'GTQ',
  /** Guyanese dollar */
  GYD = 'GYD',
  /** Hong Kong dollar */
  HKD = 'HKD',
  /** Honduran lempira */
  HNL = 'HNL',
  /** Croatian kuna */
  HRK = 'HRK',
  /** Haitian gourde */
  HTG = 'HTG',
  /** Hungarian forint */
  HUF = 'HUF',
  /** Indonesian rupiah */
  IDR = 'IDR',
  /** Israeli new shekel */
  ILS = 'ILS',
  /** Indian rupee */
  INR = 'INR',
  /** Iraqi dinar */
  IQD = 'IQD',
  /** Iranian rial */
  IRR = 'IRR',
  /** Icelandic króna */
  ISK = 'ISK',
  /** Jamaican dollar */
  JMD = 'JMD',
  /** Jordanian dinar */
  JOD = 'JOD',
  /** Japanese yen */
  JPY = 'JPY',
  /** Kenyan shilling */
  KES = 'KES',
  /** Kyrgyzstani som */
  KGS = 'KGS',
  /** Cambodian riel */
  KHR = 'KHR',
  /** Comoro franc */
  KMF = 'KMF',
  /** North Korean won */
  KPW = 'KPW',
  /** South Korean won */
  KRW = 'KRW',
  /** Kuwaiti dinar */
  KWD = 'KWD',
  /** Cayman Islands dollar */
  KYD = 'KYD',
  /** Kazakhstani tenge */
  KZT = 'KZT',
  /** Lao kip */
  LAK = 'LAK',
  /** Lebanese pound */
  LBP = 'LBP',
  /** Sri Lankan rupee */
  LKR = 'LKR',
  /** Liberian dollar */
  LRD = 'LRD',
  /** Lesotho loti */
  LSL = 'LSL',
  /** Libyan dinar */
  LYD = 'LYD',
  /** Moroccan dirham */
  MAD = 'MAD',
  /** Moldovan leu */
  MDL = 'MDL',
  /** Malagasy ariary */
  MGA = 'MGA',
  /** Macedonian denar */
  MKD = 'MKD',
  /** Myanmar kyat */
  MMK = 'MMK',
  /** Mongolian tögrög */
  MNT = 'MNT',
  /** Macanese pataca */
  MOP = 'MOP',
  /** Mauritanian ouguiya */
  MRU = 'MRU',
  /** Mauritian rupee */
  MUR = 'MUR',
  /** Maldivian rufiyaa */
  MVR = 'MVR',
  /** Malawian kwacha */
  MWK = 'MWK',
  /** Mexican peso */
  MXN = 'MXN',
  /** Malaysian ringgit */
  MYR = 'MYR',
  /** Mozambican metical */
  MZN = 'MZN',
  /** Namibian dollar */
  NAD = 'NAD',
  /** Nigerian naira */
  NGN = 'NGN',
  /** Nicaraguan córdoba */
  NIO = 'NIO',
  /** Norwegian krone */
  NOK = 'NOK',
  /** Nepalese rupee */
  NPR = 'NPR',
  /** New Zealand dollar */
  NZD = 'NZD',
  /** Omani rial */
  OMR = 'OMR',
  /** Panamanian balboa */
  PAB = 'PAB',
  /** Peruvian sol */
  PEN = 'PEN',
  /** Papua New Guinean kina */
  PGK = 'PGK',
  /** Philippine peso */
  PHP = 'PHP',
  /** Pakistani rupee */
  PKR = 'PKR',
  /** Polish złoty */
  PLN = 'PLN',
  /** Paraguayan guaraní */
  PYG = 'PYG',
  /** Qatari riyal */
  QAR = 'QAR',
  /** Romanian leu */
  RON = 'RON',
  /** Serbian dinar */
  RSD = 'RSD',
  /** Russian ruble */
  RUB = 'RUB',
  /** Rwandan franc */
  RWF = 'RWF',
  /** Saudi riyal */
  SAR = 'SAR',
  /** Solomon Islands dollar */
  SBD = 'SBD',
  /** Seychelles rupee */
  SCR = 'SCR',
  /** Sudanese pound */
  SDG = 'SDG',
  /** Swedish krona/kronor */
  SEK = 'SEK',
  /** Singapore dollar */
  SGD = 'SGD',
  /** Saint Helena pound */
  SHP = 'SHP',
  /** Sierra Leonean leone */
  SLL = 'SLL',
  /** Somali shilling */
  SOS = 'SOS',
  /** Surinamese dollar */
  SRD = 'SRD',
  /** South Sudanese pound */
  SSP = 'SSP',
  /** São Tomé and Príncipe dobra */
  STN = 'STN',
  /** Salvadoran colón */
  SVC = 'SVC',
  /** Syrian pound */
  SYP = 'SYP',
  /** Swazi lilangeni */
  SZL = 'SZL',
  /** Thai baht */
  THB = 'THB',
  /** Tajikistani somoni */
  TJS = 'TJS',
  /** Turkmenistan manat */
  TMT = 'TMT',
  /** Tunisian dinar */
  TND = 'TND',
  /** Tongan paʻanga */
  TOP = 'TOP',
  /** Turkish lira */
  TRY = 'TRY',
  /** Trinidad and Tobago dollar */
  TTD = 'TTD',
  /** New Taiwan dollar */
  TWD = 'TWD',
  /** Tanzanian shilling */
  TZS = 'TZS',
  /** Ukrainian hryvnia */
  UAH = 'UAH',
  /** Ugandan shilling */
  UGX = 'UGX',
  /** United States dollar */
  USD = 'USD',
  /** Uruguayan peso */
  UYU = 'UYU',
  /** Uzbekistan som */
  UZS = 'UZS',
  /** Venezuelan bolívar soberano */
  VES = 'VES',
  /** Vietnamese đồng */
  VND = 'VND',
  /** Vanuatu vatu */
  VUV = 'VUV',
  /** Samoan tala */
  WST = 'WST',
  /** CFA franc BEAC */
  XAF = 'XAF',
  /** East Caribbean dollar */
  XCD = 'XCD',
  /** CFA franc BCEAO */
  XOF = 'XOF',
  /** CFP franc (franc Pacifique) */
  XPF = 'XPF',
  /** Yemeni rial */
  YER = 'YER',
  /** South African rand */
  ZAR = 'ZAR',
  /** Zambian kwacha */
  ZMW = 'ZMW',
  /** Zimbabwean dollar */
  ZWL = 'ZWL'
}

export type CurrentUser = {
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
};

export type CurrentUserChannel = {
  code: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  token: Scalars['String'];
};

export type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | LocaleTextCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | TextCustomFieldConfig;

export type CustomFields = {
  Address: Array<CustomFieldConfig>;
  Administrator: Array<CustomFieldConfig>;
  Asset: Array<CustomFieldConfig>;
  Channel: Array<CustomFieldConfig>;
  Collection: Array<CustomFieldConfig>;
  Customer: Array<CustomFieldConfig>;
  CustomerGroup: Array<CustomFieldConfig>;
  Facet: Array<CustomFieldConfig>;
  FacetValue: Array<CustomFieldConfig>;
  Fulfillment: Array<CustomFieldConfig>;
  GlobalSettings: Array<CustomFieldConfig>;
  Order: Array<CustomFieldConfig>;
  OrderLine: Array<CustomFieldConfig>;
  PaymentMethod: Array<CustomFieldConfig>;
  Product: Array<CustomFieldConfig>;
  ProductOption: Array<CustomFieldConfig>;
  ProductOptionGroup: Array<CustomFieldConfig>;
  ProductVariant: Array<CustomFieldConfig>;
  Promotion: Array<CustomFieldConfig>;
  Region: Array<CustomFieldConfig>;
  Seller: Array<CustomFieldConfig>;
  ShippingMethod: Array<CustomFieldConfig>;
  StockLocation: Array<CustomFieldConfig>;
  TaxCategory: Array<CustomFieldConfig>;
  TaxRate: Array<CustomFieldConfig>;
  User: Array<CustomFieldConfig>;
  Zone: Array<CustomFieldConfig>;
};

export type Customer = Node & {
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  groups: Array<CustomerGroup>;
  history: HistoryEntryList;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};


export type CustomerHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  postalCode?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroup = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customers: CustomerList;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerGroupFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroupList = PaginatedList & {
  items: Array<CustomerGroup>;
  totalItems: Scalars['Int'];
};

export type CustomerGroupListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerGroupFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerGroupSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CustomerGroupSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CustomerList = PaginatedList & {
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CustomerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
  inList: Scalars['DateTime'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type DateRange = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type DeleteAssetInput = {
  assetId: Scalars['ID'];
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']>;
  force?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteAssetsInput = {
  assetIds: Array<Scalars['ID']>;
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']>;
  force?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteStockLocationInput = {
  id: Scalars['ID'];
  transferToLocationId?: InputMaybe<Scalars['ID']>;
};

export type DeletionResponse = {
  message?: Maybe<Scalars['String']>;
  result: DeletionResult;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  DELETED = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NOT_DELETED = 'NOT_DELETED'
}

export type Discount = {
  adjustmentSource: Scalars['String'];
  amount: Scalars['Money'];
  amountWithTax: Scalars['Money'];
  description: Scalars['String'];
  type: AdjustmentType;
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if no OrderLines have been specified for the operation */
export type EmptyOrderLineSelectionError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export enum ErrorCode {
  ALREADY_REFUNDED_ERROR = 'ALREADY_REFUNDED_ERROR',
  CANCEL_ACTIVE_ORDER_ERROR = 'CANCEL_ACTIVE_ORDER_ERROR',
  CANCEL_PAYMENT_ERROR = 'CANCEL_PAYMENT_ERROR',
  CHANNEL_DEFAULT_LANGUAGE_ERROR = 'CHANNEL_DEFAULT_LANGUAGE_ERROR',
  COUPON_CODE_EXPIRED_ERROR = 'COUPON_CODE_EXPIRED_ERROR',
  COUPON_CODE_INVALID_ERROR = 'COUPON_CODE_INVALID_ERROR',
  COUPON_CODE_LIMIT_ERROR = 'COUPON_CODE_LIMIT_ERROR',
  CREATE_FULFILLMENT_ERROR = 'CREATE_FULFILLMENT_ERROR',
  EMAIL_ADDRESS_CONFLICT_ERROR = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  EMPTY_ORDER_LINE_SELECTION_ERROR = 'EMPTY_ORDER_LINE_SELECTION_ERROR',
  FACET_IN_USE_ERROR = 'FACET_IN_USE_ERROR',
  FULFILLMENT_STATE_TRANSITION_ERROR = 'FULFILLMENT_STATE_TRANSITION_ERROR',
  GUEST_CHECKOUT_ERROR = 'GUEST_CHECKOUT_ERROR',
  INELIGIBLE_SHIPPING_METHOD_ERROR = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  INSUFFICIENT_STOCK_ERROR = 'INSUFFICIENT_STOCK_ERROR',
  INSUFFICIENT_STOCK_ON_HAND_ERROR = 'INSUFFICIENT_STOCK_ON_HAND_ERROR',
  INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
  INVALID_FULFILLMENT_HANDLER_ERROR = 'INVALID_FULFILLMENT_HANDLER_ERROR',
  ITEMS_ALREADY_FULFILLED_ERROR = 'ITEMS_ALREADY_FULFILLED_ERROR',
  LANGUAGE_NOT_AVAILABLE_ERROR = 'LANGUAGE_NOT_AVAILABLE_ERROR',
  MANUAL_PAYMENT_STATE_ERROR = 'MANUAL_PAYMENT_STATE_ERROR',
  MIME_TYPE_ERROR = 'MIME_TYPE_ERROR',
  MISSING_CONDITIONS_ERROR = 'MISSING_CONDITIONS_ERROR',
  MULTIPLE_ORDER_ERROR = 'MULTIPLE_ORDER_ERROR',
  NATIVE_AUTH_STRATEGY_ERROR = 'NATIVE_AUTH_STRATEGY_ERROR',
  NEGATIVE_QUANTITY_ERROR = 'NEGATIVE_QUANTITY_ERROR',
  NOTHING_TO_REFUND_ERROR = 'NOTHING_TO_REFUND_ERROR',
  NO_ACTIVE_ORDER_ERROR = 'NO_ACTIVE_ORDER_ERROR',
  NO_CHANGES_SPECIFIED_ERROR = 'NO_CHANGES_SPECIFIED_ERROR',
  ORDER_LIMIT_ERROR = 'ORDER_LIMIT_ERROR',
  ORDER_MODIFICATION_ERROR = 'ORDER_MODIFICATION_ERROR',
  ORDER_MODIFICATION_STATE_ERROR = 'ORDER_MODIFICATION_STATE_ERROR',
  ORDER_STATE_TRANSITION_ERROR = 'ORDER_STATE_TRANSITION_ERROR',
  PAYMENT_METHOD_MISSING_ERROR = 'PAYMENT_METHOD_MISSING_ERROR',
  PAYMENT_ORDER_MISMATCH_ERROR = 'PAYMENT_ORDER_MISMATCH_ERROR',
  PAYMENT_STATE_TRANSITION_ERROR = 'PAYMENT_STATE_TRANSITION_ERROR',
  PRODUCT_OPTION_IN_USE_ERROR = 'PRODUCT_OPTION_IN_USE_ERROR',
  QUANTITY_TOO_GREAT_ERROR = 'QUANTITY_TOO_GREAT_ERROR',
  REFUND_ORDER_STATE_ERROR = 'REFUND_ORDER_STATE_ERROR',
  REFUND_PAYMENT_ID_MISSING_ERROR = 'REFUND_PAYMENT_ID_MISSING_ERROR',
  REFUND_STATE_TRANSITION_ERROR = 'REFUND_STATE_TRANSITION_ERROR',
  SETTLE_PAYMENT_ERROR = 'SETTLE_PAYMENT_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Facet = Node & {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime'];
  /** Returns a paginated, sortable, filterable list of the Facet's values. Added in v2.1.0. */
  valueList: FacetValueList;
  values: Array<FacetValue>;
};


export type FacetValueListArgs = {
  options?: InputMaybe<FacetValueListOptions>;
};

export type FacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetInUseError = ErrorResult & {
  errorCode: ErrorCode;
  facetCode: Scalars['String'];
  message: Scalars['String'];
  productCount: Scalars['Int'];
  variantCount: Scalars['Int'];
};

export type FacetList = PaginatedList & {
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacetTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type FacetValue = Node & {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  facet: Facet;
  facetId: Scalars['ID'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime'];
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']>;
  or?: InputMaybe<Array<Scalars['ID']>>;
};

export type FacetValueFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  facetId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetValueList = PaginatedList & {
  items: Array<FacetValue>;
  totalItems: Scalars['Int'];
};

export type FacetValueListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetValueFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetValueSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  count: Scalars['Int'];
  facetValue: FacetValue;
};

export type FacetValueSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  facetId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetValueTranslation = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacetValueTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type FulfillOrderInput = {
  handler: ConfigurableOperationInput;
  lines: Array<OrderLineInput>;
};

export type Fulfillment = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  lines: Array<FulfillmentLine>;
  method: Scalars['String'];
  nextStates: Array<Scalars['String']>;
  state: Scalars['String'];
  /** @deprecated Use the `lines` field instead */
  summary: Array<FulfillmentLine>;
  trackingCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FulfillmentLine = {
  fulfillment: Fulfillment;
  fulfillmentId: Scalars['ID'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

/** Returned when there is an error in transitioning the Fulfillment state */
export type FulfillmentStateTransitionError = ErrorResult & {
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

export enum GlobalFlag {
  FALSE = 'FALSE',
  INHERIT = 'INHERIT',
  TRUE = 'TRUE'
}

export type GlobalSettings = {
  availableLanguages: Array<LanguageCode>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  outOfStockThreshold: Scalars['Int'];
  serverConfig: ServerConfig;
  trackInventory: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

/** Returned when attempting to set the Customer on a guest checkout when the configured GuestCheckoutStrategy does not allow it. */
export type GuestCheckoutError = ErrorResult & {
  errorCode: ErrorCode;
  errorDetail: Scalars['String'];
  message: Scalars['String'];
};

export type HistoryEntry = Node & {
  administrator?: Maybe<Administrator>;
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isPublic?: InputMaybe<BooleanOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
  CUSTOMER_ADDED_TO_GROUP = 'CUSTOMER_ADDED_TO_GROUP',
  CUSTOMER_ADDRESS_CREATED = 'CUSTOMER_ADDRESS_CREATED',
  CUSTOMER_ADDRESS_DELETED = 'CUSTOMER_ADDRESS_DELETED',
  CUSTOMER_ADDRESS_UPDATED = 'CUSTOMER_ADDRESS_UPDATED',
  CUSTOMER_DETAIL_UPDATED = 'CUSTOMER_DETAIL_UPDATED',
  CUSTOMER_EMAIL_UPDATE_REQUESTED = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CUSTOMER_EMAIL_UPDATE_VERIFIED = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CUSTOMER_NOTE = 'CUSTOMER_NOTE',
  CUSTOMER_PASSWORD_RESET_REQUESTED = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CUSTOMER_PASSWORD_RESET_VERIFIED = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CUSTOMER_PASSWORD_UPDATED = 'CUSTOMER_PASSWORD_UPDATED',
  CUSTOMER_REGISTERED = 'CUSTOMER_REGISTERED',
  CUSTOMER_REMOVED_FROM_GROUP = 'CUSTOMER_REMOVED_FROM_GROUP',
  CUSTOMER_VERIFIED = 'CUSTOMER_VERIFIED',
  ORDER_CANCELLATION = 'ORDER_CANCELLATION',
  ORDER_COUPON_APPLIED = 'ORDER_COUPON_APPLIED',
  ORDER_COUPON_REMOVED = 'ORDER_COUPON_REMOVED',
  ORDER_FULFILLMENT = 'ORDER_FULFILLMENT',
  ORDER_FULFILLMENT_TRANSITION = 'ORDER_FULFILLMENT_TRANSITION',
  ORDER_MODIFIED = 'ORDER_MODIFIED',
  ORDER_NOTE = 'ORDER_NOTE',
  ORDER_PAYMENT_TRANSITION = 'ORDER_PAYMENT_TRANSITION',
  ORDER_REFUND_TRANSITION = 'ORDER_REFUND_TRANSITION',
  ORDER_STATE_TRANSITION = 'ORDER_STATE_TRANSITION'
}

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
  inList: Scalars['ID'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type ImportInfo = {
  errors?: Maybe<Array<Scalars['String']>>;
  imported: Scalars['Int'];
  processed: Scalars['Int'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  order: Order;
  quantityAvailable: Scalars['Int'];
};

/**
 * Returned if attempting to create a Fulfillment when there is insufficient
 * stockOnHand of a ProductVariant to satisfy the requested quantity.
 */
export type InsufficientStockOnHandError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  stockOnHand: Scalars['Int'];
};

export type IntCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  authenticationError: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the specified FulfillmentHandler code is not valid */
export type InvalidFulfillmentHandlerError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the specified items are already part of a Fulfillment */
export type ItemsAlreadyFulfilledError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Job = Node & {
  attempts: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSON']>;
  duration: Scalars['Int'];
  error?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isSettled: Scalars['Boolean'];
  progress: Scalars['Float'];
  queueName: Scalars['String'];
  result?: Maybe<Scalars['JSON']>;
  retries: Scalars['Int'];
  settledAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  state: JobState;
};

export type JobBufferSize = {
  bufferId: Scalars['String'];
  size: Scalars['Int'];
};

export type JobFilterParameter = {
  attempts?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  duration?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  isSettled?: InputMaybe<BooleanOperators>;
  progress?: InputMaybe<NumberOperators>;
  queueName?: InputMaybe<StringOperators>;
  retries?: InputMaybe<NumberOperators>;
  settledAt?: InputMaybe<DateOperators>;
  startedAt?: InputMaybe<DateOperators>;
  state?: InputMaybe<StringOperators>;
};

export type JobList = PaginatedList & {
  items: Array<Job>;
  totalItems: Scalars['Int'];
};

export type JobListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<JobFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<JobSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type JobQueue = {
  name: Scalars['String'];
  running: Scalars['Boolean'];
};

export type JobSortParameter = {
  attempts?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  queueName?: InputMaybe<SortOrder>;
  retries?: InputMaybe<SortOrder>;
  settledAt?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
};

/**
 * @description
 * The state of a Job in the JobQueue
 *
 * @docsCategory common
 */
export enum JobState {
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  RETRYING = 'RETRYING',
  RUNNING = 'RUNNING'
}

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  af = 'af',
  /** Akan */
  ak = 'ak',
  /** Amharic */
  am = 'am',
  /** Arabic */
  ar = 'ar',
  /** Assamese */
  as = 'as',
  /** Azerbaijani */
  az = 'az',
  /** Belarusian */
  be = 'be',
  /** Bulgarian */
  bg = 'bg',
  /** Bambara */
  bm = 'bm',
  /** Bangla */
  bn = 'bn',
  /** Tibetan */
  bo = 'bo',
  /** Breton */
  br = 'br',
  /** Bosnian */
  bs = 'bs',
  /** Catalan */
  ca = 'ca',
  /** Chechen */
  ce = 'ce',
  /** Corsican */
  co = 'co',
  /** Czech */
  cs = 'cs',
  /** Church Slavic */
  cu = 'cu',
  /** Welsh */
  cy = 'cy',
  /** Danish */
  da = 'da',
  /** German */
  de = 'de',
  /** Austrian German */
  de_AT = 'de_AT',
  /** Swiss High German */
  de_CH = 'de_CH',
  /** Dzongkha */
  dz = 'dz',
  /** Ewe */
  ee = 'ee',
  /** Greek */
  el = 'el',
  /** English */
  en = 'en',
  /** Australian English */
  en_AU = 'en_AU',
  /** Canadian English */
  en_CA = 'en_CA',
  /** British English */
  en_GB = 'en_GB',
  /** American English */
  en_US = 'en_US',
  /** Esperanto */
  eo = 'eo',
  /** Spanish */
  es = 'es',
  /** European Spanish */
  es_ES = 'es_ES',
  /** Mexican Spanish */
  es_MX = 'es_MX',
  /** Estonian */
  et = 'et',
  /** Basque */
  eu = 'eu',
  /** Persian */
  fa = 'fa',
  /** Dari */
  fa_AF = 'fa_AF',
  /** Fulah */
  ff = 'ff',
  /** Finnish */
  fi = 'fi',
  /** Faroese */
  fo = 'fo',
  /** French */
  fr = 'fr',
  /** Canadian French */
  fr_CA = 'fr_CA',
  /** Swiss French */
  fr_CH = 'fr_CH',
  /** Western Frisian */
  fy = 'fy',
  /** Irish */
  ga = 'ga',
  /** Scottish Gaelic */
  gd = 'gd',
  /** Galician */
  gl = 'gl',
  /** Gujarati */
  gu = 'gu',
  /** Manx */
  gv = 'gv',
  /** Hausa */
  ha = 'ha',
  /** Hebrew */
  he = 'he',
  /** Hindi */
  hi = 'hi',
  /** Croatian */
  hr = 'hr',
  /** Haitian Creole */
  ht = 'ht',
  /** Hungarian */
  hu = 'hu',
  /** Armenian */
  hy = 'hy',
  /** Interlingua */
  ia = 'ia',
  /** Indonesian */
  id = 'id',
  /** Igbo */
  ig = 'ig',
  /** Sichuan Yi */
  ii = 'ii',
  /** Icelandic */
  is = 'is',
  /** Italian */
  it = 'it',
  /** Japanese */
  ja = 'ja',
  /** Javanese */
  jv = 'jv',
  /** Georgian */
  ka = 'ka',
  /** Kikuyu */
  ki = 'ki',
  /** Kazakh */
  kk = 'kk',
  /** Kalaallisut */
  kl = 'kl',
  /** Khmer */
  km = 'km',
  /** Kannada */
  kn = 'kn',
  /** Korean */
  ko = 'ko',
  /** Kashmiri */
  ks = 'ks',
  /** Kurdish */
  ku = 'ku',
  /** Cornish */
  kw = 'kw',
  /** Kyrgyz */
  ky = 'ky',
  /** Latin */
  la = 'la',
  /** Luxembourgish */
  lb = 'lb',
  /** Ganda */
  lg = 'lg',
  /** Lingala */
  ln = 'ln',
  /** Lao */
  lo = 'lo',
  /** Lithuanian */
  lt = 'lt',
  /** Luba-Katanga */
  lu = 'lu',
  /** Latvian */
  lv = 'lv',
  /** Malagasy */
  mg = 'mg',
  /** Maori */
  mi = 'mi',
  /** Macedonian */
  mk = 'mk',
  /** Malayalam */
  ml = 'ml',
  /** Mongolian */
  mn = 'mn',
  /** Marathi */
  mr = 'mr',
  /** Malay */
  ms = 'ms',
  /** Maltese */
  mt = 'mt',
  /** Burmese */
  my = 'my',
  /** Norwegian Bokmål */
  nb = 'nb',
  /** North Ndebele */
  nd = 'nd',
  /** Nepali */
  ne = 'ne',
  /** Dutch */
  nl = 'nl',
  /** Flemish */
  nl_BE = 'nl_BE',
  /** Norwegian Nynorsk */
  nn = 'nn',
  /** Nyanja */
  ny = 'ny',
  /** Oromo */
  om = 'om',
  /** Odia */
  or = 'or',
  /** Ossetic */
  os = 'os',
  /** Punjabi */
  pa = 'pa',
  /** Polish */
  pl = 'pl',
  /** Pashto */
  ps = 'ps',
  /** Portuguese */
  pt = 'pt',
  /** Brazilian Portuguese */
  pt_BR = 'pt_BR',
  /** European Portuguese */
  pt_PT = 'pt_PT',
  /** Quechua */
  qu = 'qu',
  /** Romansh */
  rm = 'rm',
  /** Rundi */
  rn = 'rn',
  /** Romanian */
  ro = 'ro',
  /** Moldavian */
  ro_MD = 'ro_MD',
  /** Russian */
  ru = 'ru',
  /** Kinyarwanda */
  rw = 'rw',
  /** Sanskrit */
  sa = 'sa',
  /** Sindhi */
  sd = 'sd',
  /** Northern Sami */
  se = 'se',
  /** Sango */
  sg = 'sg',
  /** Sinhala */
  si = 'si',
  /** Slovak */
  sk = 'sk',
  /** Slovenian */
  sl = 'sl',
  /** Samoan */
  sm = 'sm',
  /** Shona */
  sn = 'sn',
  /** Somali */
  so = 'so',
  /** Albanian */
  sq = 'sq',
  /** Serbian */
  sr = 'sr',
  /** Southern Sotho */
  st = 'st',
  /** Sundanese */
  su = 'su',
  /** Swedish */
  sv = 'sv',
  /** Swahili */
  sw = 'sw',
  /** Congo Swahili */
  sw_CD = 'sw_CD',
  /** Tamil */
  ta = 'ta',
  /** Telugu */
  te = 'te',
  /** Tajik */
  tg = 'tg',
  /** Thai */
  th = 'th',
  /** Tigrinya */
  ti = 'ti',
  /** Turkmen */
  tk = 'tk',
  /** Tongan */
  to = 'to',
  /** Turkish */
  tr = 'tr',
  /** Tatar */
  tt = 'tt',
  /** Uyghur */
  ug = 'ug',
  /** Ukrainian */
  uk = 'uk',
  /** Urdu */
  ur = 'ur',
  /** Uzbek */
  uz = 'uz',
  /** Vietnamese */
  vi = 'vi',
  /** Volapük */
  vo = 'vo',
  /** Wolof */
  wo = 'wo',
  /** Xhosa */
  xh = 'xh',
  /** Yiddish */
  yi = 'yi',
  /** Yoruba */
  yo = 'yo',
  /** Chinese */
  zh = 'zh',
  /** Simplified Chinese */
  zh_Hans = 'zh_Hans',
  /** Traditional Chinese */
  zh_Hant = 'zh_Hant',
  /** Zulu */
  zu = 'zu'
}

/** Returned if attempting to set a Channel's defaultLanguageCode to a language which is not enabled in GlobalSettings */
export type LanguageNotAvailableError = ErrorResult & {
  errorCode: ErrorCode;
  languageCode: Scalars['String'];
  message: Scalars['String'];
};

export type LocaleStringCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type LocaleTextCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type LocalizedString = {
  languageCode: LanguageCode;
  value: Scalars['String'];
};

export enum LogicalOperator {
  AND = 'AND',
  OR = 'OR'
}

export type ManualPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']>;
  method: Scalars['String'];
  orderId: Scalars['ID'];
  transactionId?: InputMaybe<Scalars['String']>;
};

/**
 * Returned when a call to addManualPaymentToOrder is made but the Order
 * is not in the required state.
 */
export type ManualPaymentStateError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export enum MetricInterval {
  Daily = 'Daily'
}

export type MetricSummary = {
  entries: Array<MetricSummaryEntry>;
  interval: MetricInterval;
  title: Scalars['String'];
  type: MetricType;
};

export type MetricSummaryEntry = {
  label: Scalars['String'];
  value: Scalars['Float'];
};

export type MetricSummaryInput = {
  interval: MetricInterval;
  refresh?: InputMaybe<Scalars['Boolean']>;
  types: Array<MetricType>;
};

export enum MetricType {
  AverageOrderValue = 'AverageOrderValue',
  OrderCount = 'OrderCount',
  OrderTotal = 'OrderTotal'
}

export type MimeTypeError = ErrorResult & {
  errorCode: ErrorCode;
  fileName: Scalars['String'];
  message: Scalars['String'];
  mimeType: Scalars['String'];
};

/** Returned if a PromotionCondition has neither a couponCode nor any conditions set */
export type MissingConditionsError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type ModifyOrderInput = {
  addItems?: InputMaybe<Array<AddItemInput>>;
  adjustOrderLines?: InputMaybe<Array<OrderLineInput>>;
  couponCodes?: InputMaybe<Array<Scalars['String']>>;
  dryRun: Scalars['Boolean'];
  note?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<ModifyOrderOptions>;
  orderId: Scalars['ID'];
  refund?: InputMaybe<AdministratorRefundInput>;
  surcharges?: InputMaybe<Array<SurchargeInput>>;
  updateBillingAddress?: InputMaybe<UpdateOrderAddressInput>;
  updateShippingAddress?: InputMaybe<UpdateOrderAddressInput>;
};

export type ModifyOrderOptions = {
  freezePromotions?: InputMaybe<Scalars['Boolean']>;
  recalculateShipping?: InputMaybe<Scalars['Boolean']>;
};

export type ModifyOrderResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | InsufficientStockError | NegativeQuantityError | NoChangesSpecifiedError | Order | OrderLimitError | OrderModificationStateError | PaymentMethodMissingError | RefundPaymentIdMissingError;

export type MoveCollectionInput = {
  collectionId: Scalars['ID'];
  index: Scalars['Int'];
  parentId: Scalars['ID'];
};

/** Returned if an operation has specified OrderLines from multiple Orders */
export type MultipleOrderError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Mutation = {
  /** Add Customers to a CustomerGroup */
  addCustomersToGroup: CustomerGroup;
  addFulfillmentToOrder: AddFulfillmentToOrderResult;
  /** Adds an item to the draft Order. */
  addItemToDraftOrder: UpdateOrderItemsResult;
  /**
   * Used to manually create a new Payment against an Order.
   * This can be used by an Administrator when an Order is in the ArrangingPayment state.
   *
   * It is also used when a completed Order
   * has been modified (using `modifyOrder`) and the price has increased. The extra payment
   * can then be manually arranged by the administrator, and the details used to create a new
   * Payment.
   */
  addManualPaymentToOrder: AddManualPaymentToOrderResult;
  /** Add members to a Zone */
  addMembersToZone: Zone;
  addNoteToCustomer: Customer;
  addNoteToOrder: Order;
  /** Add an OptionGroup to a Product */
  addOptionGroupToProduct: Product;
  /** Adjusts a draft OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustDraftOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the draft Order */
  applyCouponCodeToDraftOrder: ApplyCouponCodeResult;
  /** Assign assets to channel */
  assignAssetsToChannel: Array<Asset>;
  /** Assigns Collections to the specified Channel */
  assignCollectionsToChannel: Array<Collection>;
  /** Assigns Facets to the specified Channel */
  assignFacetsToChannel: Array<Facet>;
  /** Assigns PaymentMethods to the specified Channel */
  assignPaymentMethodsToChannel: Array<PaymentMethod>;
  /** Assigns ProductVariants to the specified Channel */
  assignProductVariantsToChannel: Array<ProductVariant>;
  /** Assigns all ProductVariants of Product to the specified Channel */
  assignProductsToChannel: Array<Product>;
  /** Assigns Promotions to the specified Channel */
  assignPromotionsToChannel: Array<Promotion>;
  /** Assign a Role to an Administrator */
  assignRoleToAdministrator: Administrator;
  /** Assigns ShippingMethods to the specified Channel */
  assignShippingMethodsToChannel: Array<ShippingMethod>;
  /** Assigns StockLocations to the specified Channel */
  assignStockLocationsToChannel: Array<StockLocation>;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  cancelJob: Job;
  cancelOrder: CancelOrderResult;
  cancelPayment: CancelPaymentResult;
  /** Create a new Administrator */
  createAdministrator: Administrator;
  /** Create a new Asset */
  createAssets: Array<CreateAssetResult>;
  /** Create a new Channel */
  createChannel: CreateChannelResult;
  /** Create a new Collection */
  createCollection: Collection;
  /** Create a new Country */
  createCountry: Country;
  /** Create a new Customer. If a password is provided, a new User will also be created an linked to the Customer. */
  createCustomer: CreateCustomerResult;
  /** Create a new Address and associate it with the Customer specified by customerId */
  createCustomerAddress: Address;
  /** Create a new CustomerGroup */
  createCustomerGroup: CustomerGroup;
  /** Creates a draft Order */
  createDraftOrder: Order;
  /** Create a new Facet */
  createFacet: Facet;
  /** Create one or more FacetValues */
  createFacetValues: Array<FacetValue>;
  /** Create existing PaymentMethod */
  createPaymentMethod: PaymentMethod;
  /** Create a new Product */
  createProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  createProductOption: ProductOption;
  /** Create a new ProductOptionGroup */
  createProductOptionGroup: ProductOptionGroup;
  /** Create a set of ProductVariants based on the OptionGroups assigned to the given Product */
  createProductVariants: Array<Maybe<ProductVariant>>;
  createPromotion: CreatePromotionResult;
  /** Create a new Province */
  createProvince: Province;
  /** Create a new Role */
  createRole: Role;
  /** Create a new Seller */
  createSeller: Seller;
  /** Create a new ShippingMethod */
  createShippingMethod: ShippingMethod;
  createStockLocation: StockLocation;
  /** Create a new Tag */
  createTag: Tag;
  /** Create a new TaxCategory */
  createTaxCategory: TaxCategory;
  /** Create a new TaxRate */
  createTaxRate: TaxRate;
  /** Create a new Zone */
  createZone: Zone;
  /** Delete an Administrator */
  deleteAdministrator: DeletionResponse;
  /** Delete multiple Administrators */
  deleteAdministrators: Array<DeletionResponse>;
  /** Delete an Asset */
  deleteAsset: DeletionResponse;
  /** Delete multiple Assets */
  deleteAssets: DeletionResponse;
  /** Delete a Channel */
  deleteChannel: DeletionResponse;
  /** Delete multiple Channels */
  deleteChannels: Array<DeletionResponse>;
  /** Delete a Collection and all of its descendants */
  deleteCollection: DeletionResponse;
  /** Delete multiple Collections and all of their descendants */
  deleteCollections: Array<DeletionResponse>;
  /** Delete multiple Countries */
  deleteCountries: Array<DeletionResponse>;
  /** Delete a Country */
  deleteCountry: DeletionResponse;
  /** Delete a Customer */
  deleteCustomer: DeletionResponse;
  /** Update an existing Address */
  deleteCustomerAddress: Success;
  /** Delete a CustomerGroup */
  deleteCustomerGroup: DeletionResponse;
  /** Delete multiple CustomerGroups */
  deleteCustomerGroups: Array<DeletionResponse>;
  deleteCustomerNote: DeletionResponse;
  /** Deletes Customers */
  deleteCustomers: Array<DeletionResponse>;
  /** Deletes a draft Order */
  deleteDraftOrder: DeletionResponse;
  /** Delete an existing Facet */
  deleteFacet: DeletionResponse;
  /** Delete one or more FacetValues */
  deleteFacetValues: Array<DeletionResponse>;
  /** Delete multiple existing Facets */
  deleteFacets: Array<DeletionResponse>;
  deleteOrderNote: DeletionResponse;
  /** Delete a PaymentMethod */
  deletePaymentMethod: DeletionResponse;
  /** Delete multiple PaymentMethods */
  deletePaymentMethods: Array<DeletionResponse>;
  /** Delete a Product */
  deleteProduct: DeletionResponse;
  /** Delete a ProductOption */
  deleteProductOption: DeletionResponse;
  /** Delete a ProductVariant */
  deleteProductVariant: DeletionResponse;
  /** Delete multiple ProductVariants */
  deleteProductVariants: Array<DeletionResponse>;
  /** Delete multiple Products */
  deleteProducts: Array<DeletionResponse>;
  deletePromotion: DeletionResponse;
  deletePromotions: Array<DeletionResponse>;
  /** Delete a Province */
  deleteProvince: DeletionResponse;
  /** Delete an existing Role */
  deleteRole: DeletionResponse;
  /** Delete multiple Roles */
  deleteRoles: Array<DeletionResponse>;
  /** Delete a Seller */
  deleteSeller: DeletionResponse;
  /** Delete multiple Sellers */
  deleteSellers: Array<DeletionResponse>;
  /** Delete a ShippingMethod */
  deleteShippingMethod: DeletionResponse;
  /** Delete multiple ShippingMethods */
  deleteShippingMethods: Array<DeletionResponse>;
  deleteStockLocation: DeletionResponse;
  deleteStockLocations: Array<DeletionResponse>;
  /** Delete an existing Tag */
  deleteTag: DeletionResponse;
  /** Deletes multiple TaxCategories */
  deleteTaxCategories: Array<DeletionResponse>;
  /** Deletes a TaxCategory */
  deleteTaxCategory: DeletionResponse;
  /** Delete a TaxRate */
  deleteTaxRate: DeletionResponse;
  /** Delete multiple TaxRates */
  deleteTaxRates: Array<DeletionResponse>;
  /** Delete a Zone */
  deleteZone: DeletionResponse;
  /** Delete a Zone */
  deleteZones: Array<DeletionResponse>;
  flushBufferedJobs: Success;
  importProducts?: Maybe<ImportInfo>;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  logout: Success;
  /**
   * Allows an Order to be modified after it has been completed by the Customer. The Order must first
   * be in the `Modifying` state.
   */
  modifyOrder: ModifyOrderResult;
  /** Move a Collection to a different parent or index */
  moveCollection: Collection;
  refundOrder: RefundOrderResult;
  reindex: Job;
  /** Removes Collections from the specified Channel */
  removeCollectionsFromChannel: Array<Collection>;
  /** Removes the given coupon code from the draft Order */
  removeCouponCodeFromDraftOrder?: Maybe<Order>;
  /** Remove Customers from a CustomerGroup */
  removeCustomersFromGroup: CustomerGroup;
  /** Remove an OrderLine from the draft Order */
  removeDraftOrderLine: RemoveOrderItemsResult;
  /** Removes Facets from the specified Channel */
  removeFacetsFromChannel: Array<RemoveFacetFromChannelResult>;
  /** Remove members from a Zone */
  removeMembersFromZone: Zone;
  /**
   * Remove an OptionGroup from a Product. If the OptionGroup is in use by any ProductVariants
   * the mutation will return a ProductOptionInUseError, and the OptionGroup will not be removed.
   * Setting the `force` argument to `true` will override this and remove the OptionGroup anyway,
   * as well as removing any of the group's options from the Product's ProductVariants.
   */
  removeOptionGroupFromProduct: RemoveOptionGroupFromProductResult;
  /** Removes PaymentMethods from the specified Channel */
  removePaymentMethodsFromChannel: Array<PaymentMethod>;
  /** Removes ProductVariants from the specified Channel */
  removeProductVariantsFromChannel: Array<ProductVariant>;
  /** Removes all ProductVariants of Product from the specified Channel */
  removeProductsFromChannel: Array<Product>;
  /** Removes Promotions from the specified Channel */
  removePromotionsFromChannel: Array<Promotion>;
  /** Remove all settled jobs in the given queues older than the given date. Returns the number of jobs deleted. */
  removeSettledJobs: Scalars['Int'];
  /** Removes ShippingMethods from the specified Channel */
  removeShippingMethodsFromChannel: Array<ShippingMethod>;
  /** Removes StockLocations from the specified Channel */
  removeStockLocationsFromChannel: Array<StockLocation>;
  runPendingSearchIndexUpdates: Success;
  setCustomerForDraftOrder: SetCustomerForDraftOrderResult;
  /** Sets the billing address for a draft Order */
  setDraftOrderBillingAddress: Order;
  /** Allows any custom fields to be set for the active order */
  setDraftOrderCustomFields: Order;
  /** Sets the shipping address for a draft Order */
  setDraftOrderShippingAddress: Order;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethodsForDraftOrder` query */
  setDraftOrderShippingMethod: SetOrderShippingMethodResult;
  setOrderCustomFields?: Maybe<Order>;
  settlePayment: SettlePaymentResult;
  settleRefund: SettleRefundResult;
  transitionFulfillmentToState: TransitionFulfillmentToStateResult;
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  transitionPaymentToState: TransitionPaymentToStateResult;
  /** Update the active (currently logged-in) Administrator */
  updateActiveAdministrator: Administrator;
  /** Update an existing Administrator */
  updateAdministrator: Administrator;
  /** Update an existing Asset */
  updateAsset: Asset;
  /** Update an existing Channel */
  updateChannel: UpdateChannelResult;
  /** Update an existing Collection */
  updateCollection: Collection;
  /** Update an existing Country */
  updateCountry: Country;
  /** Update an existing Customer */
  updateCustomer: UpdateCustomerResult;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /** Update an existing CustomerGroup */
  updateCustomerGroup: CustomerGroup;
  updateCustomerNote: HistoryEntry;
  /** Update an existing Facet */
  updateFacet: Facet;
  /** Update one or more FacetValues */
  updateFacetValues: Array<FacetValue>;
  updateGlobalSettings: UpdateGlobalSettingsResult;
  updateOrderNote: HistoryEntry;
  /** Update an existing PaymentMethod */
  updatePaymentMethod: PaymentMethod;
  /** Update an existing Product */
  updateProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  updateProductOption: ProductOption;
  /** Update an existing ProductOptionGroup */
  updateProductOptionGroup: ProductOptionGroup;
  /** Update existing ProductVariants */
  updateProductVariants: Array<Maybe<ProductVariant>>;
  /** Update multiple existing Products */
  updateProducts: Array<Product>;
  updatePromotion: UpdatePromotionResult;
  /** Update an existing Province */
  updateProvince: Province;
  /** Update an existing Role */
  updateRole: Role;
  /** Update an existing Seller */
  updateSeller: Seller;
  /** Update an existing ShippingMethod */
  updateShippingMethod: ShippingMethod;
  updateStockLocation: StockLocation;
  /** Update an existing Tag */
  updateTag: Tag;
  /** Update an existing TaxCategory */
  updateTaxCategory: TaxCategory;
  /** Update an existing TaxRate */
  updateTaxRate: TaxRate;
  /** Update an existing Zone */
  updateZone: Zone;
};


export type MutationAddCustomersToGroupArgs = {
  customerGroupId: Scalars['ID'];
  customerIds: Array<Scalars['ID']>;
};


export type MutationAddFulfillmentToOrderArgs = {
  input: FulfillOrderInput;
};


export type MutationAddItemToDraftOrderArgs = {
  input: AddItemToDraftOrderInput;
  orderId: Scalars['ID'];
};


export type MutationAddManualPaymentToOrderArgs = {
  input: ManualPaymentInput;
};


export type MutationAddMembersToZoneArgs = {
  memberIds: Array<Scalars['ID']>;
  zoneId: Scalars['ID'];
};


export type MutationAddNoteToCustomerArgs = {
  input: AddNoteToCustomerInput;
};


export type MutationAddNoteToOrderArgs = {
  input: AddNoteToOrderInput;
};


export type MutationAddOptionGroupToProductArgs = {
  optionGroupId: Scalars['ID'];
  productId: Scalars['ID'];
};


export type MutationAdjustDraftOrderLineArgs = {
  input: AdjustDraftOrderLineInput;
  orderId: Scalars['ID'];
};


export type MutationApplyCouponCodeToDraftOrderArgs = {
  couponCode: Scalars['String'];
  orderId: Scalars['ID'];
};


export type MutationAssignAssetsToChannelArgs = {
  input: AssignAssetsToChannelInput;
};


export type MutationAssignCollectionsToChannelArgs = {
  input: AssignCollectionsToChannelInput;
};


export type MutationAssignFacetsToChannelArgs = {
  input: AssignFacetsToChannelInput;
};


export type MutationAssignPaymentMethodsToChannelArgs = {
  input: AssignPaymentMethodsToChannelInput;
};


export type MutationAssignProductVariantsToChannelArgs = {
  input: AssignProductVariantsToChannelInput;
};


export type MutationAssignProductsToChannelArgs = {
  input: AssignProductsToChannelInput;
};


export type MutationAssignPromotionsToChannelArgs = {
  input: AssignPromotionsToChannelInput;
};


export type MutationAssignRoleToAdministratorArgs = {
  administratorId: Scalars['ID'];
  roleId: Scalars['ID'];
};


export type MutationAssignShippingMethodsToChannelArgs = {
  input: AssignShippingMethodsToChannelInput;
};


export type MutationAssignStockLocationsToChannelArgs = {
  input: AssignStockLocationsToChannelInput;
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCancelJobArgs = {
  jobId: Scalars['ID'];
};


export type MutationCancelOrderArgs = {
  input: CancelOrderInput;
};


export type MutationCancelPaymentArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAdministratorArgs = {
  input: CreateAdministratorInput;
};


export type MutationCreateAssetsArgs = {
  input: Array<CreateAssetInput>;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCustomerAddressArgs = {
  customerId: Scalars['ID'];
  input: CreateAddressInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateFacetArgs = {
  input: CreateFacetInput;
};


export type MutationCreateFacetValuesArgs = {
  input: Array<CreateFacetValueInput>;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateProductOptionArgs = {
  input: CreateProductOptionInput;
};


export type MutationCreateProductOptionGroupArgs = {
  input: CreateProductOptionGroupInput;
};


export type MutationCreateProductVariantsArgs = {
  input: Array<CreateProductVariantInput>;
};


export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};


export type MutationCreateProvinceArgs = {
  input: CreateProvinceInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSellerArgs = {
  input: CreateSellerInput;
};


export type MutationCreateShippingMethodArgs = {
  input: CreateShippingMethodInput;
};


export type MutationCreateStockLocationArgs = {
  input: CreateStockLocationInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTaxCategoryArgs = {
  input: CreateTaxCategoryInput;
};


export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput;
};


export type MutationCreateZoneArgs = {
  input: CreateZoneInput;
};


export type MutationDeleteAdministratorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAdministratorsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type MutationDeleteAssetsArgs = {
  input: DeleteAssetsInput;
};


export type MutationDeleteChannelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteChannelsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCollectionsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteCountriesArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerGroupsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteCustomerNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomersArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteDraftOrderArgs = {
  orderId: Scalars['ID'];
};


export type MutationDeleteFacetArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteFacetValuesArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteFacetsArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteOrderNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentMethodArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeletePaymentMethodsArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductOptionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductVariantsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteProductsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeletePromotionArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePromotionsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteProvinceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRolesArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteSellerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSellersArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteShippingMethodArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteShippingMethodsArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteStockLocationArgs = {
  input: DeleteStockLocationInput;
};


export type MutationDeleteStockLocationsArgs = {
  input: Array<DeleteStockLocationInput>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTaxCategoriesArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteTaxCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTaxRateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTaxRatesArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteZoneArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteZonesArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationFlushBufferedJobsArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationImportProductsArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};


export type MutationModifyOrderArgs = {
  input: ModifyOrderInput;
};


export type MutationMoveCollectionArgs = {
  input: MoveCollectionInput;
};


export type MutationRefundOrderArgs = {
  input: RefundOrderInput;
};


export type MutationRemoveCollectionsFromChannelArgs = {
  input: RemoveCollectionsFromChannelInput;
};


export type MutationRemoveCouponCodeFromDraftOrderArgs = {
  couponCode: Scalars['String'];
  orderId: Scalars['ID'];
};


export type MutationRemoveCustomersFromGroupArgs = {
  customerGroupId: Scalars['ID'];
  customerIds: Array<Scalars['ID']>;
};


export type MutationRemoveDraftOrderLineArgs = {
  orderId: Scalars['ID'];
  orderLineId: Scalars['ID'];
};


export type MutationRemoveFacetsFromChannelArgs = {
  input: RemoveFacetsFromChannelInput;
};


export type MutationRemoveMembersFromZoneArgs = {
  memberIds: Array<Scalars['ID']>;
  zoneId: Scalars['ID'];
};


export type MutationRemoveOptionGroupFromProductArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  optionGroupId: Scalars['ID'];
  productId: Scalars['ID'];
};


export type MutationRemovePaymentMethodsFromChannelArgs = {
  input: RemovePaymentMethodsFromChannelInput;
};


export type MutationRemoveProductVariantsFromChannelArgs = {
  input: RemoveProductVariantsFromChannelInput;
};


export type MutationRemoveProductsFromChannelArgs = {
  input: RemoveProductsFromChannelInput;
};


export type MutationRemovePromotionsFromChannelArgs = {
  input: RemovePromotionsFromChannelInput;
};


export type MutationRemoveSettledJobsArgs = {
  olderThan?: InputMaybe<Scalars['DateTime']>;
  queueNames?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationRemoveShippingMethodsFromChannelArgs = {
  input: RemoveShippingMethodsFromChannelInput;
};


export type MutationRemoveStockLocationsFromChannelArgs = {
  input: RemoveStockLocationsFromChannelInput;
};


export type MutationSetCustomerForDraftOrderArgs = {
  customerId?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<CreateCustomerInput>;
  orderId: Scalars['ID'];
};


export type MutationSetDraftOrderBillingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID'];
};


export type MutationSetDraftOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
  orderId: Scalars['ID'];
};


export type MutationSetDraftOrderShippingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID'];
};


export type MutationSetDraftOrderShippingMethodArgs = {
  orderId: Scalars['ID'];
  shippingMethodId: Scalars['ID'];
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSettlePaymentArgs = {
  id: Scalars['ID'];
};


export type MutationSettleRefundArgs = {
  input: SettleRefundInput;
};


export type MutationTransitionFulfillmentToStateArgs = {
  id: Scalars['ID'];
  state: Scalars['String'];
};


export type MutationTransitionOrderToStateArgs = {
  id: Scalars['ID'];
  state: Scalars['String'];
};


export type MutationTransitionPaymentToStateArgs = {
  id: Scalars['ID'];
  state: Scalars['String'];
};


export type MutationUpdateActiveAdministratorArgs = {
  input: UpdateActiveAdministratorInput;
};


export type MutationUpdateAdministratorArgs = {
  input: UpdateAdministratorInput;
};


export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};


export type MutationUpdateCustomerNoteArgs = {
  input: UpdateCustomerNoteInput;
};


export type MutationUpdateFacetArgs = {
  input: UpdateFacetInput;
};


export type MutationUpdateFacetValuesArgs = {
  input: Array<UpdateFacetValueInput>;
};


export type MutationUpdateGlobalSettingsArgs = {
  input: UpdateGlobalSettingsInput;
};


export type MutationUpdateOrderNoteArgs = {
  input: UpdateOrderNoteInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateProductOptionArgs = {
  input: UpdateProductOptionInput;
};


export type MutationUpdateProductOptionGroupArgs = {
  input: UpdateProductOptionGroupInput;
};


export type MutationUpdateProductVariantsArgs = {
  input: Array<UpdateProductVariantInput>;
};


export type MutationUpdateProductsArgs = {
  input: Array<UpdateProductInput>;
};


export type MutationUpdatePromotionArgs = {
  input: UpdatePromotionInput;
};


export type MutationUpdateProvinceArgs = {
  input: UpdateProvinceInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateSellerArgs = {
  input: UpdateSellerInput;
};


export type MutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput;
};


export type MutationUpdateStockLocationArgs = {
  input: UpdateStockLocationInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationUpdateTaxCategoryArgs = {
  input: UpdateTaxCategoryInput;
};


export type MutationUpdateTaxRateArgs = {
  input: UpdateTaxRateInput;
};


export type MutationUpdateZoneArgs = {
  input: UpdateZoneInput;
};

export type NativeAuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when a call to modifyOrder fails to specify any changes */
export type NoChangesSpecifiedError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

/** Returned if an attempting to refund an Order but neither items nor shipping refund was specified */
export type NothingToRefundError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
  inList: Scalars['Float'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
};

export type NumberRange = {
  end: Scalars['Float'];
  start: Scalars['Float'];
};

export type Order = Node & {
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  aggregateOrder?: Maybe<Order>;
  aggregateOrderId?: Maybe<Scalars['ID']>;
  billingAddress?: Maybe<OrderAddress>;
  channels: Array<Channel>;
  /** A unique code for the Order */
  code: Scalars['String'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID'];
  lines: Array<OrderLine>;
  modifications: Array<OrderModification>;
  nextStates: Array<Scalars['String']>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  sellerOrders?: Maybe<Array<Order>>;
  shipping: Scalars['Money'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Money'];
  state: Scalars['String'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Money'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Money'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Money'];
  totalQuantity: Scalars['Int'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Money'];
  type: OrderType;
  updatedAt: Scalars['DateTime'];
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
};

export type OrderFilterParameter = {
  active?: InputMaybe<BooleanOperators>;
  aggregateOrderId?: InputMaybe<IdOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  customerLastName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  transactionId?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  errorCode: ErrorCode;
  maxItems: Scalars['Int'];
  message: Scalars['String'];
};

export type OrderLine = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Money'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Money'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Money'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Money'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID'];
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Money'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Money'];
  /** The total tax on this line */
  lineTax: Scalars['Money'];
  order: Order;
  /** The quantity at the time the Order was placed */
  orderPlacedQuantity: Scalars['Int'];
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Money'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Money'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Money'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Money'];
  quantity: Scalars['Int'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Money'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Money'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Money'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Money'];
  updatedAt: Scalars['DateTime'];
};

export type OrderLineInput = {
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type OrderList = PaginatedList & {
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type OrderModification = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isSettled: Scalars['Boolean'];
  lines: Array<OrderModificationLine>;
  note: Scalars['String'];
  payment?: Maybe<Payment>;
  priceChange: Scalars['Money'];
  refund?: Maybe<Refund>;
  surcharges?: Maybe<Array<Surcharge>>;
  updatedAt: Scalars['DateTime'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderModificationLine = {
  modification: OrderModification;
  modificationId: Scalars['ID'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `Modifying` state. */
export type OrderModificationStateError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderProcessState = {
  name: Scalars['String'];
  to: Array<Scalars['String']>;
};

export type OrderSortParameter = {
  aggregateOrderId?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerLastName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  /** A description of this tax */
  description: Scalars['String'];
  /** The total net price of OrderLines to which this taxRate applies */
  taxBase: Scalars['Money'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Money'];
};

export enum OrderType {
  Aggregate = 'Aggregate',
  Regular = 'Regular',
  Seller = 'Seller'
}

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

export type Payment = Node & {
  amount: Scalars['Money'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  method: Scalars['String'];
  nextStates: Array<Scalars['String']>;
  refunds: Array<Refund>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethod = Node & {
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperation;
  id: Scalars['ID'];
  name: Scalars['String'];
  translations: Array<PaymentMethodTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethodFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type PaymentMethodList = PaginatedList & {
  items: Array<PaymentMethod>;
  totalItems: Scalars['Int'];
};

export type PaymentMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PaymentMethodFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PaymentMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

/**
 * Returned when a call to modifyOrder fails to include a paymentMethod even
 * though the price has increased as a result of the changes.
 */
export type PaymentMethodMissingError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type PaymentMethodQuote = {
  code: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  eligibilityMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isEligible: Scalars['Boolean'];
  name: Scalars['String'];
};

export type PaymentMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PaymentMethodTranslation = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethodTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

/** Returned if an attempting to refund a Payment against OrderLines from a different Order */
export type PaymentOrderMismatchError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when there is an error in transitioning the Payment state */
export type PaymentStateTransitionError = ErrorResult & {
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to create Seller */
  CreateSeller = 'CreateSeller',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to create StockLocation */
  CreateStockLocation = 'CreateStockLocation',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to delete Seller */
  DeleteSeller = 'DeleteSeller',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to delete StockLocation */
  DeleteStockLocation = 'DeleteStockLocation',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to read Seller */
  ReadSeller = 'ReadSeller',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to read StockLocation */
  ReadStockLocation = 'ReadStockLocation',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to update Seller */
  UpdateSeller = 'UpdateSeller',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to update StockLocation */
  UpdateStockLocation = 'UpdateStockLocation',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone'
}

export type PermissionDefinition = {
  assignable: Scalars['Boolean'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type PreviewCollectionVariantsInput = {
  filters: Array<ConfigurableOperationInput>;
  inheritFilters: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['ID']>;
};

/** The price range where the result has more than one price */
export type PriceRange = {
  max: Scalars['Money'];
  min: Scalars['Money'];
};

export type Product = Node & {
  assets: Array<Asset>;
  channels: Array<Channel>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  optionGroups: Array<ProductOptionGroup>;
  slug: Scalars['String'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  facetValueId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductList = PaginatedList & {
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductOption = Node & {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroup = Node & {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslation = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductOptionInUseError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  optionGroupCode: Scalars['String'];
  productVariantCount: Scalars['Int'];
};

export type ProductOptionTranslation = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductVariant = Node & {
  assets: Array<Asset>;
  channels: Array<Channel>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  outOfStockThreshold: Scalars['Int'];
  price: Scalars['Money'];
  priceWithTax: Scalars['Money'];
  prices: Array<ProductVariantPrice>;
  product: Product;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  /** @deprecated use stockLevels */
  stockAllocated: Scalars['Int'];
  stockLevel: Scalars['String'];
  stockLevels: Array<StockLevel>;
  stockMovements: StockMovementList;
  /** @deprecated use stockLevels */
  stockOnHand: Scalars['Int'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  trackInventory: GlobalFlag;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
  useGlobalOutOfStockThreshold: Scalars['Boolean'];
};


export type ProductVariantStockMovementsArgs = {
  options?: InputMaybe<StockMovementListOptions>;
};

export type ProductVariantFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  facetValueId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  outOfStockThreshold?: InputMaybe<NumberOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  sku?: InputMaybe<StringOperators>;
  stockAllocated?: InputMaybe<NumberOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  stockOnHand?: InputMaybe<NumberOperators>;
  trackInventory?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  useGlobalOutOfStockThreshold?: InputMaybe<BooleanOperators>;
};

export type ProductVariantList = PaginatedList & {
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantPrice = {
  currencyCode: CurrencyCode;
  price: Scalars['Int'];
};

/**
 * Used to set up update the price of a ProductVariant in a particular Channel.
 * If the `delete` flag is `true`, the price will be deleted for the given Channel.
 */
export type ProductVariantPriceInput = {
  currencyCode: CurrencyCode;
  delete?: InputMaybe<Scalars['Boolean']>;
  price: Scalars['Money'];
};

export type ProductVariantSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  outOfStockThreshold?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockAllocated?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  stockOnHand?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type Promotion = Node & {
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  endsAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  translations: Array<PromotionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type PromotionFilterParameter = {
  couponCode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  endsAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  perCustomerUsageLimit?: InputMaybe<NumberOperators>;
  startsAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type PromotionList = PaginatedList & {
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type PromotionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PromotionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PromotionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type PromotionSortParameter = {
  couponCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  perCustomerUsageLimit?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PromotionTranslation = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PromotionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type Province = Node & Region & {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProvinceFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProvinceList = PaginatedList & {
  items: Array<Province>;
  totalItems: Scalars['Int'];
};

export type ProvinceListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProvinceFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProvinceSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProvinceSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProvinceTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

/** Returned if the specified quantity of an OrderLine is greater than the number of items in that line */
export type QuantityTooGreatError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Query = {
  activeAdministrator?: Maybe<Administrator>;
  activeChannel: Channel;
  administrator?: Maybe<Administrator>;
  administrators: AdministratorList;
  /** Get a single Asset by id */
  asset?: Maybe<Asset>;
  /** Get a list of Assets */
  assets: AssetList;
  channel?: Maybe<Channel>;
  channels: ChannelList;
  /** Get a Collection either by id or slug. If neither id nor slug is specified, an error will result. */
  collection?: Maybe<Collection>;
  collectionFilters: Array<ConfigurableOperationDefinition>;
  collections: CollectionList;
  countries: CountryList;
  country?: Maybe<Country>;
  customer?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroups: CustomerGroupList;
  customers: CustomerList;
  /** Returns a list of eligible shipping methods for the draft Order */
  eligibleShippingMethodsForDraftOrder: Array<ShippingMethodQuote>;
  facet?: Maybe<Facet>;
  facetValues: FacetValueList;
  facets: FacetList;
  fulfillmentHandlers: Array<ConfigurableOperationDefinition>;
  globalSettings: GlobalSettings;
  job?: Maybe<Job>;
  jobBufferSize: Array<JobBufferSize>;
  jobQueues: Array<JobQueue>;
  jobs: JobList;
  jobsById: Array<Job>;
  me?: Maybe<CurrentUser>;
  /** Get metrics for the given interval and metric types. */
  metricSummary: Array<MetricSummary>;
  order?: Maybe<Order>;
  orders: OrderList;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethodEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  paymentMethodHandlers: Array<ConfigurableOperationDefinition>;
  paymentMethods: PaymentMethodList;
  pendingSearchIndexUpdates: Scalars['Int'];
  /** Used for real-time previews of the contents of a Collection */
  previewCollectionVariants: ProductVariantList;
  /** Get a Product either by id or slug. If neither id nor slug is specified, an error will result. */
  product?: Maybe<Product>;
  productOptionGroup?: Maybe<ProductOptionGroup>;
  productOptionGroups: Array<ProductOptionGroup>;
  /** Get a ProductVariant by id */
  productVariant?: Maybe<ProductVariant>;
  /** List ProductVariants either all or for the specific product. */
  productVariants: ProductVariantList;
  /** List Products */
  products: ProductList;
  promotion?: Maybe<Promotion>;
  promotionActions: Array<ConfigurableOperationDefinition>;
  promotionConditions: Array<ConfigurableOperationDefinition>;
  promotions: PromotionList;
  province?: Maybe<Province>;
  provinces: ProvinceList;
  role?: Maybe<Role>;
  roles: RoleList;
  search: SearchResponse;
  seller?: Maybe<Seller>;
  sellers: SellerList;
  shippingCalculators: Array<ConfigurableOperationDefinition>;
  shippingEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: ShippingMethodList;
  stockLocation?: Maybe<StockLocation>;
  stockLocations: StockLocationList;
  tag: Tag;
  tags: TagList;
  taxCategories: TaxCategoryList;
  taxCategory?: Maybe<TaxCategory>;
  taxRate?: Maybe<TaxRate>;
  taxRates: TaxRateList;
  testEligibleShippingMethods: Array<ShippingMethodQuote>;
  testShippingMethod: TestShippingMethodResult;
  zone?: Maybe<Zone>;
  zones: ZoneList;
};


export type QueryAdministratorArgs = {
  id: Scalars['ID'];
};


export type QueryAdministratorsArgs = {
  options?: InputMaybe<AdministratorListOptions>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetsArgs = {
  options?: InputMaybe<AssetListOptions>;
};


export type QueryChannelArgs = {
  id: Scalars['ID'];
};


export type QueryChannelsArgs = {
  options?: InputMaybe<ChannelListOptions>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryCountriesArgs = {
  options?: InputMaybe<CountryListOptions>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryCustomerGroupArgs = {
  id: Scalars['ID'];
};


export type QueryCustomerGroupsArgs = {
  options?: InputMaybe<CustomerGroupListOptions>;
};


export type QueryCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};


export type QueryEligibleShippingMethodsForDraftOrderArgs = {
  orderId: Scalars['ID'];
};


export type QueryFacetArgs = {
  id: Scalars['ID'];
};


export type QueryFacetValuesArgs = {
  options?: InputMaybe<FacetValueListOptions>;
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryJobArgs = {
  jobId: Scalars['ID'];
};


export type QueryJobBufferSizeArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryJobsArgs = {
  options?: InputMaybe<JobListOptions>;
};


export type QueryJobsByIdArgs = {
  jobIds: Array<Scalars['ID']>;
};


export type QueryMetricSummaryArgs = {
  input?: InputMaybe<MetricSummaryInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};


export type QueryPaymentMethodArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentMethodsArgs = {
  options?: InputMaybe<PaymentMethodListOptions>;
};


export type QueryPreviewCollectionVariantsArgs = {
  input: PreviewCollectionVariantsInput;
  options?: InputMaybe<ProductVariantListOptions>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductOptionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryProductOptionGroupsArgs = {
  filterTerm?: InputMaybe<Scalars['String']>;
};


export type QueryProductVariantArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
  productId?: InputMaybe<Scalars['ID']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QueryPromotionArgs = {
  id: Scalars['ID'];
};


export type QueryPromotionsArgs = {
  options?: InputMaybe<PromotionListOptions>;
};


export type QueryProvinceArgs = {
  id: Scalars['ID'];
};


export type QueryProvincesArgs = {
  options?: InputMaybe<ProvinceListOptions>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  options?: InputMaybe<RoleListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QuerySellerArgs = {
  id: Scalars['ID'];
};


export type QuerySellersArgs = {
  options?: InputMaybe<SellerListOptions>;
};


export type QueryShippingMethodArgs = {
  id: Scalars['ID'];
};


export type QueryShippingMethodsArgs = {
  options?: InputMaybe<ShippingMethodListOptions>;
};


export type QueryStockLocationArgs = {
  id: Scalars['ID'];
};


export type QueryStockLocationsArgs = {
  options?: InputMaybe<StockLocationListOptions>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryTagsArgs = {
  options?: InputMaybe<TagListOptions>;
};


export type QueryTaxCategoriesArgs = {
  options?: InputMaybe<TaxCategoryListOptions>;
};


export type QueryTaxCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryTaxRateArgs = {
  id: Scalars['ID'];
};


export type QueryTaxRatesArgs = {
  options?: InputMaybe<TaxRateListOptions>;
};


export type QueryTestEligibleShippingMethodsArgs = {
  input: TestEligibleShippingMethodsInput;
};


export type QueryTestShippingMethodArgs = {
  input: TestShippingMethodInput;
};


export type QueryZoneArgs = {
  id: Scalars['ID'];
};


export type QueryZonesArgs = {
  options?: InputMaybe<ZoneListOptions>;
};

export type Refund = Node & {
  adjustment: Scalars['Money'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Scalars['Money'];
  lines: Array<RefundLine>;
  metadata?: Maybe<Scalars['JSON']>;
  method?: Maybe<Scalars['String']>;
  paymentId: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  shipping: Scalars['Money'];
  state: Scalars['String'];
  total: Scalars['Money'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type RefundLine = {
  orderLine: OrderLine;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
  refund: Refund;
  refundId: Scalars['ID'];
};

export type RefundOrderInput = {
  adjustment: Scalars['Money'];
  lines: Array<OrderLineInput>;
  paymentId: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
  shipping: Scalars['Money'];
};

export type RefundOrderResult = AlreadyRefundedError | MultipleOrderError | NothingToRefundError | OrderStateTransitionError | PaymentOrderMismatchError | QuantityTooGreatError | Refund | RefundOrderStateError | RefundStateTransitionError;

/** Returned if an attempting to refund an Order which is not in the expected state */
export type RefundOrderStateError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  orderState: Scalars['String'];
};

/**
 * Returned when a call to modifyOrder fails to include a refundPaymentId even
 * though the price has decreased as a result of the changes.
 */
export type RefundPaymentIdMissingError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when there is an error in transitioning the Refund state */
export type RefundStateTransitionError = ErrorResult & {
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

export type Region = {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RegionTranslation = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RelationCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String'];
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  scalarFields: Array<Scalars['String']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type Release = Node & StockMovement & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type RemoveCollectionsFromChannelInput = {
  channelId: Scalars['ID'];
  collectionIds: Array<Scalars['ID']>;
};

export type RemoveFacetFromChannelResult = Facet | FacetInUseError;

export type RemoveFacetsFromChannelInput = {
  channelId: Scalars['ID'];
  facetIds: Array<Scalars['ID']>;
  force?: InputMaybe<Scalars['Boolean']>;
};

export type RemoveOptionGroupFromProductResult = Product | ProductOptionInUseError;

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RemovePaymentMethodsFromChannelInput = {
  channelId: Scalars['ID'];
  paymentMethodIds: Array<Scalars['ID']>;
};

export type RemoveProductVariantsFromChannelInput = {
  channelId: Scalars['ID'];
  productVariantIds: Array<Scalars['ID']>;
};

export type RemoveProductsFromChannelInput = {
  channelId: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};

export type RemovePromotionsFromChannelInput = {
  channelId: Scalars['ID'];
  promotionIds: Array<Scalars['ID']>;
};

export type RemoveShippingMethodsFromChannelInput = {
  channelId: Scalars['ID'];
  shippingMethodIds: Array<Scalars['ID']>;
};

export type RemoveStockLocationsFromChannelInput = {
  channelId: Scalars['ID'];
  stockLocationIds: Array<Scalars['ID']>;
};

export type Return = Node & StockMovement & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type Role = Node & {
  channels: Array<Channel>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime'];
};

export type RoleFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type RoleList = PaginatedList & {
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type RoleListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RoleFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RoleSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type RoleSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Sale = Node & StockMovement & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type SearchInput = {
  collectionId?: InputMaybe<Scalars['ID']>;
  collectionSlug?: InputMaybe<Scalars['String']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  /** @deprecated Use `facetValueFilters` instead */
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  /** @deprecated Use `facetValueFilters` instead */
  facetValueOperator?: InputMaybe<LogicalOperator>;
  groupByProduct?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']>;
  term?: InputMaybe<Scalars['String']>;
};

export type SearchReindexResponse = {
  success: Scalars['Boolean'];
};

export type SearchResponse = {
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
};

export type SearchResult = {
  /** An array of ids of the Channels in which this result appears */
  channelIds: Array<Scalars['ID']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};

export type SearchResultAsset = {
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID'];
  preview: Scalars['String'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type Seller = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SellerFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SellerList = PaginatedList & {
  items: Array<Seller>;
  totalItems: Scalars['Int'];
};

export type SellerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SellerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SellerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SellerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ServerConfig = {
  customFieldConfig: CustomFields;
  orderProcess: Array<OrderProcessState>;
  permissions: Array<PermissionDefinition>;
  permittedAssetTypes: Array<Scalars['String']>;
};

export type SetCustomerForDraftOrderResult = EmailAddressConflictError | Order;

export type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;

/** Returned if the Payment settlement fails */
export type SettlePaymentError = ErrorResult & {
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

export type SettlePaymentResult = OrderStateTransitionError | Payment | PaymentStateTransitionError | SettlePaymentError;

export type SettleRefundInput = {
  id: Scalars['ID'];
  transactionId: Scalars['String'];
};

export type SettleRefundResult = Refund | RefundStateTransitionError;

export type ShippingLine = {
  discountedPrice: Scalars['Money'];
  discountedPriceWithTax: Scalars['Money'];
  discounts: Array<Discount>;
  id: Scalars['ID'];
  price: Scalars['Money'];
  priceWithTax: Scalars['Money'];
  shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  fulfillmentHandlerCode: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ShippingMethodFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  fulfillmentHandlerCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ShippingMethodList = PaginatedList & {
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type ShippingMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ShippingMethodFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ShippingMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ShippingMethodQuote = {
  code: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Money'];
  priceWithTax: Scalars['Money'];
};

export type ShippingMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fulfillmentHandlerCode?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShippingMethodTranslation = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShippingMethodTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

/** The price value where the result has a single price */
export type SinglePrice = {
  value: Scalars['Money'];
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StockAdjustment = Node & StockMovement & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type StockLevel = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  stockAllocated: Scalars['Int'];
  stockLocation: StockLocation;
  stockLocationId: Scalars['ID'];
  stockOnHand: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type StockLevelInput = {
  stockLocationId: Scalars['ID'];
  stockOnHand: Scalars['Int'];
};

export type StockLocation = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type StockLocationFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type StockLocationList = PaginatedList & {
  items: Array<StockLocation>;
  totalItems: Scalars['Int'];
};

export type StockLocationListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<StockLocationFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<StockLocationSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type StockLocationSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StockMovement = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type StockMovementItem = Allocation | Cancellation | Release | Return | Sale | StockAdjustment;

export type StockMovementList = {
  items: Array<StockMovementItem>;
  totalItems: Scalars['Int'];
};

export type StockMovementListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<StockMovementType>;
};

export enum StockMovementType {
  ADJUSTMENT = 'ADJUSTMENT',
  ALLOCATION = 'ALLOCATION',
  CANCELLATION = 'CANCELLATION',
  RELEASE = 'RELEASE',
  RETURN = 'RETURN',
  SALE = 'SALE'
}

export type StringCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type StringFieldOption = {
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
  inList: Scalars['String'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  notContains?: InputMaybe<Scalars['String']>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  regex?: InputMaybe<Scalars['String']>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  success: Scalars['Boolean'];
};

export type Surcharge = Node & {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['Money'];
  priceWithTax: Scalars['Money'];
  sku?: Maybe<Scalars['String']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type SurchargeInput = {
  description: Scalars['String'];
  price: Scalars['Money'];
  priceIncludesTax: Scalars['Boolean'];
  sku?: InputMaybe<Scalars['String']>;
  taxDescription?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['Float']>;
};

export type Tag = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type TagFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<StringOperators>;
};

export type TagList = PaginatedList & {
  items: Array<Tag>;
  totalItems: Scalars['Int'];
};

export type TagListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TagFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TagSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TagSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TaxCategory = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaxCategoryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isDefault?: InputMaybe<BooleanOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type TaxCategoryList = PaginatedList & {
  items: Array<TaxCategory>;
  totalItems: Scalars['Int'];
};

export type TaxCategoryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TaxCategoryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TaxCategorySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TaxCategorySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaxLine = {
  description: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type TaxRate = Node & {
  category: TaxCategory;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  zone: Zone;
};

export type TaxRateFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<NumberOperators>;
};

export type TaxRateList = PaginatedList & {
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type TaxRateListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TaxRateFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TaxRateSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TaxRateSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TestEligibleShippingMethodsInput = {
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodOrderLineInput = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type TestShippingMethodQuote = {
  metadata?: Maybe<Scalars['JSON']>;
  price: Scalars['Money'];
  priceWithTax: Scalars['Money'];
};

export type TestShippingMethodResult = {
  eligible: Scalars['Boolean'];
  quote?: Maybe<TestShippingMethodQuote>;
};

export type TextCustomFieldConfig = CustomField & {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type TransitionFulfillmentToStateResult = Fulfillment | FulfillmentStateTransitionError;

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type TransitionPaymentToStateResult = Payment | PaymentStateTransitionError;

export type UpdateActiveAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1?: InputMaybe<Scalars['String']>;
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type UpdateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  focalPoint?: InputMaybe<CoordinateInput>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateChannelInput = {
  availableCurrencyCodes?: InputMaybe<Array<CurrencyCode>>;
  availableLanguageCodes?: InputMaybe<Array<LanguageCode>>;
  code?: InputMaybe<Scalars['String']>;
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode?: InputMaybe<CurrencyCode>;
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultCurrencyCode?: InputMaybe<CurrencyCode>;
  defaultLanguageCode?: InputMaybe<LanguageCode>;
  defaultShippingZoneId?: InputMaybe<Scalars['ID']>;
  defaultTaxZoneId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  pricesIncludeTax?: InputMaybe<Scalars['Boolean']>;
  sellerId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['String']>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateChannelResult = Channel | LanguageNotAvailableError;

export type UpdateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<Array<ConfigurableOperationInput>>;
  id: Scalars['ID'];
  inheritFilters?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  parentId?: InputMaybe<Scalars['ID']>;
  translations?: InputMaybe<Array<UpdateCollectionTranslationInput>>;
};

export type UpdateCollectionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type UpdateCountryInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<CountryTranslationInput>>;
};

export type UpdateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerNoteInput = {
  note: Scalars['String'];
  noteId: Scalars['ID'];
};

export type UpdateCustomerResult = Customer | EmailAddressConflictError;

export type UpdateFacetInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<FacetTranslationInput>>;
};

export type UpdateFacetValueInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<FacetValueTranslationInput>>;
};

export type UpdateGlobalSettingsInput = {
  availableLanguages?: InputMaybe<Array<LanguageCode>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateGlobalSettingsResult = ChannelDefaultLanguageError | GlobalSettings;

export type UpdateOrderAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1?: InputMaybe<Scalars['String']>;
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
};

export type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderLimitError | OrderModificationError;

export type UpdateOrderNoteInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  noteId: Scalars['ID'];
};

export type UpdatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  handler?: InputMaybe<ConfigurableOperationInput>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<PaymentMethodTranslationInput>>;
};

export type UpdateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProductTranslationInput>>;
};

export type UpdateProductOptionGroupInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductOptionInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  optionIds?: InputMaybe<Array<Scalars['ID']>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  /** Sets the price for the ProductVariant in the Channel's default currency */
  price?: InputMaybe<Scalars['Money']>;
  /** Allows multiple prices to be set for the ProductVariant in different currencies. */
  prices?: InputMaybe<Array<ProductVariantPriceInput>>;
  sku?: InputMaybe<Scalars['String']>;
  stockLevels?: InputMaybe<Array<StockLevelInput>>;
  stockOnHand?: InputMaybe<Scalars['Int']>;
  taxCategoryId?: InputMaybe<Scalars['ID']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations?: InputMaybe<Array<ProductVariantTranslationInput>>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePromotionInput = {
  actions?: InputMaybe<Array<ConfigurableOperationInput>>;
  conditions?: InputMaybe<Array<ConfigurableOperationInput>>;
  couponCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']>;
  startsAt?: InputMaybe<Scalars['DateTime']>;
  translations?: InputMaybe<Array<PromotionTranslationInput>>;
};

export type UpdatePromotionResult = MissingConditionsError | Promotion;

export type UpdateProvinceInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProvinceTranslationInput>>;
};

export type UpdateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']>>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  permissions?: InputMaybe<Array<Permission>>;
};

export type UpdateSellerInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateShippingMethodInput = {
  calculator?: InputMaybe<ConfigurableOperationInput>;
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  fulfillmentHandler?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type UpdateStockLocationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTagInput = {
  id: Scalars['ID'];
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTaxRateInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  customerGroupId?: InputMaybe<Scalars['ID']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  zoneId?: InputMaybe<Scalars['ID']>;
};

export type UpdateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type User = Node & {
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type Zone = Node & {
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  members: Array<Region>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ZoneFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ZoneList = PaginatedList & {
  items: Array<Zone>;
  totalItems: Scalars['Int'];
};

export type ZoneListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ZoneFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ZoneSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ZoneSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GetAdministratorsQueryVariables = Exact<{
  options?: InputMaybe<AdministratorListOptions>;
}>;


export type GetAdministratorsQuery = { administrators: { totalItems: number, items: Array<{ id: string, firstName: string, lastName: string, emailAddress: string, user: { id: string, identifier: string, lastLogin?: any | null, roles: Array<{ id: string, code: string, description: string, permissions: Array<Permission> }> } }> } };

export type GetAdministratorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAdministratorQuery = { administrator?: { id: string, firstName: string, lastName: string, emailAddress: string, user: { id: string, identifier: string, lastLogin?: any | null, roles: Array<{ id: string, code: string, description: string, permissions: Array<Permission> }> } } | null };

export type ActiveAdministratorQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveAdministratorQuery = { activeAdministrator?: { id: string, firstName: string, lastName: string, emailAddress: string, user: { id: string, identifier: string, lastLogin?: any | null, roles: Array<{ id: string, code: string, description: string, permissions: Array<Permission> }> } } | null };

export type UpdateActiveAdministratorMutationVariables = Exact<{
  input: UpdateActiveAdministratorInput;
}>;


export type UpdateActiveAdministratorMutation = { updateActiveAdministrator: { id: string, firstName: string, lastName: string, emailAddress: string, user: { id: string, identifier: string, lastLogin?: any | null, roles: Array<{ id: string, code: string, description: string, permissions: Array<Permission> }> } } };

export type DeleteAdministratorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAdministratorMutation = { deleteAdministrator: { message?: string | null, result: DeletionResult } };

export type Q1QueryVariables = Exact<{ [key: string]: never; }>;


export type Q1Query = { product?: { id: string, name: string } | null };

export type Q2QueryVariables = Exact<{ [key: string]: never; }>;


export type Q2Query = { product?: { id: string, name: string } | null };

export type AssignAssetsToChannelMutationVariables = Exact<{
  input: AssignAssetsToChannelInput;
}>;


export type AssignAssetsToChannelMutation = { assignAssetsToChannel: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }> };

export type CanCreateCustomerMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type CanCreateCustomerMutation = { createCustomer: { id: string } | {} };

export type GetCustomerCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerCountQuery = { customers: { totalItems: number } };

export type DeepFieldResolutionTestQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DeepFieldResolutionTestQueryQuery = { product?: { variants: Array<{ taxRateApplied: { customerGroup?: { customers: { items: Array<{ id: string, emailAddress: string }> } } | null } }> } | null };

export type AuthenticateMutationVariables = Exact<{
  input: AuthenticationInput;
}>;


export type AuthenticateMutation = { authenticate: { id: string, identifier: string, channels: Array<{ code: string, token: string, permissions: Array<Permission> }> } | { authenticationError: string, errorCode: ErrorCode, message: string } };

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { customers: { totalItems: number, items: Array<{ id: string, emailAddress: string }> } };

export type GetCustomerUserAuthQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCustomerUserAuthQuery = { customer?: { id: string, user?: { id: string, verified: boolean, authenticationMethods: Array<{ id: string, strategy: string }> } | null } | null };

export type DeleteChannelMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteChannelMutation = { deleteChannel: { message?: string | null, result: DeletionResult } };

export type UpdateGlobalLanguagesMutationVariables = Exact<{
  input: UpdateGlobalSettingsInput;
}>;


export type UpdateGlobalLanguagesMutation = { updateGlobalSettings: { id: string, availableLanguages: Array<LanguageCode> } | {} };

export type GetCollectionsWithAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionsWithAssetsQuery = { collections: { items: Array<{ assets: Array<{ name: string }> }> } };

export type GetProductsWithVariantIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsWithVariantIdsQuery = { products: { items: Array<{ id: string, name: string, variants: Array<{ id: string, name: string }> }> } };

export type GetCollectionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  variantListOptions?: InputMaybe<ProductVariantListOptions>;
}>;


export type GetCollectionQuery = { collection?: { id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, productVariants: { items: Array<{ id: string, name: string, price: number }> }, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null } | null };

export type GetCollectionListAdminQueryVariables = Exact<{
  options?: InputMaybe<CollectionListOptions>;
}>;


export type GetCollectionListAdminQuery = { collections: { totalItems: number, items: Array<{ id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null }> } };

export type MoveCollectionMutationVariables = Exact<{
  input: MoveCollectionInput;
}>;


export type MoveCollectionMutation = { moveCollection: { id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null } };

export type GetFacetValuesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFacetValuesQuery = { facets: { items: Array<{ values: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> }> } };

export type GetCollectionProductsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCollectionProductsQuery = { collection?: { productVariants: { items: Array<{ id: string, name: string, productId: string, facetValues: Array<{ code: string }> }> } } | null };

export type CreateCollectionSelectVariantsMutationVariables = Exact<{
  input: CreateCollectionInput;
}>;


export type CreateCollectionSelectVariantsMutation = { createCollection: { id: string, productVariants: { totalItems: number, items: Array<{ name: string }> } } };

export type GetCollectionBreadcrumbsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCollectionBreadcrumbsQuery = { collection?: { breadcrumbs: Array<{ id: string, name: string, slug: string }> } | null };

export type GetCollectionsForProductsQueryVariables = Exact<{
  term: Scalars['String'];
}>;


export type GetCollectionsForProductsQuery = { products: { items: Array<{ id: string, name: string, collections: Array<{ id: string, name: string }> }> } };

export type DeleteCollectionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCollectionMutation = { deleteCollection: { result: DeletionResult, message?: string | null } };

export type GetProductCollectionsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductCollectionsQuery = { product?: { id: string, collections: Array<{ id: string, name: string }> } | null };

export type GetProductCollectionsWithParentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductCollectionsWithParentQuery = { product?: { id: string, collections: Array<{ id: string, name: string, parent?: { id: string, name: string } | null }> } | null };

export type GetCollectionNestedParentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionNestedParentsQuery = { collections: { items: Array<{ id: string, name: string, parent?: { name: string, parent?: { name: string, parent?: { name: string } | null } | null } | null }> } };

export type PreviewCollectionVariantsQueryVariables = Exact<{
  input: PreviewCollectionVariantsInput;
  options?: InputMaybe<ProductVariantListOptions>;
}>;


export type PreviewCollectionVariantsQuery = { previewCollectionVariants: { totalItems: number, items: Array<{ id: string, name: string }> } };

export type AssignCollectionsToChannelMutationVariables = Exact<{
  input: AssignCollectionsToChannelInput;
}>;


export type AssignCollectionsToChannelMutation = { assignCollectionsToChannel: Array<{ id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null }> };

export type RemoveCollectionsFromChannelMutationVariables = Exact<{
  input: RemoveCollectionsFromChannelInput;
}>;


export type RemoveCollectionsFromChannelMutation = { removeCollectionsFromChannel: Array<{ id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null }> };

export type DeleteCollectionsBulkMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type DeleteCollectionsBulkMutation = { deleteCollections: Array<{ message?: string | null, result: DeletionResult }> };

export type GetCheckersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCheckersQuery = { shippingEligibilityCheckers: Array<{ code: string, args: Array<{ defaultValue?: any | null, description?: string | null, label?: string | null, list: boolean, name: string, required: boolean, type: string }> }> };

export type DeleteCountryMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCountryMutation = { deleteCountry: { result: DeletionResult, message?: string | null } };

export type GetCountryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCountryQuery = { country?: { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } | null };

export type CreateCountryMutationVariables = Exact<{
  input: CreateCountryInput;
}>;


export type CreateCountryMutation = { createCountry: { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } };

export type DeleteCustomerAddressMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCustomerAddressMutation = { deleteCustomerAddress: { success: boolean } };

export type GetCustomerWithUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCustomerWithUserQuery = { customer?: { id: string, user?: { id: string, identifier: string, verified: boolean } | null } | null };

export type GetCustomerOrdersQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCustomerOrdersQuery = { customer?: { orders: { totalItems: number, items: Array<{ id: string }> } } | null };

export type AddNoteToCustomerMutationVariables = Exact<{
  input: AddNoteToCustomerInput;
}>;


export type AddNoteToCustomerMutation = { addNoteToCustomer: { id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, user?: { id: string, identifier: string, verified: boolean, lastLogin?: any | null } | null, addresses?: Array<{ id: string, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { id: string, code: string, name: string } }> | null } };

export type ReindexMutationVariables = Exact<{ [key: string]: never; }>;


export type ReindexMutation = { reindex: { id: string } };

export type SearchProductsAdminQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchProductsAdminQuery = { search: { totalItems: number, items: Array<{ enabled: boolean, productId: string, productName: string, slug: string, description: string, productVariantId: string, productVariantName: string, sku: string }> } };

export type SearchFacetValuesQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchFacetValuesQuery = { search: { totalItems: number, facetValues: Array<{ count: number, facetValue: { id: string, name: string } }> } };

export type SearchCollectionsQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchCollectionsQuery = { search: { totalItems: number, collections: Array<{ count: number, collection: { id: string, name: string } }> } };

export type SearchGetAssetsQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchGetAssetsQuery = { search: { totalItems: number, items: Array<{ productId: string, productName: string, productVariantName: string, productAsset?: { id: string, preview: string, focalPoint?: { x: number, y: number } | null } | null, productVariantAsset?: { id: string, preview: string, focalPoint?: { x: number, y: number } | null } | null }> } };

export type SearchGetPricesQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchGetPricesQuery = { search: { items: Array<{ price: { min: number, max: number } | { value: number }, priceWithTax: { min: number, max: number } | { value: number } }> } };

export type CreateDraftOrderMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateDraftOrderMutation = { createDraftOrder: { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } };

export type AddItemToDraftOrderMutationVariables = Exact<{
  orderId: Scalars['ID'];
  input: AddItemToDraftOrderInput;
}>;


export type AddItemToDraftOrderMutation = { addItemToDraftOrder: { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } };

export type AdjustDraftOrderLineMutationVariables = Exact<{
  orderId: Scalars['ID'];
  input: AdjustDraftOrderLineInput;
}>;


export type AdjustDraftOrderLineMutation = { adjustDraftOrderLine: { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } };

export type RemoveDraftOrderLineMutationVariables = Exact<{
  orderId: Scalars['ID'];
  orderLineId: Scalars['ID'];
}>;


export type RemoveDraftOrderLineMutation = { removeDraftOrderLine: { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } | { errorCode: ErrorCode, message: string } };

export type SetCustomerForDraftOrderMutationVariables = Exact<{
  orderId: Scalars['ID'];
  customerId?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<CreateCustomerInput>;
}>;


export type SetCustomerForDraftOrderMutation = { setCustomerForDraftOrder: { errorCode: ErrorCode, message: string } | { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } };

export type SetDraftOrderShippingAddressMutationVariables = Exact<{
  orderId: Scalars['ID'];
  input: CreateAddressInput;
}>;


export type SetDraftOrderShippingAddressMutation = { setDraftOrderShippingAddress: { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } };

export type SetDraftOrderBillingAddressMutationVariables = Exact<{
  orderId: Scalars['ID'];
  input: CreateAddressInput;
}>;


export type SetDraftOrderBillingAddressMutation = { setDraftOrderBillingAddress: { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, billingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } };

export type ApplyCouponCodeToDraftOrderMutationVariables = Exact<{
  orderId: Scalars['ID'];
  couponCode: Scalars['String'];
}>;


export type ApplyCouponCodeToDraftOrderMutation = { applyCouponCodeToDraftOrder: { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { couponCodes: Array<string>, id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } };

export type RemoveCouponCodeFromDraftOrderMutationVariables = Exact<{
  orderId: Scalars['ID'];
  couponCode: Scalars['String'];
}>;


export type RemoveCouponCodeFromDraftOrderMutation = { removeCouponCodeFromDraftOrder?: { couponCodes: Array<string>, id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } | null };

export type DraftOrderEligibleShippingMethodsQueryVariables = Exact<{
  orderId: Scalars['ID'];
}>;


export type DraftOrderEligibleShippingMethodsQuery = { eligibleShippingMethodsForDraftOrder: Array<{ id: string, name: string, code: string, description: string, price: number, priceWithTax: number, metadata?: any | null }> };

export type SetDraftOrderShippingMethodMutationVariables = Exact<{
  orderId: Scalars['ID'];
  shippingMethodId: Scalars['ID'];
}>;


export type SetDraftOrderShippingMethodMutation = { setDraftOrderShippingMethod: { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } | { errorCode: ErrorCode, message: string } };

export type GetOrderPlacedAtQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderPlacedAtQuery = { order?: { id: string, createdAt: any, updatedAt: any, state: string, orderPlacedAt?: any | null } | null };

export type IdTest1QueryVariables = Exact<{ [key: string]: never; }>;


export type IdTest1Query = { products: { items: Array<{ id: string }> } };

export type IdTest2QueryVariables = Exact<{ [key: string]: never; }>;


export type IdTest2Query = { products: { items: Array<{ id: string, variants: Array<{ id: string, options: Array<{ id: string, name: string }> }> }> } };

export type IdTest3QueryVariables = Exact<{ [key: string]: never; }>;


export type IdTest3Query = { product?: { id: string } | null };

export type IdTest4MutationVariables = Exact<{ [key: string]: never; }>;


export type IdTest4Mutation = { updateProduct: { id: string, featuredAsset?: { id: string } | null } };

export type IdTest5MutationVariables = Exact<{ [key: string]: never; }>;


export type IdTest5Mutation = { updateProduct: { id: string, name: string } };

export type IdTest6QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IdTest6Query = { product?: { id: string } | null };

export type IdTest7MutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type IdTest7Mutation = { updateProduct: { id: string, featuredAsset?: { id: string } | null } };

export type IdTest8MutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type IdTest8Mutation = { updateProduct: { id: string, name: string } };

export type IdTest9QueryVariables = Exact<{ [key: string]: never; }>;


export type IdTest9Query = { products: { items: Array<{ id: string, featuredAsset?: { id: string } | null }> } };

export type ProdFragmentFragment = { id: string, featuredAsset?: { id: string } | null };

export type IdTest10QueryVariables = Exact<{ [key: string]: never; }>;


export type IdTest10Query = { products: { items: Array<{ id: string, featuredAsset?: { id: string } | null }> } };

export type ProdFragment1Fragment = { id: string, featuredAsset?: { id: string } | null };

export type ProdFragment2Fragment = { id: string, featuredAsset?: { id: string } | null };

export type IdTest11QueryVariables = Exact<{ [key: string]: never; }>;


export type IdTest11Query = { products: { items: Array<{ id: string, featuredAsset?: { id: string } | null }> } };

export type ProdFragment1_1Fragment = { id: string, featuredAsset?: { id: string } | null };

export type ProdFragment2_1Fragment = { id: string, featuredAsset?: { id: string } | null };

export type ProdFragment3_1Fragment = { id: string, featuredAsset?: { id: string } | null };

export type GetFacetWithValuesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFacetWithValuesQuery = { facet?: { id: string, languageCode: LanguageCode, isPrivate: boolean, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, values: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> } | null };

export type DeleteFacetValuesMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  force?: InputMaybe<Scalars['Boolean']>;
}>;


export type DeleteFacetValuesMutation = { deleteFacetValues: Array<{ result: DeletionResult, message?: string | null }> };

export type DeleteFacetMutationVariables = Exact<{
  id: Scalars['ID'];
  force?: InputMaybe<Scalars['Boolean']>;
}>;


export type DeleteFacetMutation = { deleteFacet: { result: DeletionResult, message?: string | null } };

export type GetProductWithFacetValuesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductWithFacetValuesQuery = { product?: { id: string, facetValues: Array<{ id: string, name: string, code: string }>, variants: Array<{ id: string, facetValues: Array<{ id: string, name: string, code: string }> }> } | null };

export type GetProductListWithVariantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductListWithVariantsQuery = { products: { totalItems: number, items: Array<{ id: string, name: string, variants: Array<{ id: string, name: string }> }> } };

export type CreateFacetValuesMutationVariables = Exact<{
  input: Array<CreateFacetValueInput> | CreateFacetValueInput;
}>;


export type CreateFacetValuesMutation = { createFacetValues: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> };

export type UpdateFacetValuesMutationVariables = Exact<{
  input: Array<UpdateFacetValueInput> | UpdateFacetValueInput;
}>;


export type UpdateFacetValuesMutation = { updateFacetValues: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> };

export type AssignFacetsToChannelMutationVariables = Exact<{
  input: AssignFacetsToChannelInput;
}>;


export type AssignFacetsToChannelMutation = { assignFacetsToChannel: Array<{ id: string, name: string }> };

export type RemoveFacetsFromChannelMutationVariables = Exact<{
  input: RemoveFacetsFromChannelInput;
}>;


export type RemoveFacetsFromChannelMutation = { removeFacetsFromChannel: Array<{ id: string, name: string } | { errorCode: ErrorCode, message: string, productCount: number, variantCount: number }> };

export type GetGlobalSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalSettingsQuery = { globalSettings: { id: string, availableLanguages: Array<LanguageCode>, trackInventory: boolean, outOfStockThreshold: number, serverConfig: { permittedAssetTypes: Array<string>, orderProcess: Array<{ name: string, to: Array<string> }>, permissions: Array<{ name: string, description: string, assignable: boolean }>, customFieldConfig: { Customer: Array<{ name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string }> } } } };

export type AdministratorFragment = { id: string, firstName: string, lastName: string, emailAddress: string, user: { id: string, identifier: string, lastLogin?: any | null, roles: Array<{ id: string, code: string, description: string, permissions: Array<Permission> }> } };

export type AssetFragment = { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string };

export type ProductVariantFragment = { id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> };

export type ProductWithVariantsFragment = { id: string, enabled: boolean, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ languageCode: LanguageCode, name: string, slug: string, description: string }>, optionGroups: Array<{ id: string, languageCode: LanguageCode, code: string, name: string }>, variants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, channels: Array<{ id: string, code: string }> };

export type RoleFragment = { id: string, code: string, description: string, permissions: Array<Permission>, channels: Array<{ id: string, code: string, token: string }> };

export type ConfigurableOperationFragment = { code: string, args: Array<{ name: string, value: string }> };

export type CollectionFragment = { id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null };

export type FacetValueFragment = { id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } };

export type FacetWithValuesFragment = { id: string, languageCode: LanguageCode, isPrivate: boolean, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, values: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> };

type Country_Country_Fragment = { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> };

type Country_Province_Fragment = { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> };

export type CountryFragment = Country_Country_Fragment | Country_Province_Fragment;

export type AddressFragment = { id: string, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { id: string, code: string, name: string } };

export type CustomerFragment = { id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, user?: { id: string, identifier: string, verified: boolean, lastLogin?: any | null } | null, addresses?: Array<{ id: string, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { id: string, code: string, name: string } }> | null };

export type AdjustmentFragment = { adjustmentSource: string, amount: number, description: string, type: AdjustmentType };

export type ShippingAddressFragment = { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null };

export type OrderFragment = { id: string, createdAt: any, updatedAt: any, code: string, active: boolean, state: string, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, customer?: { id: string, firstName: string, lastName: string } | null };

export type PaymentFragment = { id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> };

export type OrderWithLinesFragment = { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null };

export type PromotionFragment = { id: string, createdAt: any, updatedAt: any, couponCode?: string | null, startsAt?: any | null, endsAt?: any | null, name: string, description: string, enabled: boolean, conditions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, actions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> };

export type ZoneFragment = { id: string, name: string, members: Array<{ id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } | { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> }> };

export type TaxRateFragment = { id: string, name: string, enabled: boolean, value: number, category: { id: string, name: string }, zone: { id: string, name: string }, customerGroup?: { id: string, name: string } | null };

export type CurrentUserFragment = { id: string, identifier: string, channels: Array<{ code: string, token: string, permissions: Array<Permission> }> };

export type VariantWithStockFragment = { id: string, stockOnHand: number, stockAllocated: number, stockMovements: { totalItems: number, items: Array<{ id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number }> } };

export type FulfillmentFragment = { id: string, state: string, nextStates: Array<string>, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> };

export type ChannelFragment = { id: string, code: string, token: string, currencyCode: CurrencyCode, availableCurrencyCodes: Array<CurrencyCode>, defaultCurrencyCode: CurrencyCode, defaultLanguageCode: LanguageCode, pricesIncludeTax: boolean, defaultShippingZone?: { id: string } | null, defaultTaxZone?: { id: string } | null };

export type GlobalSettingsFragment = { id: string, availableLanguages: Array<LanguageCode>, trackInventory: boolean, outOfStockThreshold: number, serverConfig: { permittedAssetTypes: Array<string>, orderProcess: Array<{ name: string, to: Array<string> }>, permissions: Array<{ name: string, description: string, assignable: boolean }>, customFieldConfig: { Customer: Array<{ name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string }> } } };

export type CustomerGroupFragment = { id: string, name: string, customers: { totalItems: number, items: Array<{ id: string }> } };

export type ProductOptionGroupFragment = { id: string, code: string, name: string, options: Array<{ id: string, code: string, name: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> };

export type ProductWithOptionsFragment = { id: string, optionGroups: Array<{ id: string, code: string, options: Array<{ id: string, code: string }> }> };

export type ShippingMethodFragment = { id: string, code: string, name: string, description: string, calculator: { code: string, args: Array<{ name: string, value: string }> }, checker: { code: string, args: Array<{ name: string, value: string }> } };

export type CreateAdministratorMutationVariables = Exact<{
  input: CreateAdministratorInput;
}>;


export type CreateAdministratorMutation = { createAdministrator: { id: string, firstName: string, lastName: string, emailAddress: string, user: { id: string, identifier: string, lastLogin?: any | null, roles: Array<{ id: string, code: string, description: string, permissions: Array<Permission> }> } } };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = { updateProduct: { id: string, enabled: boolean, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ languageCode: LanguageCode, name: string, slug: string, description: string }>, optionGroups: Array<{ id: string, languageCode: LanguageCode, code: string, name: string }>, variants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, channels: Array<{ id: string, code: string }> } };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { createProduct: { id: string, enabled: boolean, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ languageCode: LanguageCode, name: string, slug: string, description: string }>, optionGroups: Array<{ id: string, languageCode: LanguageCode, code: string, name: string }>, variants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, channels: Array<{ id: string, code: string }> } };

export type GetProductWithVariantsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetProductWithVariantsQuery = { product?: { id: string, enabled: boolean, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ languageCode: LanguageCode, name: string, slug: string, description: string }>, optionGroups: Array<{ id: string, languageCode: LanguageCode, code: string, name: string }>, variants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, channels: Array<{ id: string, code: string }> } | null };

export type GetProductListQueryVariables = Exact<{
  options?: InputMaybe<ProductListOptions>;
}>;


export type GetProductListQuery = { products: { totalItems: number, items: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, featuredAsset?: { id: string, preview: string } | null }> } };

export type CreateProductVariantsMutationVariables = Exact<{
  input: Array<CreateProductVariantInput> | CreateProductVariantInput;
}>;


export type CreateProductVariantsMutation = { createProductVariants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> } | null> };

export type UpdateProductVariantsMutationVariables = Exact<{
  input: Array<UpdateProductVariantInput> | UpdateProductVariantInput;
}>;


export type UpdateProductVariantsMutation = { updateProductVariants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> } | null> };

export type UpdateTaxRateMutationVariables = Exact<{
  input: UpdateTaxRateInput;
}>;


export type UpdateTaxRateMutation = { updateTaxRate: { id: string, name: string, enabled: boolean, value: number, category: { id: string, name: string }, zone: { id: string, name: string }, customerGroup?: { id: string, name: string } | null } };

export type CreateFacetMutationVariables = Exact<{
  input: CreateFacetInput;
}>;


export type CreateFacetMutation = { createFacet: { id: string, languageCode: LanguageCode, isPrivate: boolean, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, values: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> } };

export type UpdateFacetMutationVariables = Exact<{
  input: UpdateFacetInput;
}>;


export type UpdateFacetMutation = { updateFacet: { id: string, languageCode: LanguageCode, isPrivate: boolean, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, values: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> } };

export type GetCustomerListQueryVariables = Exact<{
  options?: InputMaybe<CustomerListOptions>;
}>;


export type GetCustomerListQuery = { customers: { totalItems: number, items: Array<{ id: string, title?: string | null, firstName: string, lastName: string, emailAddress: string, phoneNumber?: string | null, user?: { id: string, identifier: string, verified: boolean } | null }> } };

export type GetAssetListQueryVariables = Exact<{
  options?: InputMaybe<AssetListOptions>;
}>;


export type GetAssetListQuery = { assets: { totalItems: number, items: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }> } };

export type CreateRoleMutationVariables = Exact<{
  input: CreateRoleInput;
}>;


export type CreateRoleMutation = { createRole: { id: string, code: string, description: string, permissions: Array<Permission>, channels: Array<{ id: string, code: string, token: string }> } };

export type CreateCollectionMutationVariables = Exact<{
  input: CreateCollectionInput;
}>;


export type CreateCollectionMutation = { createCollection: { id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null } };

export type UpdateCollectionMutationVariables = Exact<{
  input: UpdateCollectionInput;
}>;


export type UpdateCollectionMutation = { updateCollection: { id: string, name: string, slug: string, description: string, isPrivate: boolean, languageCode?: LanguageCode | null, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, filters: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, slug: string, description: string }>, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string, position: number }> | null } };

export type GetCustomerQueryVariables = Exact<{
  id: Scalars['ID'];
  orderListOptions?: InputMaybe<OrderListOptions>;
}>;


export type GetCustomerQuery = { customer?: { id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, orders: { totalItems: number, items: Array<{ id: string, code: string, state: string, total: number, currencyCode: CurrencyCode, updatedAt: any }> }, user?: { id: string, identifier: string, verified: boolean, lastLogin?: any | null } | null, addresses?: Array<{ id: string, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { id: string, code: string, name: string } }> | null } | null };

export type AttemptLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
}>;


export type AttemptLoginMutation = { login: { id: string, identifier: string, channels: Array<{ code: string, token: string, permissions: Array<Permission> }> } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } };

export type GetCountryListQueryVariables = Exact<{
  options?: InputMaybe<CountryListOptions>;
}>;


export type GetCountryListQuery = { countries: { totalItems: number, items: Array<{ id: string, code: string, name: string, enabled: boolean }> } };

export type UpdateCountryMutationVariables = Exact<{
  input: UpdateCountryInput;
}>;


export type UpdateCountryMutation = { updateCountry: { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } };

export type GetFacetListQueryVariables = Exact<{
  options?: InputMaybe<FacetListOptions>;
}>;


export type GetFacetListQuery = { facets: { totalItems: number, items: Array<{ id: string, languageCode: LanguageCode, isPrivate: boolean, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, values: Array<{ id: string, languageCode: LanguageCode, code: string, name: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, facet: { id: string, name: string } }> }> } };

export type GetFacetListSimpleQueryVariables = Exact<{
  options?: InputMaybe<FacetListOptions>;
}>;


export type GetFacetListSimpleQuery = { facets: { totalItems: number, items: Array<{ id: string, name: string }> } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductMutation = { deleteProduct: { result: DeletionResult } };

export type GetProductSimpleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetProductSimpleQuery = { product?: { id: string, slug: string } | null };

export type GetStockMovementQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetStockMovementQuery = { product?: { id: string, variants: Array<{ id: string, stockOnHand: number, stockAllocated: number, stockMovements: { totalItems: number, items: Array<{ id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number }> } }> } | null };

export type GetRunningJobsQueryVariables = Exact<{
  options?: InputMaybe<JobListOptions>;
}>;


export type GetRunningJobsQuery = { jobs: { totalItems: number, items: Array<{ id: string, queueName: string, state: JobState, isSettled: boolean, duration: number }> } };

export type CreatePromotionMutationVariables = Exact<{
  input: CreatePromotionInput;
}>;


export type CreatePromotionMutation = { createPromotion: { errorCode: ErrorCode, message: string } | { id: string, createdAt: any, updatedAt: any, couponCode?: string | null, startsAt?: any | null, endsAt?: any | null, name: string, description: string, enabled: boolean, conditions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, actions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: string, identifier: string, channels: Array<{ code: string, token: string, permissions: Array<Permission> }> } | null };

export type CreateChannelMutationVariables = Exact<{
  input: CreateChannelInput;
}>;


export type CreateChannelMutation = { createChannel: { id: string, code: string, token: string, currencyCode: CurrencyCode, availableCurrencyCodes: Array<CurrencyCode>, defaultCurrencyCode: CurrencyCode, defaultLanguageCode: LanguageCode, pricesIncludeTax: boolean, defaultShippingZone?: { id: string } | null, defaultTaxZone?: { id: string } | null } | { errorCode: ErrorCode, message: string, languageCode: string } };

export type DeleteProductVariantMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductVariantMutation = { deleteProductVariant: { result: DeletionResult, message?: string | null } };

export type AssignProductsToChannelMutationVariables = Exact<{
  input: AssignProductsToChannelInput;
}>;


export type AssignProductsToChannelMutation = { assignProductsToChannel: Array<{ id: string, enabled: boolean, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ languageCode: LanguageCode, name: string, slug: string, description: string }>, optionGroups: Array<{ id: string, languageCode: LanguageCode, code: string, name: string }>, variants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, channels: Array<{ id: string, code: string }> }> };

export type RemoveProductsFromChannelMutationVariables = Exact<{
  input: RemoveProductsFromChannelInput;
}>;


export type RemoveProductsFromChannelMutation = { removeProductsFromChannel: Array<{ id: string, enabled: boolean, languageCode: LanguageCode, name: string, slug: string, description: string, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ languageCode: LanguageCode, name: string, slug: string, description: string }>, optionGroups: Array<{ id: string, languageCode: LanguageCode, code: string, name: string }>, variants: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, channels: Array<{ id: string, code: string }> }> };

export type AssignProductVariantsToChannelMutationVariables = Exact<{
  input: AssignProductVariantsToChannelInput;
}>;


export type AssignProductVariantsToChannelMutation = { assignProductVariantsToChannel: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }> };

export type RemoveProductVariantsFromChannelMutationVariables = Exact<{
  input: RemoveProductVariantsFromChannelInput;
}>;


export type RemoveProductVariantsFromChannelMutation = { removeProductVariantsFromChannel: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }> };

export type UpdateAssetMutationVariables = Exact<{
  input: UpdateAssetInput;
}>;


export type UpdateAssetMutation = { updateAsset: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string, tags: Array<{ id: string, value: string }>, focalPoint?: { x: number, y: number } | null } };

export type DeleteAssetMutationVariables = Exact<{
  input: DeleteAssetInput;
}>;


export type DeleteAssetMutation = { deleteAsset: { result: DeletionResult, message?: string | null } };

export type UpdateChannelMutationVariables = Exact<{
  input: UpdateChannelInput;
}>;


export type UpdateChannelMutation = { updateChannel: { id: string, code: string, token: string, currencyCode: CurrencyCode, availableCurrencyCodes: Array<CurrencyCode>, defaultCurrencyCode: CurrencyCode, defaultLanguageCode: LanguageCode, pricesIncludeTax: boolean, defaultShippingZone?: { id: string } | null, defaultTaxZone?: { id: string } | null } | { errorCode: ErrorCode, message: string, languageCode: string } };

export type GetCustomerHistoryQueryVariables = Exact<{
  id: Scalars['ID'];
  options?: InputMaybe<HistoryEntryListOptions>;
}>;


export type GetCustomerHistoryQuery = { customer?: { id: string, history: { totalItems: number, items: Array<{ id: string, type: HistoryEntryType, data: any, administrator?: { id: string } | null }> } } | null };

export type GetOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderQuery = { order?: { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } | null };

export type CreateCustomerGroupMutationVariables = Exact<{
  input: CreateCustomerGroupInput;
}>;


export type CreateCustomerGroupMutation = { createCustomerGroup: { id: string, name: string, customers: { totalItems: number, items: Array<{ id: string }> } } };

export type RemoveCustomersFromGroupMutationVariables = Exact<{
  groupId: Scalars['ID'];
  customerIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RemoveCustomersFromGroupMutation = { removeCustomersFromGroup: { id: string, name: string, customers: { totalItems: number, items: Array<{ id: string }> } } };

export type CreateFulfillmentMutationVariables = Exact<{
  input: FulfillOrderInput;
}>;


export type CreateFulfillmentMutation = { addFulfillmentToOrder: { errorCode: ErrorCode, message: string, fulfillmentHandlerError: string } | { errorCode: ErrorCode, message: string } | { id: string, state: string, nextStates: Array<string>, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } };

export type TransitFulfillmentMutationVariables = Exact<{
  id: Scalars['ID'];
  state: Scalars['String'];
}>;


export type TransitFulfillmentMutation = { transitionFulfillmentToState: { id: string, state: string, nextStates: Array<string>, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> } | { errorCode: ErrorCode, message: string, transitionError: string, fromState: string, toState: string } };

export type GetOrderFulfillmentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderFulfillmentsQuery = { order?: { id: string, state: string, fulfillments?: Array<{ id: string, state: string, nextStates: Array<string>, method: string, summary: Array<{ quantity: number, orderLine: { id: string } }> }> | null } | null };

export type GetOrderListQueryVariables = Exact<{
  options?: InputMaybe<OrderListOptions>;
}>;


export type GetOrderListQuery = { orders: { totalItems: number, items: Array<{ id: string, createdAt: any, updatedAt: any, code: string, active: boolean, state: string, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, customer?: { id: string, firstName: string, lastName: string } | null }> } };

export type CreateAddressMutationVariables = Exact<{
  id: Scalars['ID'];
  input: CreateAddressInput;
}>;


export type CreateAddressMutation = { createCustomerAddress: { id: string, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { code: string, name: string } } };

export type UpdateAddressMutationVariables = Exact<{
  input: UpdateAddressInput;
}>;


export type UpdateAddressMutation = { updateCustomerAddress: { id: string, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { code: string, name: string } } };

export type CreateCustomerMutationVariables = Exact<{
  input: CreateCustomerInput;
  password?: InputMaybe<Scalars['String']>;
}>;


export type CreateCustomerMutation = { createCustomer: { id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, user?: { id: string, identifier: string, verified: boolean, lastLogin?: any | null } | null, addresses?: Array<{ id: string, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { id: string, code: string, name: string } }> | null } | { errorCode: ErrorCode, message: string } };

export type UpdateCustomerMutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerMutation = { updateCustomer: { id: string, title?: string | null, firstName: string, lastName: string, phoneNumber?: string | null, emailAddress: string, user?: { id: string, identifier: string, verified: boolean, lastLogin?: any | null } | null, addresses?: Array<{ id: string, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { id: string, code: string, name: string } }> | null } | { errorCode: ErrorCode, message: string } };

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCustomerMutation = { deleteCustomer: { result: DeletionResult } };

export type UpdateCustomerNoteMutationVariables = Exact<{
  input: UpdateCustomerNoteInput;
}>;


export type UpdateCustomerNoteMutation = { updateCustomerNote: { id: string, data: any, isPublic: boolean } };

export type DeleteCustomerNoteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCustomerNoteMutation = { deleteCustomerNote: { result: DeletionResult, message?: string | null } };

export type UpdateCustomerGroupMutationVariables = Exact<{
  input: UpdateCustomerGroupInput;
}>;


export type UpdateCustomerGroupMutation = { updateCustomerGroup: { id: string, name: string, customers: { totalItems: number, items: Array<{ id: string }> } } };

export type DeleteCustomerGroupMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCustomerGroupMutation = { deleteCustomerGroup: { result: DeletionResult, message?: string | null } };

export type GetCustomerGroupsQueryVariables = Exact<{
  options?: InputMaybe<CustomerGroupListOptions>;
}>;


export type GetCustomerGroupsQuery = { customerGroups: { totalItems: number, items: Array<{ id: string, name: string }> } };

export type GetCustomerGroupQueryVariables = Exact<{
  id: Scalars['ID'];
  options?: InputMaybe<CustomerListOptions>;
}>;


export type GetCustomerGroupQuery = { customerGroup?: { id: string, name: string, customers: { totalItems: number, items: Array<{ id: string }> } } | null };

export type AddCustomersToGroupMutationVariables = Exact<{
  groupId: Scalars['ID'];
  customerIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type AddCustomersToGroupMutation = { addCustomersToGroup: { id: string, name: string, customers: { totalItems: number, items: Array<{ id: string }> } } };

export type GetCustomerWithGroupsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCustomerWithGroupsQuery = { customer?: { id: string, groups: Array<{ id: string, name: string }> } | null };

export type AdminTransitionMutationVariables = Exact<{
  id: Scalars['ID'];
  state: Scalars['String'];
}>;


export type AdminTransitionMutation = { transitionOrderToState?: { id: string, createdAt: any, updatedAt: any, code: string, active: boolean, state: string, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, customer?: { id: string, firstName: string, lastName: string } | null } | { errorCode: ErrorCode, message: string, transitionError: string, fromState: string, toState: string } | null };

export type CancelOrderMutationVariables = Exact<{
  input: CancelOrderInput;
}>;


export type CancelOrderMutation = { cancelOrder: { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { id: string, state: string, lines: Array<{ id: string, quantity: number }> } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } };

export type CanceledOrderFragment = { id: string, state: string, lines: Array<{ id: string, quantity: number }> };

export type UpdateGlobalSettingsMutationVariables = Exact<{
  input: UpdateGlobalSettingsInput;
}>;


export type UpdateGlobalSettingsMutation = { updateGlobalSettings: { errorCode: ErrorCode, message: string } | { id: string, availableLanguages: Array<LanguageCode>, trackInventory: boolean, outOfStockThreshold: number, serverConfig: { permittedAssetTypes: Array<string>, orderProcess: Array<{ name: string, to: Array<string> }>, permissions: Array<{ name: string, description: string, assignable: boolean }>, customFieldConfig: { Customer: Array<{ name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string }> } } } };

export type UpdateRoleMutationVariables = Exact<{
  input: UpdateRoleInput;
}>;


export type UpdateRoleMutation = { updateRole: { id: string, code: string, description: string, permissions: Array<Permission>, channels: Array<{ id: string, code: string, token: string }> } };

export type GetProductsWithVariantPricesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsWithVariantPricesQuery = { products: { items: Array<{ id: string, slug: string, variants: Array<{ id: string, price: number, priceWithTax: number, currencyCode: CurrencyCode, sku: string, facetValues: Array<{ id: string, code: string }> }> }> } };

export type CreateProductOptionGroupMutationVariables = Exact<{
  input: CreateProductOptionGroupInput;
}>;


export type CreateProductOptionGroupMutation = { createProductOptionGroup: { id: string, code: string, name: string, options: Array<{ id: string, code: string, name: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } };

export type AddOptionGroupToProductMutationVariables = Exact<{
  productId: Scalars['ID'];
  optionGroupId: Scalars['ID'];
}>;


export type AddOptionGroupToProductMutation = { addOptionGroupToProduct: { id: string, optionGroups: Array<{ id: string, code: string, options: Array<{ id: string, code: string }> }> } };

export type CreateShippingMethodMutationVariables = Exact<{
  input: CreateShippingMethodInput;
}>;


export type CreateShippingMethodMutation = { createShippingMethod: { id: string, code: string, name: string, description: string, calculator: { code: string, args: Array<{ name: string, value: string }> }, checker: { code: string, args: Array<{ name: string, value: string }> } } };

export type SettlePaymentMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SettlePaymentMutation = { settlePayment: { errorCode: ErrorCode, message: string } | { id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string, paymentErrorMessage: string } };

export type GetOrderHistoryQueryVariables = Exact<{
  id: Scalars['ID'];
  options?: InputMaybe<HistoryEntryListOptions>;
}>;


export type GetOrderHistoryQuery = { order?: { id: string, history: { totalItems: number, items: Array<{ id: string, type: HistoryEntryType, data: any, administrator?: { id: string } | null }> } } | null };

export type UpdateShippingMethodMutationVariables = Exact<{
  input: UpdateShippingMethodInput;
}>;


export type UpdateShippingMethodMutation = { updateShippingMethod: { id: string, code: string, name: string, description: string, calculator: { code: string, args: Array<{ name: string, value: string }> }, checker: { code: string, args: Array<{ name: string, value: string }> } } };

export type GetAssetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAssetQuery = { asset?: { width: number, height: number, id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null };

export type AssetFragFirstFragment = { id: string, preview: string };

export type GetAssetFragmentFirstQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAssetFragmentFirstQuery = { asset?: { id: string, preview: string } | null };

export type AssetWithTagsAndFocalPointFragment = { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string, focalPoint?: { x: number, y: number } | null, tags: Array<{ id: string, value: string }> };

export type CreateAssetsMutationVariables = Exact<{
  input: Array<CreateAssetInput> | CreateAssetInput;
}>;


export type CreateAssetsMutation = { createAssets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string, focalPoint?: { x: number, y: number } | null, tags: Array<{ id: string, value: string }> } | { message: string, fileName: string, mimeType: string }> };

export type DeleteShippingMethodMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteShippingMethodMutation = { deleteShippingMethod: { result: DeletionResult, message?: string | null } };

export type AssignPromotionToChannelMutationVariables = Exact<{
  input: AssignPromotionsToChannelInput;
}>;


export type AssignPromotionToChannelMutation = { assignPromotionsToChannel: Array<{ id: string, name: string }> };

export type RemovePromotionFromChannelMutationVariables = Exact<{
  input: RemovePromotionsFromChannelInput;
}>;


export type RemovePromotionFromChannelMutation = { removePromotionsFromChannel: Array<{ id: string, name: string }> };

export type GetTaxRatesQueryVariables = Exact<{
  options?: InputMaybe<TaxRateListOptions>;
}>;


export type GetTaxRatesQuery = { taxRates: { totalItems: number, items: Array<{ id: string, name: string, enabled: boolean, value: number, category: { id: string, name: string }, zone: { id: string, name: string }, customerGroup?: { id: string, name: string } | null }> } };

export type GetShippingMethodListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShippingMethodListQuery = { shippingMethods: { totalItems: number, items: Array<{ id: string, code: string, name: string, description: string, calculator: { code: string, args: Array<{ name: string, value: string }> }, checker: { code: string, args: Array<{ name: string, value: string }> } }> } };

export type GetCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionsQuery = { collections: { items: Array<{ id: string, name: string, position: number, parent?: { id: string, name: string } | null }> } };

export type TransitionPaymentToStateMutationVariables = Exact<{
  id: Scalars['ID'];
  state: Scalars['String'];
}>;


export type TransitionPaymentToStateMutation = { transitionPaymentToState: { id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> } | { errorCode: ErrorCode, message: string, transitionError: string } };

export type GetProductVariantListQueryVariables = Exact<{
  options?: InputMaybe<ProductVariantListOptions>;
  productId?: InputMaybe<Scalars['ID']>;
}>;


export type GetProductVariantListQuery = { productVariants: { totalItems: number, items: Array<{ id: string, name: string, sku: string, price: number, priceWithTax: number, currencyCode: CurrencyCode, prices: Array<{ currencyCode: CurrencyCode, price: number }> }> } };

export type DeletePromotionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePromotionMutation = { deletePromotion: { result: DeletionResult } };

export type GetChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelsQuery = { channels: { items: Array<{ id: string, code: string, token: string }> } };

export type UpdateAdministratorMutationVariables = Exact<{
  input: UpdateAdministratorInput;
}>;


export type UpdateAdministratorMutation = { updateAdministrator: { id: string, firstName: string, lastName: string, emailAddress: string, user: { id: string, identifier: string, lastLogin?: any | null, roles: Array<{ id: string, code: string, description: string, permissions: Array<Permission> }> } } };

export type CancelJobMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CancelJobMutation = { cancelJob: { id: string, state: JobState, isSettled: boolean, settledAt?: any | null } };

export type UpdateOptionGroupMutationVariables = Exact<{
  input: UpdateProductOptionGroupInput;
}>;


export type UpdateOptionGroupMutation = { updateProductOptionGroup: { id: string } };

export type GetFulfillmentHandlersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFulfillmentHandlersQuery = { fulfillmentHandlers: Array<{ code: string, description: string, args: Array<{ name: string, type: string, description?: string | null, label?: string | null, ui?: any | null }> }> };

export type OrderWithModificationsFragment = { id: string, state: string, subTotal: number, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, lines: Array<{ id: string, quantity: number, orderPlacedQuantity: number, linePrice: number, linePriceWithTax: number, unitPriceWithTax: number, discountedLinePriceWithTax: number, proratedLinePriceWithTax: number, proratedUnitPriceWithTax: number, discounts: Array<{ description: string, amountWithTax: number }>, productVariant: { id: string, name: string } }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number, taxRate: number }>, payments?: Array<{ id: string, transactionId?: string | null, state: string, amount: number, method: string, metadata?: any | null, refunds: Array<{ id: string, state: string, total: number, paymentId: string }> }> | null, modifications: Array<{ id: string, note: string, priceChange: number, isSettled: boolean, lines: Array<{ orderLineId: string, quantity: number }>, surcharges?: Array<{ id: string }> | null, payment?: { id: string, state: string, amount: number, method: string } | null, refund?: { id: string, state: string, total: number, paymentId: string } | null }>, promotions: Array<{ id: string, name: string, couponCode?: string | null }>, discounts: Array<{ description: string, adjustmentSource: string, amount: number, amountWithTax: number }>, shippingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null, billingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null };

export type GetOrderWithModificationsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderWithModificationsQuery = { order?: { id: string, state: string, subTotal: number, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, lines: Array<{ id: string, quantity: number, orderPlacedQuantity: number, linePrice: number, linePriceWithTax: number, unitPriceWithTax: number, discountedLinePriceWithTax: number, proratedLinePriceWithTax: number, proratedUnitPriceWithTax: number, discounts: Array<{ description: string, amountWithTax: number }>, productVariant: { id: string, name: string } }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number, taxRate: number }>, payments?: Array<{ id: string, transactionId?: string | null, state: string, amount: number, method: string, metadata?: any | null, refunds: Array<{ id: string, state: string, total: number, paymentId: string }> }> | null, modifications: Array<{ id: string, note: string, priceChange: number, isSettled: boolean, lines: Array<{ orderLineId: string, quantity: number }>, surcharges?: Array<{ id: string }> | null, payment?: { id: string, state: string, amount: number, method: string } | null, refund?: { id: string, state: string, total: number, paymentId: string } | null }>, promotions: Array<{ id: string, name: string, couponCode?: string | null }>, discounts: Array<{ description: string, adjustmentSource: string, amount: number, amountWithTax: number }>, shippingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null, billingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null } | null };

export type ModifyOrderMutationVariables = Exact<{
  input: ModifyOrderInput;
}>;


export type ModifyOrderMutation = { modifyOrder: { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { id: string, state: string, subTotal: number, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, lines: Array<{ id: string, quantity: number, orderPlacedQuantity: number, linePrice: number, linePriceWithTax: number, unitPriceWithTax: number, discountedLinePriceWithTax: number, proratedLinePriceWithTax: number, proratedUnitPriceWithTax: number, discounts: Array<{ description: string, amountWithTax: number }>, productVariant: { id: string, name: string } }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number, taxRate: number }>, payments?: Array<{ id: string, transactionId?: string | null, state: string, amount: number, method: string, metadata?: any | null, refunds: Array<{ id: string, state: string, total: number, paymentId: string }> }> | null, modifications: Array<{ id: string, note: string, priceChange: number, isSettled: boolean, lines: Array<{ orderLineId: string, quantity: number }>, surcharges?: Array<{ id: string }> | null, payment?: { id: string, state: string, amount: number, method: string } | null, refund?: { id: string, state: string, total: number, paymentId: string } | null }>, promotions: Array<{ id: string, name: string, couponCode?: string | null }>, discounts: Array<{ description: string, adjustmentSource: string, amount: number, amountWithTax: number }>, shippingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null, billingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } };

export type AddManualPaymentMutationVariables = Exact<{
  input: ManualPaymentInput;
}>;


export type AddManualPaymentMutation = { addManualPaymentToOrder: { errorCode: ErrorCode, message: string } | { id: string, state: string, subTotal: number, subTotalWithTax: number, shipping: number, shippingWithTax: number, total: number, totalWithTax: number, lines: Array<{ id: string, quantity: number, orderPlacedQuantity: number, linePrice: number, linePriceWithTax: number, unitPriceWithTax: number, discountedLinePriceWithTax: number, proratedLinePriceWithTax: number, proratedUnitPriceWithTax: number, discounts: Array<{ description: string, amountWithTax: number }>, productVariant: { id: string, name: string } }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number, taxRate: number }>, payments?: Array<{ id: string, transactionId?: string | null, state: string, amount: number, method: string, metadata?: any | null, refunds: Array<{ id: string, state: string, total: number, paymentId: string }> }> | null, modifications: Array<{ id: string, note: string, priceChange: number, isSettled: boolean, lines: Array<{ orderLineId: string, quantity: number }>, surcharges?: Array<{ id: string }> | null, payment?: { id: string, state: string, amount: number, method: string } | null, refund?: { id: string, state: string, total: number, paymentId: string } | null }>, promotions: Array<{ id: string, name: string, couponCode?: string | null }>, discounts: Array<{ description: string, adjustmentSource: string, amount: number, amountWithTax: number }>, shippingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null, billingAddress?: { streetLine1?: string | null, city?: string | null, postalCode?: string | null, province?: string | null, countryCode?: string | null, country?: string | null } | null } };

export type DeletePromotionAdHoc1MutationVariables = Exact<{ [key: string]: never; }>;


export type DeletePromotionAdHoc1Mutation = { deletePromotion: { result: DeletionResult } };

export type GetTaxRateListQueryVariables = Exact<{
  options?: InputMaybe<TaxRateListOptions>;
}>;


export type GetTaxRateListQuery = { taxRates: { totalItems: number, items: Array<{ id: string, name: string, enabled: boolean, value: number, category: { id: string, name: string }, zone: { id: string, name: string } }> } };

export type GetOrderWithLineCalculatedPropsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderWithLineCalculatedPropsQuery = { order?: { id: string, lines: Array<{ id: string, linePriceWithTax: number, quantity: number }> } | null };

export type GetOrderListFulfillmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrderListFulfillmentsQuery = { orders: { items: Array<{ id: string, state: string, fulfillments?: Array<{ id: string, state: string, nextStates: Array<string>, method: string }> | null }> } };

export type GetOrderFulfillmentItemsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderFulfillmentItemsQuery = { order?: { id: string, state: string, fulfillments?: Array<{ id: string, state: string, nextStates: Array<string>, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } | null };

export type RefundFragment = { id: string, state: string, items: number, transactionId?: string | null, shipping: number, total: number, metadata?: any | null };

export type RefundOrderMutationVariables = Exact<{
  input: RefundOrderInput;
}>;


export type RefundOrderMutation = { refundOrder: { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } | { id: string, state: string, items: number, transactionId?: string | null, shipping: number, total: number, metadata?: any | null } | { errorCode: ErrorCode, message: string } | { errorCode: ErrorCode, message: string } };

export type SettleRefundMutationVariables = Exact<{
  input: SettleRefundInput;
}>;


export type SettleRefundMutation = { settleRefund: { id: string, state: string, items: number, transactionId?: string | null, shipping: number, total: number, metadata?: any | null } | { errorCode: ErrorCode, message: string } };

export type AddNoteToOrderMutationVariables = Exact<{
  input: AddNoteToOrderInput;
}>;


export type AddNoteToOrderMutation = { addNoteToOrder: { id: string } };

export type UpdateOrderNoteMutationVariables = Exact<{
  input: UpdateOrderNoteInput;
}>;


export type UpdateOrderNoteMutation = { updateOrderNote: { id: string, data: any, isPublic: boolean } };

export type DeleteOrderNoteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOrderNoteMutation = { deleteOrderNote: { result: DeletionResult, message?: string | null } };

export type GetOrderWithPaymentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderWithPaymentsQuery = { order?: { id: string, payments?: Array<{ id: string, errorMessage?: string | null, metadata?: any | null, refunds: Array<{ id: string, total: number }> }> | null } | null };

export type GetOrderLineFulfillmentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderLineFulfillmentsQuery = { order?: { id: string, lines: Array<{ id: string, fulfillmentLines?: Array<{ orderLineId: string, quantity: number, fulfillment: { id: string, state: string } }> | null }> } | null };

export type GetOrderListWithQtyQueryVariables = Exact<{
  options?: InputMaybe<OrderListOptions>;
}>;


export type GetOrderListWithQtyQuery = { orders: { items: Array<{ id: string, code: string, totalQuantity: number, lines: Array<{ id: string, quantity: number }> }> } };

export type CancelPaymentMutationVariables = Exact<{
  paymentId: Scalars['ID'];
}>;


export type CancelPaymentMutation = { cancelPayment: { errorCode: ErrorCode, message: string, paymentErrorMessage: string } | { id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> } | { errorCode: ErrorCode, message: string, transitionError: string } };

export type PaymentMethodFragment = { id: string, code: string, name: string, description: string, enabled: boolean, checker?: { code: string, args: Array<{ name: string, value: string }> } | null, handler: { code: string, args: Array<{ name: string, value: string }> }, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> };

export type CreatePaymentMethodMutationVariables = Exact<{
  input: CreatePaymentMethodInput;
}>;


export type CreatePaymentMethodMutation = { createPaymentMethod: { id: string, code: string, name: string, description: string, enabled: boolean, checker?: { code: string, args: Array<{ name: string, value: string }> } | null, handler: { code: string, args: Array<{ name: string, value: string }> }, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> } };

export type UpdatePaymentMethodMutationVariables = Exact<{
  input: UpdatePaymentMethodInput;
}>;


export type UpdatePaymentMethodMutation = { updatePaymentMethod: { id: string, code: string, name: string, description: string, enabled: boolean, checker?: { code: string, args: Array<{ name: string, value: string }> } | null, handler: { code: string, args: Array<{ name: string, value: string }> }, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> } };

export type GetPaymentMethodHandlersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentMethodHandlersQuery = { paymentMethodHandlers: Array<{ code: string, args: Array<{ name: string, type: string }> }> };

export type GetPaymentMethodCheckersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentMethodCheckersQuery = { paymentMethodEligibilityCheckers: Array<{ code: string, args: Array<{ name: string, type: string }> }> };

export type GetPaymentMethodQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPaymentMethodQuery = { paymentMethod?: { id: string, code: string, name: string, description: string, enabled: boolean, checker?: { code: string, args: Array<{ name: string, value: string }> } | null, handler: { code: string, args: Array<{ name: string, value: string }> }, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> } | null };

export type GetPaymentMethodListQueryVariables = Exact<{
  options?: InputMaybe<PaymentMethodListOptions>;
}>;


export type GetPaymentMethodListQuery = { paymentMethods: { totalItems: number, items: Array<{ id: string, code: string, name: string, description: string, enabled: boolean, checker?: { code: string, args: Array<{ name: string, value: string }> } | null, handler: { code: string, args: Array<{ name: string, value: string }> }, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> }> } };

export type DeletePaymentMethodMutationVariables = Exact<{
  id: Scalars['ID'];
  force?: InputMaybe<Scalars['Boolean']>;
}>;


export type DeletePaymentMethodMutation = { deletePaymentMethod: { message?: string | null, result: DeletionResult } };

export type AddManualPayment2MutationVariables = Exact<{
  input: ManualPaymentInput;
}>;


export type AddManualPayment2Mutation = { addManualPaymentToOrder: { errorCode: ErrorCode, message: string } | { id: string, createdAt: any, updatedAt: any, code: string, state: string, active: boolean, subTotal: number, subTotalWithTax: number, total: number, totalWithTax: number, totalQuantity: number, currencyCode: CurrencyCode, shipping: number, shippingWithTax: number, customer?: { id: string, firstName: string, lastName: string } | null, lines: Array<{ id: string, unitPrice: number, unitPriceWithTax: number, quantity: number, taxRate: number, linePriceWithTax: number, featuredAsset?: { preview: string } | null, productVariant: { id: string, name: string, sku: string }, taxLines: Array<{ description: string, taxRate: number }> }>, surcharges: Array<{ id: string, description: string, sku?: string | null, price: number, priceWithTax: number }>, shippingLines: Array<{ priceWithTax: number, shippingMethod: { id: string, code: string, name: string, description: string } }>, shippingAddress?: { fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, phoneNumber?: string | null } | null, payments?: Array<{ id: string, transactionId?: string | null, amount: number, method: string, state: string, nextStates: Array<string>, metadata?: any | null, refunds: Array<{ id: string, total: number, reason?: string | null }> }> | null, fulfillments?: Array<{ id: string, state: string, method: string, trackingCode?: string | null, lines: Array<{ orderLineId: string, quantity: number }> }> | null } };

export type GetProductOptionGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductOptionGroupQuery = { productOptionGroup?: { id: string, code: string, name: string, options: Array<{ id: string, code: string, name: string }> } | null };

export type UpdateProductOptionGroupMutationVariables = Exact<{
  input: UpdateProductOptionGroupInput;
}>;


export type UpdateProductOptionGroupMutation = { updateProductOptionGroup: { id: string, code: string, name: string, options: Array<{ id: string, code: string, name: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } };

export type CreateProductOptionMutationVariables = Exact<{
  input: CreateProductOptionInput;
}>;


export type CreateProductOptionMutation = { createProductOption: { id: string, code: string, name: string, groupId: string, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } };

export type UpdateProductOptionMutationVariables = Exact<{
  input: UpdateProductOptionInput;
}>;


export type UpdateProductOptionMutation = { updateProductOption: { id: string, code: string, name: string, groupId: string } };

export type DeleteProductOptionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductOptionMutation = { deleteProductOption: { result: DeletionResult, message?: string | null } };

export type RemoveOptionGroupFromProductMutationVariables = Exact<{
  productId: Scalars['ID'];
  optionGroupId: Scalars['ID'];
  force?: InputMaybe<Scalars['Boolean']>;
}>;


export type RemoveOptionGroupFromProductMutation = { removeOptionGroupFromProduct: { id: string, optionGroups: Array<{ id: string, code: string, options: Array<{ id: string, code: string }> }> } | { errorCode: ErrorCode, message: string, optionGroupCode: string, productVariantCount: number } };

export type GetOptionGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOptionGroupQuery = { productOptionGroup?: { id: string, code: string, options: Array<{ id: string, code: string }> } | null };

export type GetProductVariantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductVariantQuery = { productVariant?: { id: string, name: string } | null };

export type GetProductWithVariantListQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  variantListOptions?: InputMaybe<ProductVariantListOptions>;
}>;


export type GetProductWithVariantListQuery = { product?: { id: string, variantList: { totalItems: number, items: Array<{ id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, currencyCode: CurrencyCode, price: number, priceWithTax: number, stockOnHand: number, trackInventory: GlobalFlag, sku: string, prices: Array<{ currencyCode: CurrencyCode, price: number }>, taxRateApplied: { id: string, name: string, value: number }, taxCategory: { id: string, name: string }, options: Array<{ id: string, code: string, languageCode: LanguageCode, groupId: string, name: string }>, facetValues: Array<{ id: string, code: string, name: string, facet: { id: string, name: string } }>, featuredAsset?: { id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string } | null, assets: Array<{ id: string, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ id: string, code: string }> }> } } | null };

export type GetPromotionListQueryVariables = Exact<{
  options?: InputMaybe<PromotionListOptions>;
}>;


export type GetPromotionListQuery = { promotions: { totalItems: number, items: Array<{ id: string, createdAt: any, updatedAt: any, couponCode?: string | null, startsAt?: any | null, endsAt?: any | null, name: string, description: string, enabled: boolean, conditions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, actions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> }> } };

export type GetPromotionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPromotionQuery = { promotion?: { id: string, createdAt: any, updatedAt: any, couponCode?: string | null, startsAt?: any | null, endsAt?: any | null, name: string, description: string, enabled: boolean, conditions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, actions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> } | null };

export type UpdatePromotionMutationVariables = Exact<{
  input: UpdatePromotionInput;
}>;


export type UpdatePromotionMutation = { updatePromotion: { errorCode: ErrorCode, message: string } | { id: string, createdAt: any, updatedAt: any, couponCode?: string | null, startsAt?: any | null, endsAt?: any | null, name: string, description: string, enabled: boolean, conditions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, actions: Array<{ code: string, args: Array<{ name: string, value: string }> }>, translations: Array<{ id: string, languageCode: LanguageCode, name: string, description: string }> } };

export type ConfigurableOperationDefFragment = { code: string, description: string, args: Array<{ name: string, type: string, ui?: any | null }> };

export type GetAdjustmentOperationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdjustmentOperationsQuery = { promotionActions: Array<{ code: string, description: string, args: Array<{ name: string, type: string, ui?: any | null }> }>, promotionConditions: Array<{ code: string, description: string, args: Array<{ name: string, type: string, ui?: any | null }> }> };

export type GetRolesQueryVariables = Exact<{
  options?: InputMaybe<RoleListOptions>;
}>;


export type GetRolesQuery = { roles: { totalItems: number, items: Array<{ id: string, code: string, description: string, permissions: Array<Permission>, channels: Array<{ id: string, code: string, token: string }> }> } };

export type GetRoleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRoleQuery = { role?: { id: string, code: string, description: string, permissions: Array<Permission>, channels: Array<{ id: string, code: string, token: string }> } | null };

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRoleMutation = { deleteRole: { result: DeletionResult, message?: string | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: { success: boolean } };

export type GetShippingMethodQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetShippingMethodQuery = { shippingMethod?: { id: string, code: string, name: string, description: string, calculator: { code: string, args: Array<{ name: string, value: string }> }, checker: { code: string, args: Array<{ name: string, value: string }> } } | null };

export type GetEligibilityCheckersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEligibilityCheckersQuery = { shippingEligibilityCheckers: Array<{ code: string, description: string, args: Array<{ name: string, type: string, description?: string | null, label?: string | null, ui?: any | null }> }> };

export type GetCalculatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCalculatorsQuery = { shippingCalculators: Array<{ code: string, description: string, args: Array<{ name: string, type: string, description?: string | null, label?: string | null, ui?: any | null }> }> };

export type TestShippingMethodQueryVariables = Exact<{
  input: TestShippingMethodInput;
}>;


export type TestShippingMethodQuery = { testShippingMethod: { eligible: boolean, quote?: { price: number, priceWithTax: number, metadata?: any | null } | null } };

export type TestEligibleMethodsQueryVariables = Exact<{
  input: TestEligibleShippingMethodsInput;
}>;


export type TestEligibleMethodsQuery = { testEligibleShippingMethods: Array<{ id: string, name: string, description: string, price: number, priceWithTax: number, metadata?: any | null }> };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { me?: { identifier: string } | null };

export type GetProductsTake3QueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsTake3Query = { products: { items: Array<{ id: string }> } };

export type GetProduct1QueryVariables = Exact<{ [key: string]: never; }>;


export type GetProduct1Query = { product?: { id: string } | null };

export type GetProduct2VariantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProduct2VariantsQuery = { product?: { id: string, variants: Array<{ id: string, name: string }> } | null };

export type GetProductCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductCollectionQuery = { product?: { collections: Array<{ id: string, name: string }> } | null };

export type GetCollectionShopQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCollectionShopQuery = { collection?: { id: string, name: string, slug: string, description: string, parent?: { id: string, name: string } | null, children?: Array<{ id: string, name: string }> | null } | null };

export type DisableProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DisableProductMutation = { updateProduct: { id: string } };

export type GetCollectionVariantsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCollectionVariantsQuery = { collection?: { id: string, productVariants: { items: Array<{ id: string, name: string }> } } | null };

export type GetCollectionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionListQuery = { collections: { items: Array<{ id: string, name: string }> } };

export type GetProductFacetValuesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductFacetValuesQuery = { product?: { id: string, name: string, facetValues: Array<{ name: string }> } | null };

export type GetVariantFacetValuesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetVariantFacetValuesQuery = { product?: { id: string, name: string, variants: Array<{ id: string, facetValues: Array<{ name: string }> }> } | null };

export type GetCustomerIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerIdsQuery = { customers: { items: Array<{ id: string }> } };

export type StockLocationFragment = { id: string, name: string, description: string };

export type GetStockLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetStockLocationQuery = { stockLocation?: { id: string, name: string, description: string } | null };

export type GetStockLocationsQueryVariables = Exact<{
  options?: InputMaybe<StockLocationListOptions>;
}>;


export type GetStockLocationsQuery = { stockLocations: { totalItems: number, items: Array<{ id: string, name: string, description: string }> } };

export type CreateStockLocationMutationVariables = Exact<{
  input: CreateStockLocationInput;
}>;


export type CreateStockLocationMutation = { createStockLocation: { id: string, name: string, description: string } };

export type UpdateStockLocationMutationVariables = Exact<{
  input: UpdateStockLocationInput;
}>;


export type UpdateStockLocationMutation = { updateStockLocation: { id: string, name: string, description: string } };

export type GetVariantStockLevelsQueryVariables = Exact<{
  options?: InputMaybe<ProductVariantListOptions>;
}>;


export type GetVariantStockLevelsQuery = { productVariants: { items: Array<{ id: string, name: string, stockOnHand: number, stockAllocated: number, stockLevels: Array<{ stockLocationId: string, stockOnHand: number, stockAllocated: number }> }> } };

export type UpdateStockMutationVariables = Exact<{
  input: Array<UpdateProductVariantInput> | UpdateProductVariantInput;
}>;


export type UpdateStockMutation = { updateProductVariants: Array<{ id: string, stockOnHand: number, stockAllocated: number, stockMovements: { totalItems: number, items: Array<{ id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number } | { id: string, type: StockMovementType, quantity: number }> } } | null> };

export type TransitionFulfillmentToStateMutationVariables = Exact<{
  id: Scalars['ID'];
  state: Scalars['String'];
}>;


export type TransitionFulfillmentToStateMutation = { transitionFulfillmentToState: { id: string, state: string, nextStates: Array<string>, createdAt: any } | { errorCode: ErrorCode, message: string, transitionError: string } };

export type UpdateOrderCustomFieldsMutationVariables = Exact<{
  input: UpdateOrderInput;
}>;


export type UpdateOrderCustomFieldsMutation = { setOrderCustomFields?: { id: string } | null };

export type TestGetStockLocationsListQueryVariables = Exact<{
  options?: InputMaybe<StockLocationListOptions>;
}>;


export type TestGetStockLocationsListQuery = { stockLocations: { totalItems: number, items: Array<{ id: string, name: string, description: string }> } };

export type TestGetStockLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TestGetStockLocationQuery = { stockLocation?: { id: string, name: string, description: string } | null };

export type TestCreateStockLocationMutationVariables = Exact<{
  input: CreateStockLocationInput;
}>;


export type TestCreateStockLocationMutation = { createStockLocation: { id: string, name: string, description: string } };

export type TestUpdateStockLocationMutationVariables = Exact<{
  input: UpdateStockLocationInput;
}>;


export type TestUpdateStockLocationMutation = { updateStockLocation: { id: string, name: string, description: string } };

export type TestDeleteStockLocationMutationVariables = Exact<{
  input: DeleteStockLocationInput;
}>;


export type TestDeleteStockLocationMutation = { deleteStockLocation: { result: DeletionResult, message?: string | null } };

export type TestGetStockLevelsForVariantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TestGetStockLevelsForVariantQuery = { productVariant?: { id: string, stockLevels: Array<{ stockOnHand: number, stockAllocated: number, stockLocationId: string }> } | null };

export type TestSetStockLevelInLocationMutationVariables = Exact<{
  input: UpdateProductVariantInput;
}>;


export type TestSetStockLevelInLocationMutation = { updateProductVariants: Array<{ id: string, stockLevels: Array<{ stockOnHand: number, stockAllocated: number, stockLocationId: string }> } | null> };

export type TestAssignStockLocationToChannelMutationVariables = Exact<{
  input: AssignStockLocationsToChannelInput;
}>;


export type TestAssignStockLocationToChannelMutation = { assignStockLocationsToChannel: Array<{ id: string, name: string }> };

export type TestRemoveStockLocationsFromChannelMutationVariables = Exact<{
  input: RemoveStockLocationsFromChannelInput;
}>;


export type TestRemoveStockLocationsFromChannelMutation = { removeStockLocationsFromChannel: Array<{ id: string, name: string }> };

export type GetTagListQueryVariables = Exact<{
  options?: InputMaybe<TagListOptions>;
}>;


export type GetTagListQuery = { tags: { totalItems: number, items: Array<{ id: string, value: string }> } };

export type GetTagQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTagQuery = { tag: { id: string, value: string } };

export type CreateTagMutationVariables = Exact<{
  input: CreateTagInput;
}>;


export type CreateTagMutation = { createTag: { id: string, value: string } };

export type UpdateTagMutationVariables = Exact<{
  input: UpdateTagInput;
}>;


export type UpdateTagMutation = { updateTag: { id: string, value: string } };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTagMutation = { deleteTag: { message?: string | null, result: DeletionResult } };

export type GetTaxCategoryListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaxCategoryListQuery = { taxCategories: { items: Array<{ id: string, name: string, isDefault: boolean }> } };

export type GetTaxCategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTaxCategoryQuery = { taxCategory?: { id: string, name: string, isDefault: boolean } | null };

export type CreateTaxCategoryMutationVariables = Exact<{
  input: CreateTaxCategoryInput;
}>;


export type CreateTaxCategoryMutation = { createTaxCategory: { id: string, name: string, isDefault: boolean } };

export type UpdateTaxCategoryMutationVariables = Exact<{
  input: UpdateTaxCategoryInput;
}>;


export type UpdateTaxCategoryMutation = { updateTaxCategory: { id: string, name: string, isDefault: boolean } };

export type DeleteTaxCategoryMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTaxCategoryMutation = { deleteTaxCategory: { result: DeletionResult, message?: string | null } };

export type GetTaxRateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTaxRateQuery = { taxRate?: { id: string, name: string, enabled: boolean, value: number, category: { id: string, name: string }, zone: { id: string, name: string }, customerGroup?: { id: string, name: string } | null } | null };

export type CreateTaxRateMutationVariables = Exact<{
  input: CreateTaxRateInput;
}>;


export type CreateTaxRateMutation = { createTaxRate: { id: string, name: string, enabled: boolean, value: number, category: { id: string, name: string }, zone: { id: string, name: string }, customerGroup?: { id: string, name: string } | null } };

export type DeleteTaxRateMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTaxRateMutation = { deleteTaxRate: { result: DeletionResult, message?: string | null } };

export type DeleteZoneMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteZoneMutation = { deleteZone: { result: DeletionResult, message?: string | null } };

export type GetZonesQueryVariables = Exact<{
  options?: InputMaybe<ZoneListOptions>;
}>;


export type GetZonesQuery = { zones: { totalItems: number, items: Array<{ id: string, name: string }> } };

export type GetZoneQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetZoneQuery = { zone?: { id: string, name: string, members: Array<{ id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } | { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> }> } | null };

export type GetActiveChannelWithZoneMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveChannelWithZoneMembersQuery = { activeChannel: { id: string, defaultShippingZone?: { id: string, members: Array<{ name: string } | { name: string }> } | null } };

export type CreateZoneMutationVariables = Exact<{
  input: CreateZoneInput;
}>;


export type CreateZoneMutation = { createZone: { id: string, name: string, members: Array<{ id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } | { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> }> } };

export type UpdateZoneMutationVariables = Exact<{
  input: UpdateZoneInput;
}>;


export type UpdateZoneMutation = { updateZone: { id: string, name: string, members: Array<{ id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } | { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> }> } };

export type AddMembersToZoneMutationVariables = Exact<{
  zoneId: Scalars['ID'];
  memberIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type AddMembersToZoneMutation = { addMembersToZone: { id: string, name: string, members: Array<{ id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } | { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> }> } };

export type RemoveMembersFromZoneMutationVariables = Exact<{
  zoneId: Scalars['ID'];
  memberIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RemoveMembersFromZoneMutation = { removeMembersFromZone: { id: string, name: string, members: Array<{ id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> } | { id: string, code: string, name: string, enabled: boolean, translations: Array<{ id: string, languageCode: LanguageCode, name: string }> }> } };

export const ProdFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ProdFragmentFragment, unknown>;
export const ProdFragment2FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ProdFragment2Fragment, unknown>;
export const ProdFragment1FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment2"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ProdFragment1Fragment, unknown>;
export const ProdFragment3_1FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment3_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ProdFragment3_1Fragment, unknown>;
export const ProdFragment2_1FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment2_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment3_1"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment3_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ProdFragment2_1Fragment, unknown>;
export const ProdFragment1_1FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment1_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment2_1"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment3_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment2_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment3_1"}}]}}]} as unknown as DocumentNode<ProdFragment1_1Fragment, unknown>;
export const AdministratorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Administrator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Administrator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]}}]} as unknown as DocumentNode<AdministratorFragment, unknown>;
export const AssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<AssetFragment, unknown>;
export const ProductVariantFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<ProductVariantFragment, unknown>;
export const ProductWithVariantsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<ProductWithVariantsFragment, unknown>;
export const RoleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Role"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RoleFragment, unknown>;
export const ConfigurableOperationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]} as unknown as DocumentNode<ConfigurableOperationFragment, unknown>;
export const CollectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]} as unknown as DocumentNode<CollectionFragment, unknown>;
export const FacetValueFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FacetValueFragment, unknown>;
export const FacetWithValuesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetWithValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FacetWithValuesFragment, unknown>;
export const AddressFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}}]} as unknown as DocumentNode<AddressFragment, unknown>;
export const CustomerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Customer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Address"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}}]} as unknown as DocumentNode<CustomerFragment, unknown>;
export const AdjustmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Adjustment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Adjustment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustmentSource"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<AdjustmentFragment, unknown>;
export const OrderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Order"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<OrderFragment, unknown>;
export const ShippingAddressFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]} as unknown as DocumentNode<ShippingAddressFragment, unknown>;
export const PaymentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]} as unknown as DocumentNode<PaymentFragment, unknown>;
export const OrderWithLinesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]} as unknown as DocumentNode<OrderWithLinesFragment, unknown>;
export const PromotionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Promotion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Promotion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"conditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]} as unknown as DocumentNode<PromotionFragment, unknown>;
export const CountryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CountryFragment, unknown>;
export const ZoneFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Zone"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Zone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ZoneFragment, unknown>;
export const TaxRateFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaxRate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxRate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TaxRateFragment, unknown>;
export const CurrentUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<CurrentUserFragment, unknown>;
export const VariantWithStockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VariantWithStock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockMovements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockMovement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<VariantWithStockFragment, unknown>;
export const FulfillmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Fulfillment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fulfillment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<FulfillmentFragment, unknown>;
export const ChannelFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Channel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Channel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"availableCurrencyCodes"}},{"kind":"Field","name":{"kind":"Name","value":"defaultCurrencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"defaultLanguageCode"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingZone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultTaxZone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricesIncludeTax"}}]}}]} as unknown as DocumentNode<ChannelFragment, unknown>;
export const GlobalSettingsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GlobalSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"availableLanguages"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"serverConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderProcess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permittedAssetTypes"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"assignable"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customFieldConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GlobalSettingsFragment, unknown>;
export const CustomerGroupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<CustomerGroupFragment, unknown>;
export const ProductOptionGroupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductOptionGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOptionGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProductOptionGroupFragment, unknown>;
export const ProductWithOptionsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithOptions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<ProductWithOptionsFragment, unknown>;
export const ShippingMethodFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"calculator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ShippingMethodFragment, unknown>;
export const CanceledOrderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CanceledOrder"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<CanceledOrderFragment, unknown>;
export const AssetFragFirstFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFragFirst"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}}]} as unknown as DocumentNode<AssetFragFirstFragment, unknown>;
export const AssetWithTagsAndFocalPointFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetWithTagsAndFocalPoint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<AssetWithTagsAndFocalPointFragment, unknown>;
export const OrderWithModificationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithModifications"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"orderPlacedQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"linePrice"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discountedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedUnitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"priceChange"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refund"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"promotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentSource"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<OrderWithModificationsFragment, unknown>;
export const RefundFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Refund"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Refund"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"items"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]} as unknown as DocumentNode<RefundFragment, unknown>;
export const PaymentMethodFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"handler"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<PaymentMethodFragment, unknown>;
export const ConfigurableOperationDefFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperationDef"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperationDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<ConfigurableOperationDefFragment, unknown>;
export const StockLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StockLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<StockLocationFragment, unknown>;
export const GetAdministratorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdministrators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdministratorListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"administrators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Administrator"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Administrator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Administrator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdministratorsQuery, GetAdministratorsQueryVariables>;
export const GetAdministratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdministrator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"administrator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Administrator"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Administrator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Administrator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdministratorQuery, GetAdministratorQueryVariables>;
export const ActiveAdministratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ActiveAdministrator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAdministrator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Administrator"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Administrator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Administrator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]}}]} as unknown as DocumentNode<ActiveAdministratorQuery, ActiveAdministratorQueryVariables>;
export const UpdateActiveAdministratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateActiveAdministrator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateActiveAdministratorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateActiveAdministrator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Administrator"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Administrator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Administrator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateActiveAdministratorMutation, UpdateActiveAdministratorMutationVariables>;
export const DeleteAdministratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAdministrator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAdministrator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeleteAdministratorMutation, DeleteAdministratorMutationVariables>;
export const Q1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<Q1Query, Q1QueryVariables>;
export const Q2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<Q2Query, Q2QueryVariables>;
export const AssignAssetsToChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"assignAssetsToChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignAssetsToChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignAssetsToChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<AssignAssetsToChannelMutation, AssignAssetsToChannelMutationVariables>;
export const CanCreateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CanCreateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CanCreateCustomerMutation, CanCreateCustomerMutationVariables>;
export const GetCustomerCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetCustomerCountQuery, GetCustomerCountQueryVariables>;
export const DeepFieldResolutionTestQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeepFieldResolutionTestQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeepFieldResolutionTestQueryQuery, DeepFieldResolutionTestQueryQueryVariables>;
export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthenticationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrentUser"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InvalidCredentialsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticationError"}},{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const GetCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetCustomerUserAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerUserAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"authenticationMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"strategy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerUserAuthQuery, GetCustomerUserAuthQueryVariables>;
export const DeleteChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeleteChannelMutation, DeleteChannelMutationVariables>;
export const UpdateGlobalLanguagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGlobalLanguages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateGlobalSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGlobalSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"availableLanguages"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateGlobalLanguagesMutation, UpdateGlobalLanguagesMutationVariables>;
export const GetCollectionsWithAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionsWithAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionsWithAssetsQuery, GetCollectionsWithAssetsQueryVariables>;
export const GetProductsWithVariantIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsWithVariantIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsWithVariantIdsQuery, GetProductsWithVariantIdsQueryVariables>;
export const GetCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variantListOptions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collection"}},{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variantListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetCollectionQuery, GetCollectionQueryVariables>;
export const GetCollectionListAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionListAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetCollectionListAdminQuery, GetCollectionListAdminQueryVariables>;
export const MoveCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MoveCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<MoveCollectionMutation, MoveCollectionMutationVariables>;
export const GetFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFacetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetFacetValuesQuery, GetFacetValuesQueryVariables>;
export const GetCollectionProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionProductsQuery, GetCollectionProductsQueryVariables>;
export const CreateCollectionSelectVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCollectionSelectVariants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCollectionSelectVariantsMutation, CreateCollectionSelectVariantsMutationVariables>;
export const GetCollectionBreadcrumbsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionBreadcrumbs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionBreadcrumbsQuery, GetCollectionBreadcrumbsQueryVariables>;
export const GetCollectionsForProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionsForProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"term"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"term"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionsForProductsQuery, GetCollectionsForProductsQueryVariables>;
export const DeleteCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const GetProductCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductCollectionsQuery, GetProductCollectionsQueryVariables>;
export const GetProductCollectionsWithParentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductCollectionsWithParent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductCollectionsWithParentQuery, GetProductCollectionsWithParentQueryVariables>;
export const GetCollectionNestedParentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionNestedParents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionNestedParentsQuery, GetCollectionNestedParentsQueryVariables>;
export const PreviewCollectionVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PreviewCollectionVariants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PreviewCollectionVariantsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previewCollectionVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<PreviewCollectionVariantsQuery, PreviewCollectionVariantsQueryVariables>;
export const AssignCollectionsToChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignCollectionsToChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignCollectionsToChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignCollectionsToChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<AssignCollectionsToChannelMutation, AssignCollectionsToChannelMutationVariables>;
export const RemoveCollectionsFromChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCollectionsFromChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveCollectionsFromChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCollectionsFromChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<RemoveCollectionsFromChannelMutation, RemoveCollectionsFromChannelMutationVariables>;
export const DeleteCollectionsBulkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCollectionsBulk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeleteCollectionsBulkMutation, DeleteCollectionsBulkMutationVariables>;
export const GetCheckersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCheckers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shippingEligibilityCheckers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"list"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetCheckersQuery, GetCheckersQueryVariables>;
export const DeleteCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteCountryMutation, DeleteCountryMutationVariables>;
export const GetCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetCountryQuery, GetCountryQueryVariables>;
export const CreateCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCountryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateCountryMutation, CreateCountryMutationVariables>;
export const DeleteCustomerAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomerAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomerAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>;
export const GetCustomerWithUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerWithUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerWithUserQuery, GetCustomerWithUserQueryVariables>;
export const GetCustomerOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerOrdersQuery, GetCustomerOrdersQueryVariables>;
export const AddNoteToCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNoteToCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddNoteToCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNoteToCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Customer"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Customer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Address"}}]}}]}}]} as unknown as DocumentNode<AddNoteToCustomerMutation, AddNoteToCustomerMutationVariables>;
export const ReindexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Reindex"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reindex"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ReindexMutation, ReindexMutationVariables>;
export const SearchProductsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchProductsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"productVariantId"}},{"kind":"Field","name":{"kind":"Name","value":"productVariantName"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}}]}}]}}]} as unknown as DocumentNode<SearchProductsAdminQuery, SearchProductsAdminQueryVariables>;
export const SearchFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchFacetValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"facetValue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchFacetValuesQuery, SearchFacetValuesQueryVariables>;
export const SearchCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchCollectionsQuery, SearchCollectionsQueryVariables>;
export const SearchGetAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchGetAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"productVariantName"}},{"kind":"Field","name":{"kind":"Name","value":"productAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariantAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchGetAssetsQuery, SearchGetAssetsQueryVariables>;
export const SearchGetPricesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchGetPrices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PriceRange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SinglePrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PriceRange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SinglePrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchGetPricesQuery, SearchGetPricesQueryVariables>;
export const CreateDraftOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDraftOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDraftOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<CreateDraftOrderMutation, CreateDraftOrderMutationVariables>;
export const AddItemToDraftOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddItemToDraftOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddItemToDraftOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addItemToDraftOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<AddItemToDraftOrderMutation, AddItemToDraftOrderMutationVariables>;
export const AdjustDraftOrderLineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdjustDraftOrderLine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdjustDraftOrderLineInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustDraftOrderLine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<AdjustDraftOrderLineMutation, AdjustDraftOrderLineMutationVariables>;
export const RemoveDraftOrderLineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveDraftOrderLine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderLineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeDraftOrderLine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderLineId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderLineId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<RemoveDraftOrderLineMutation, RemoveDraftOrderLineMutationVariables>;
export const SetCustomerForDraftOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCustomerForDraftOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCustomerForDraftOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<SetCustomerForDraftOrderMutation, SetCustomerForDraftOrderMutationVariables>;
export const SetDraftOrderShippingAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetDraftOrderShippingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setDraftOrderShippingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<SetDraftOrderShippingAddressMutation, SetDraftOrderShippingAddressMutationVariables>;
export const SetDraftOrderBillingAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetDraftOrderBillingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setDraftOrderBillingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<SetDraftOrderBillingAddressMutation, SetDraftOrderBillingAddressMutationVariables>;
export const ApplyCouponCodeToDraftOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ApplyCouponCodeToDraftOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applyCouponCodeToDraftOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"couponCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"couponCodes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<ApplyCouponCodeToDraftOrderMutation, ApplyCouponCodeToDraftOrderMutationVariables>;
export const RemoveCouponCodeFromDraftOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCouponCodeFromDraftOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCouponCodeFromDraftOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"couponCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"couponCodes"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<RemoveCouponCodeFromDraftOrderMutation, RemoveCouponCodeFromDraftOrderMutationVariables>;
export const DraftOrderEligibleShippingMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DraftOrderEligibleShippingMethods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eligibleShippingMethodsForDraftOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<DraftOrderEligibleShippingMethodsQuery, DraftOrderEligibleShippingMethodsQueryVariables>;
export const SetDraftOrderShippingMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetDraftOrderShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setDraftOrderShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"shippingMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<SetDraftOrderShippingMethodMutation, SetDraftOrderShippingMethodMutationVariables>;
export const GetOrderPlacedAtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderPlacedAt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"orderPlacedAt"}}]}}]}}]} as unknown as DocumentNode<GetOrderPlacedAtQuery, GetOrderPlacedAtQueryVariables>;
export const IdTest1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IdTest1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"5"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<IdTest1Query, IdTest1QueryVariables>;
export const IdTest2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IdTest2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<IdTest2Query, IdTest2QueryVariables>;
export const IdTest3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IdTest3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<IdTest3Query, IdTest3QueryVariables>;
export const IdTest4Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IdTest4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"featuredAssetId"},"value":{"kind":"StringValue","value":"T_3","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<IdTest4Mutation, IdTest4MutationVariables>;
export const IdTest5Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IdTest5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"translations"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"EnumValue","value":"en"}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"changed","block":false}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<IdTest5Mutation, IdTest5MutationVariables>;
export const IdTest6Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IdTest6"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<IdTest6Query, IdTest6QueryVariables>;
export const IdTest7Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IdTest7"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<IdTest7Mutation, IdTest7MutationVariables>;
export const IdTest8Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IdTest8"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<IdTest8Mutation, IdTest8MutationVariables>;
export const IdTest9Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IdTest9"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<IdTest9Query, IdTest9QueryVariables>;
export const IdTest10Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IdTest10"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment2"}}]}}]} as unknown as DocumentNode<IdTest10Query, IdTest10QueryVariables>;
export const IdTest11Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IdTest11"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment1_1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment3_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment2_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment3_1"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProdFragment1_1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProdFragment2_1"}}]}}]} as unknown as DocumentNode<IdTest11Query, IdTest11QueryVariables>;
export const GetFacetWithValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFacetWithValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetWithValues"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetWithValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}}]} as unknown as DocumentNode<GetFacetWithValuesQuery, GetFacetWithValuesQueryVariables>;
export const DeleteFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFacetValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFacetValues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"force"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteFacetValuesMutation, DeleteFacetValuesMutationVariables>;
export const DeleteFacetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFacet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFacet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"force"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteFacetMutation, DeleteFacetMutationVariables>;
export const GetProductWithFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductWithFacetValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductWithFacetValuesQuery, GetProductWithFacetValuesQueryVariables>;
export const GetProductListWithVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductListWithVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetProductListWithVariantsQuery, GetProductListWithVariantsQueryVariables>;
export const CreateFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFacetValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFacetValueInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFacetValues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateFacetValuesMutation, CreateFacetValuesMutationVariables>;
export const UpdateFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFacetValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFacetValueInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFacetValues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateFacetValuesMutation, UpdateFacetValuesMutationVariables>;
export const AssignFacetsToChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignFacetsToChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignFacetsToChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignFacetsToChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AssignFacetsToChannelMutation, AssignFacetsToChannelMutationVariables>;
export const RemoveFacetsFromChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFacetsFromChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveFacetsFromChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFacetsFromChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetInUseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"productCount"}},{"kind":"Field","name":{"kind":"Name","value":"variantCount"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveFacetsFromChannelMutation, RemoveFacetsFromChannelMutationVariables>;
export const GetGlobalSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGlobalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GlobalSettings"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GlobalSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"availableLanguages"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"serverConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderProcess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permittedAssetTypes"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"assignable"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customFieldConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGlobalSettingsQuery, GetGlobalSettingsQueryVariables>;
export const CreateAdministratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdministrator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAdministratorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdministrator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Administrator"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Administrator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Administrator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAdministratorMutation, CreateAdministratorMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithVariants"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithVariants"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const GetProductWithVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductWithVariants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithVariants"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<GetProductWithVariantsQuery, GetProductWithVariantsQueryVariables>;
export const GetProductListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetProductListQuery, GetProductListQueryVariables>;
export const CreateProductVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductVariants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductVariantInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<CreateProductVariantsMutation, CreateProductVariantsMutationVariables>;
export const UpdateProductVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProductVariants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductVariantInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<UpdateProductVariantsMutation, UpdateProductVariantsMutationVariables>;
export const UpdateTaxRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTaxRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaxRateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTaxRate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaxRate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaxRate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxRate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateTaxRateMutation, UpdateTaxRateMutationVariables>;
export const CreateFacetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFacet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFacetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFacet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetWithValues"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetWithValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}}]} as unknown as DocumentNode<CreateFacetMutation, CreateFacetMutationVariables>;
export const UpdateFacetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFacet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFacetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFacet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetWithValues"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetWithValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}}]} as unknown as DocumentNode<UpdateFacetMutation, UpdateFacetMutationVariables>;
export const GetCustomerListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetCustomerListQuery, GetCustomerListQueryVariables>;
export const GetAssetListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssetList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AssetListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<GetAssetListQuery, GetAssetListQueryVariables>;
export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Role"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Role"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const CreateCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<CreateCollectionMutation, CreateCollectionMutationVariables>;
export const UpdateCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Collection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<UpdateCollectionMutation, UpdateCollectionMutationVariables>;
export const GetCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderListOptions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Customer"}},{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Customer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Address"}}]}}]}}]} as unknown as DocumentNode<GetCustomerQuery, GetCustomerQueryVariables>;
export const AttemptLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttemptLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rememberMe"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"rememberMe"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rememberMe"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrentUser"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<AttemptLoginMutation, AttemptLoginMutationVariables>;
export const GetCountryListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountryList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetCountryListQuery, GetCountryListQueryVariables>;
export const UpdateCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCountryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateCountryMutation, UpdateCountryMutationVariables>;
export const GetFacetListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFacetList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FacetListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetWithValues"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FacetWithValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Facet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FacetValue"}}]}}]}}]} as unknown as DocumentNode<GetFacetListQuery, GetFacetListQueryVariables>;
export const GetFacetListSimpleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFacetListSimple"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FacetListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetFacetListSimpleQuery, GetFacetListSimpleQueryVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const GetProductSimpleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductSimple"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetProductSimpleQuery, GetProductSimpleQueryVariables>;
export const GetStockMovementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStockMovement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VariantWithStock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VariantWithStock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockMovements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockMovement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetStockMovementQuery, GetStockMovementQueryVariables>;
export const GetRunningJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRunningJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JobListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"queueName"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetRunningJobsQuery, GetRunningJobsQueryVariables>;
export const CreatePromotionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePromotion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePromotionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPromotion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Promotion"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Promotion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Promotion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"conditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreatePromotionMutation, CreatePromotionMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrentUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const CreateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Channel"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageNotAvailableError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Channel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Channel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"availableCurrencyCodes"}},{"kind":"Field","name":{"kind":"Name","value":"defaultCurrencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"defaultLanguageCode"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingZone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultTaxZone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricesIncludeTax"}}]}}]} as unknown as DocumentNode<CreateChannelMutation, CreateChannelMutationVariables>;
export const DeleteProductVariantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProductVariant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProductVariant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteProductVariantMutation, DeleteProductVariantMutationVariables>;
export const AssignProductsToChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignProductsToChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignProductsToChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignProductsToChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithVariants"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<AssignProductsToChannelMutation, AssignProductsToChannelMutationVariables>;
export const RemoveProductsFromChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProductsFromChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveProductsFromChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProductsFromChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithVariants"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<RemoveProductsFromChannelMutation, RemoveProductsFromChannelMutationVariables>;
export const AssignProductVariantsToChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignProductVariantsToChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignProductVariantsToChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignProductVariantsToChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<AssignProductVariantsToChannelMutation, AssignProductVariantsToChannelMutationVariables>;
export const RemoveProductVariantsFromChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProductVariantsFromChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveProductVariantsFromChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProductVariantsFromChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<RemoveProductVariantsFromChannelMutation, RemoveProductVariantsFromChannelMutationVariables>;
export const UpdateAssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAsset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAssetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAsset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<UpdateAssetMutation, UpdateAssetMutationVariables>;
export const DeleteAssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAsset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAssetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAsset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteAssetMutation, DeleteAssetMutationVariables>;
export const UpdateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Channel"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageNotAvailableError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Channel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Channel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"availableCurrencyCodes"}},{"kind":"Field","name":{"kind":"Name","value":"defaultCurrencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"defaultLanguageCode"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingZone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultTaxZone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricesIncludeTax"}}]}}]} as unknown as DocumentNode<UpdateChannelMutation, UpdateChannelMutationVariables>;
export const GetCustomerHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryEntryListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"administrator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerHistoryQuery, GetCustomerHistoryQueryVariables>;
export const GetOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<GetOrderQuery, GetOrderQueryVariables>;
export const CreateCustomerGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCustomerGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroup"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerGroupMutation, CreateCustomerGroupMutationVariables>;
export const RemoveCustomersFromGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCustomersFromGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCustomersFromGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerGroupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroup"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<RemoveCustomersFromGroupMutation, RemoveCustomersFromGroupMutationVariables>;
export const CreateFulfillmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFulfillment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FulfillOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFulfillmentToOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Fulfillment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFulfillmentError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfillmentHandlerError"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Fulfillment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fulfillment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<CreateFulfillmentMutation, CreateFulfillmentMutationVariables>;
export const TransitFulfillmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TransitFulfillment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transitionFulfillmentToState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Fulfillment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FulfillmentStateTransitionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"transitionError"}},{"kind":"Field","name":{"kind":"Name","value":"fromState"}},{"kind":"Field","name":{"kind":"Name","value":"toState"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Fulfillment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fulfillment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<TransitFulfillmentMutation, TransitFulfillmentMutationVariables>;
export const GetOrderFulfillmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderFulfillments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLine"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderFulfillmentsQuery, GetOrderFulfillmentsQueryVariables>;
export const GetOrderListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Order"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetOrderListQuery, GetOrderListQueryVariables>;
export const CreateAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}}]}}]} as unknown as DocumentNode<CreateAddressMutation, CreateAddressMutationVariables>;
export const UpdateAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAddressMutation, UpdateAddressMutationVariables>;
export const CreateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Customer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Customer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Address"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const UpdateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Customer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Customer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Address"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const DeleteCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export const UpdateCustomerNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCustomerNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerNoteMutation, UpdateCustomerNoteMutationVariables>;
export const DeleteCustomerNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomerNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomerNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerNoteMutation, DeleteCustomerNoteMutationVariables>;
export const UpdateCustomerGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCustomerGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroup"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerGroupMutation, UpdateCustomerGroupMutationVariables>;
export const DeleteCustomerGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomerGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomerGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerGroupMutation, DeleteCustomerGroupMutationVariables>;
export const GetCustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroupListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetCustomerGroupsQuery, GetCustomerGroupsQueryVariables>;
export const GetCustomerGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"customers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerGroupQuery, GetCustomerGroupQueryVariables>;
export const AddCustomersToGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCustomersToGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCustomersToGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerGroupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroup"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<AddCustomersToGroupMutation, AddCustomersToGroupMutationVariables>;
export const GetCustomerWithGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerWithGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerWithGroupsQuery, GetCustomerWithGroupsQueryVariables>;
export const AdminTransitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminTransition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transitionOrderToState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Order"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderStateTransitionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"transitionError"}},{"kind":"Field","name":{"kind":"Name","value":"fromState"}},{"kind":"Field","name":{"kind":"Name","value":"toState"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Order"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<AdminTransitionMutation, AdminTransitionMutationVariables>;
export const CancelOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CanceledOrder"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CanceledOrder"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<CancelOrderMutation, CancelOrderMutationVariables>;
export const UpdateGlobalSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGlobalSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateGlobalSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGlobalSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GlobalSettings"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GlobalSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"availableLanguages"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"serverConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderProcess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permittedAssetTypes"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"assignable"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customFieldConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateGlobalSettingsMutation, UpdateGlobalSettingsMutationVariables>;
export const UpdateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Role"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Role"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const GetProductsWithVariantPricesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsWithVariantPrices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsWithVariantPricesQuery, GetProductsWithVariantPricesQueryVariables>;
export const CreateProductOptionGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductOptionGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductOptionGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductOptionGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductOptionGroup"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductOptionGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOptionGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateProductOptionGroupMutation, CreateProductOptionGroupMutationVariables>;
export const AddOptionGroupToProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddOptionGroupToProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"optionGroupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addOptionGroupToProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"optionGroupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"optionGroupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithOptions"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithOptions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<AddOptionGroupToProductMutation, AddOptionGroupToProductMutationVariables>;
export const CreateShippingMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateShippingMethodInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethod"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"calculator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<CreateShippingMethodMutation, CreateShippingMethodMutationVariables>;
export const SettlePaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SettlePayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settlePayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SettlePaymentError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentErrorMessage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]} as unknown as DocumentNode<SettlePaymentMutation, SettlePaymentMutationVariables>;
export const GetOrderHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryEntryListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"administrator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderHistoryQuery, GetOrderHistoryQueryVariables>;
export const UpdateShippingMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateShippingMethodInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethod"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"calculator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateShippingMethodMutation, UpdateShippingMethodMutationVariables>;
export const GetAssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAsset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]} as unknown as DocumentNode<GetAssetQuery, GetAssetQueryVariables>;
export const GetAssetFragmentFirstDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssetFragmentFirst"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFragFirst"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFragFirst"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}}]} as unknown as DocumentNode<GetAssetFragmentFirstQuery, GetAssetFragmentFirstQueryVariables>;
export const CreateAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAssetInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAssets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetWithTagsAndFocalPoint"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MimeTypeError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetWithTagsAndFocalPoint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CreateAssetsMutation, CreateAssetsMutationVariables>;
export const DeleteShippingMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteShippingMethodMutation, DeleteShippingMethodMutationVariables>;
export const AssignPromotionToChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignPromotionToChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignPromotionsToChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignPromotionsToChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AssignPromotionToChannelMutation, AssignPromotionToChannelMutationVariables>;
export const RemovePromotionFromChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemovePromotionFromChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemovePromotionsFromChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePromotionsFromChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<RemovePromotionFromChannelMutation, RemovePromotionFromChannelMutationVariables>;
export const GetTaxRatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxRates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaxRateListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxRates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaxRate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxRate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetTaxRatesQuery, GetTaxRatesQueryVariables>;
export const GetShippingMethodListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetShippingMethodList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"calculator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetShippingMethodListQuery, GetShippingMethodListQueryVariables>;
export const GetCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const TransitionPaymentToStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TransitionPaymentToState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transitionPaymentToState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentStateTransitionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transitionError"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]} as unknown as DocumentNode<TransitionPaymentToStateMutation, TransitionPaymentToStateMutationVariables>;
export const GetProductVariantListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductVariantList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantListOptions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetProductVariantListQuery, GetProductVariantListQueryVariables>;
export const DeletePromotionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePromotion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePromotion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeletePromotionMutation, DeletePromotionMutationVariables>;
export const GetChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelsQuery, GetChannelsQueryVariables>;
export const UpdateAdministratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAdministrator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAdministratorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdministrator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Administrator"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Administrator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Administrator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAdministratorMutation, UpdateAdministratorMutationVariables>;
export const CancelJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"settledAt"}}]}}]}}]} as unknown as DocumentNode<CancelJobMutation, CancelJobMutationVariables>;
export const UpdateOptionGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOptionGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductOptionGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductOptionGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateOptionGroupMutation, UpdateOptionGroupMutationVariables>;
export const GetFulfillmentHandlersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFulfillmentHandlers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfillmentHandlers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}}]}}]}}]}}]} as unknown as DocumentNode<GetFulfillmentHandlersQuery, GetFulfillmentHandlersQueryVariables>;
export const GetOrderWithModificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderWithModifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithModifications"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithModifications"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"orderPlacedQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"linePrice"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discountedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedUnitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"priceChange"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refund"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"promotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentSource"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<GetOrderWithModificationsQuery, GetOrderWithModificationsQueryVariables>;
export const ModifyOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ModifyOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifyOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithModifications"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithModifications"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"orderPlacedQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"linePrice"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discountedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedUnitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"priceChange"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refund"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"promotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentSource"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<ModifyOrderMutation, ModifyOrderMutationVariables>;
export const AddManualPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddManualPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ManualPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addManualPaymentToOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithModifications"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithModifications"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"orderPlacedQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"linePrice"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discountedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedLinePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"proratedUnitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"priceChange"}},{"kind":"Field","name":{"kind":"Name","value":"isSettled"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refund"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"promotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"adjustmentSource"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"amountWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<AddManualPaymentMutation, AddManualPaymentMutationVariables>;
export const DeletePromotionAdHoc1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePromotionAdHoc1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePromotion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeletePromotionAdHoc1Mutation, DeletePromotionAdHoc1MutationVariables>;
export const GetTaxRateListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxRateList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaxRateListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxRates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetTaxRateListQuery, GetTaxRateListQueryVariables>;
export const GetOrderWithLineCalculatedPropsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderWithLineCalculatedProps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderWithLineCalculatedPropsQuery, GetOrderWithLineCalculatedPropsQueryVariables>;
export const GetOrderListFulfillmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderListFulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderListFulfillmentsQuery, GetOrderListFulfillmentsQueryVariables>;
export const GetOrderFulfillmentItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderFulfillmentItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Fulfillment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Fulfillment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fulfillment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<GetOrderFulfillmentItemsQuery, GetOrderFulfillmentItemsQueryVariables>;
export const RefundOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefundOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefundOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refundOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Refund"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Refund"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Refund"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"items"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]} as unknown as DocumentNode<RefundOrderMutation, RefundOrderMutationVariables>;
export const SettleRefundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SettleRefund"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettleRefundInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settleRefund"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Refund"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Refund"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Refund"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"items"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]} as unknown as DocumentNode<SettleRefundMutation, SettleRefundMutationVariables>;
export const AddNoteToOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNoteToOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddNoteToOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNoteToOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddNoteToOrderMutation, AddNoteToOrderMutationVariables>;
export const UpdateOrderNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrderNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOrderNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrderNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}}]}}]}}]} as unknown as DocumentNode<UpdateOrderNoteMutation, UpdateOrderNoteMutationVariables>;
export const DeleteOrderNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteOrderNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOrderNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteOrderNoteMutation, DeleteOrderNoteMutationVariables>;
export const GetOrderWithPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderWithPayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderWithPaymentsQuery, GetOrderWithPaymentsQueryVariables>;
export const GetOrderLineFulfillmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderLineFulfillments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fulfillmentLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfillment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderLineFulfillmentsQuery, GetOrderLineFulfillmentsQueryVariables>;
export const GetOrderListWithQtyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderListWithQty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderListWithQtyQuery, GetOrderListWithQtyQueryVariables>;
export const CancelPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentStateTransitionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transitionError"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CancelPaymentError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentErrorMessage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]} as unknown as DocumentNode<CancelPaymentMutation, CancelPaymentMutationVariables>;
export const CreatePaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePaymentMethodInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethod"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"handler"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;
export const UpdatePaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePaymentMethodInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethod"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"handler"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>;
export const GetPaymentMethodHandlersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentMethodHandlers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethodHandlers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetPaymentMethodHandlersQuery, GetPaymentMethodHandlersQueryVariables>;
export const GetPaymentMethodCheckersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentMethodCheckers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethodEligibilityCheckers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetPaymentMethodCheckersQuery, GetPaymentMethodCheckersQueryVariables>;
export const GetPaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethod"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"handler"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetPaymentMethodQuery, GetPaymentMethodQueryVariables>;
export const GetPaymentMethodListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentMethodList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethodListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"handler"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetPaymentMethodListQuery, GetPaymentMethodListQueryVariables>;
export const DeletePaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"force"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>;
export const AddManualPayment2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddManualPayment2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ManualPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addManualPaymentToOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderWithLines"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingAddress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Payment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Payment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderWithLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"}},{"kind":"Field","name":{"kind":"Name","value":"linePriceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"surcharges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"subTotalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"shippingWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Payment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCode"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderLineId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]} as unknown as DocumentNode<AddManualPayment2Mutation, AddManualPayment2MutationVariables>;
export const GetProductOptionGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductOptionGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productOptionGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductOptionGroupQuery, GetProductOptionGroupQueryVariables>;
export const UpdateProductOptionGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProductOptionGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductOptionGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductOptionGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductOptionGroup"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductOptionGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOptionGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateProductOptionGroupMutation, UpdateProductOptionGroupMutationVariables>;
export const CreateProductOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductOptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductOption"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProductOptionMutation, CreateProductOptionMutationVariables>;
export const UpdateProductOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProductOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductOptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductOption"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}}]}}]}}]} as unknown as DocumentNode<UpdateProductOptionMutation, UpdateProductOptionMutationVariables>;
export const DeleteProductOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProductOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProductOption"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteProductOptionMutation, DeleteProductOptionMutationVariables>;
export const RemoveOptionGroupFromProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveOptionGroupFromProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"optionGroupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeOptionGroupFromProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"optionGroupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"optionGroupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"force"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithOptions"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOptionInUseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"optionGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"productVariantCount"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithOptions"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveOptionGroupFromProductMutation, RemoveOptionGroupFromProductMutationVariables>;
export const GetOptionGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOptionGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productOptionGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<GetOptionGroupQuery, GetOptionGroupQueryVariables>;
export const GetProductVariantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductVariant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetProductVariantQuery, GetProductVariantQueryVariables>;
export const GetProductWithVariantListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductWithVariantList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variantListOptions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"variantList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variantListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<GetProductWithVariantListQuery, GetProductWithVariantListQueryVariables>;
export const GetPromotionListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPromotionList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PromotionListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promotions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Promotion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Promotion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Promotion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"conditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetPromotionListQuery, GetPromotionListQueryVariables>;
export const GetPromotionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPromotion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promotion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Promotion"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Promotion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Promotion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"conditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetPromotionQuery, GetPromotionQueryVariables>;
export const UpdatePromotionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePromotion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePromotionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePromotion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Promotion"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Promotion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Promotion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"couponCode"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"conditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdatePromotionMutation, UpdatePromotionMutationVariables>;
export const GetAdjustmentOperationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentOperations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promotionActions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperationDef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promotionConditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConfigurableOperationDef"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConfigurableOperationDef"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableOperationDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<GetAdjustmentOperationsQuery, GetAdjustmentOperationsQueryVariables>;
export const GetRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Role"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<GetRolesQuery, GetRolesQueryVariables>;
export const GetRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Role"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Role"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<GetRoleQuery, GetRoleQueryVariables>;
export const DeleteRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const GetShippingMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethod"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"calculator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"checker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetShippingMethodQuery, GetShippingMethodQueryVariables>;
export const GetEligibilityCheckersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEligibilityCheckers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shippingEligibilityCheckers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}}]}}]}}]}}]} as unknown as DocumentNode<GetEligibilityCheckersQuery, GetEligibilityCheckersQueryVariables>;
export const GetCalculatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCalculators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shippingCalculators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}}]}}]}}]}}]} as unknown as DocumentNode<GetCalculatorsQuery, GetCalculatorsQueryVariables>;
export const TestShippingMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TestShippingMethodInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eligible"}},{"kind":"Field","name":{"kind":"Name","value":"quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]}}]} as unknown as DocumentNode<TestShippingMethodQuery, TestShippingMethodQueryVariables>;
export const TestEligibleMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestEligibleMethods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TestEligibleShippingMethodsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testEligibleShippingMethods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<TestEligibleMethodsQuery, TestEligibleMethodsQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetProductsTake3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsTake3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"3"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsTake3Query, GetProductsTake3QueryVariables>;
export const GetProduct1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetProduct1Query, GetProduct1QueryVariables>;
export const GetProduct2VariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct2Variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_2","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProduct2VariantsQuery, GetProduct2VariantsQueryVariables>;
export const GetProductCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"T_12","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductCollectionQuery, GetProductCollectionQueryVariables>;
export const GetCollectionShopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionShop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionShopQuery, GetCollectionShopQueryVariables>;
export const DisableProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisableProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"enabled"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DisableProductMutation, DisableProductMutationVariables>;
export const GetCollectionVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionVariants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionVariantsQuery, GetCollectionVariantsQueryVariables>;
export const GetCollectionListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionListQuery, GetCollectionListQueryVariables>;
export const GetProductFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductFacetValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductFacetValuesQuery, GetProductFacetValuesQueryVariables>;
export const GetVariantFacetValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVariantFacetValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVariantFacetValuesQuery, GetVariantFacetValuesQueryVariables>;
export const GetCustomerIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerIdsQuery, GetCustomerIdsQueryVariables>;
export const GetStockLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStockLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockLocation"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StockLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<GetStockLocationQuery, GetStockLocationQueryVariables>;
export const GetStockLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStockLocations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StockLocationListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stockLocations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockLocation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StockLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<GetStockLocationsQuery, GetStockLocationsQueryVariables>;
export const CreateStockLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStockLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStockLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStockLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockLocation"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StockLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<CreateStockLocationMutation, CreateStockLocationMutationVariables>;
export const UpdateStockLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStockLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStockLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStockLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockLocation"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StockLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<UpdateStockLocationMutation, UpdateStockLocationMutationVariables>;
export const GetVariantStockLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVariantStockLevels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVariantStockLevelsQuery, GetVariantStockLevelsQueryVariables>;
export const UpdateStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductVariantInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VariantWithStock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VariantWithStock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockMovements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockMovement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<UpdateStockMutation, UpdateStockMutationVariables>;
export const TransitionFulfillmentToStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TransitionFulfillmentToState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transitionFulfillmentToState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fulfillment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"nextStates"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FulfillmentStateTransitionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transitionError"}}]}}]}}]}}]} as unknown as DocumentNode<TransitionFulfillmentToStateMutation, TransitionFulfillmentToStateMutationVariables>;
export const UpdateOrderCustomFieldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrderCustomFields"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setOrderCustomFields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOrderCustomFieldsMutation, UpdateOrderCustomFieldsMutationVariables>;
export const TestGetStockLocationsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestGetStockLocationsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StockLocationListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stockLocations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<TestGetStockLocationsListQuery, TestGetStockLocationsListQueryVariables>;
export const TestGetStockLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestGetStockLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<TestGetStockLocationQuery, TestGetStockLocationQueryVariables>;
export const TestCreateStockLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestCreateStockLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStockLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStockLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<TestCreateStockLocationMutation, TestCreateStockLocationMutationVariables>;
export const TestUpdateStockLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestUpdateStockLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStockLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStockLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<TestUpdateStockLocationMutation, TestUpdateStockLocationMutationVariables>;
export const TestDeleteStockLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestDeleteStockLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteStockLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStockLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<TestDeleteStockLocationMutation, TestDeleteStockLocationMutationVariables>;
export const TestGetStockLevelsForVariantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestGetStockLevelsForVariant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}}]}}]}}]}}]} as unknown as DocumentNode<TestGetStockLevelsForVariantQuery, TestGetStockLevelsForVariantQueryVariables>;
export const TestSetStockLevelInLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestSetStockLevelInLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductVariantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"input"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}}]}}]}}]}}]} as unknown as DocumentNode<TestSetStockLevelInLocationMutation, TestSetStockLevelInLocationMutationVariables>;
export const TestAssignStockLocationToChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestAssignStockLocationToChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignStockLocationsToChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignStockLocationsToChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TestAssignStockLocationToChannelMutation, TestAssignStockLocationToChannelMutationVariables>;
export const TestRemoveStockLocationsFromChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestRemoveStockLocationsFromChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveStockLocationsFromChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeStockLocationsFromChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TestRemoveStockLocationsFromChannelMutation, TestRemoveStockLocationsFromChannelMutationVariables>;
export const GetTagListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTagList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TagListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetTagListQuery, GetTagListQueryVariables>;
export const GetTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetTagQuery, GetTagQueryVariables>;
export const CreateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTagInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>;
export const UpdateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTagInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UpdateTagMutation, UpdateTagMutationVariables>;
export const DeleteTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>;
export const GetTaxCategoryListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxCategoryList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}}]}}]}}]} as unknown as DocumentNode<GetTaxCategoryListQuery, GetTaxCategoryListQueryVariables>;
export const GetTaxCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}}]}}]} as unknown as DocumentNode<GetTaxCategoryQuery, GetTaxCategoryQueryVariables>;
export const CreateTaxCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTaxCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaxCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTaxCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}}]}}]} as unknown as DocumentNode<CreateTaxCategoryMutation, CreateTaxCategoryMutationVariables>;
export const UpdateTaxCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTaxCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaxCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTaxCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}}]}}]} as unknown as DocumentNode<UpdateTaxCategoryMutation, UpdateTaxCategoryMutationVariables>;
export const DeleteTaxCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTaxCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTaxCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteTaxCategoryMutation, DeleteTaxCategoryMutationVariables>;
export const GetTaxRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxRate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaxRate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaxRate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxRate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetTaxRateQuery, GetTaxRateQueryVariables>;
export const CreateTaxRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTaxRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaxRateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTaxRate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaxRate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaxRate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxRate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateTaxRateMutation, CreateTaxRateMutationVariables>;
export const DeleteTaxRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTaxRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTaxRate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteTaxRateMutation, DeleteTaxRateMutationVariables>;
export const DeleteZoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteZone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteZone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteZoneMutation, DeleteZoneMutationVariables>;
export const GetZonesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetZones"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ZoneListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"zones"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetZonesQuery, GetZonesQueryVariables>;
export const GetZoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetZone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"zone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Zone"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Zone"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Zone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}}]} as unknown as DocumentNode<GetZoneQuery, GetZoneQueryVariables>;
export const GetActiveChannelWithZoneMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveChannelWithZoneMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeChannel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingZone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetActiveChannelWithZoneMembersQuery, GetActiveChannelWithZoneMembersQueryVariables>;
export const CreateZoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateZone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateZoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createZone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Zone"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Zone"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Zone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}}]} as unknown as DocumentNode<CreateZoneMutation, CreateZoneMutationVariables>;
export const UpdateZoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateZone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateZoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateZone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Zone"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Zone"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Zone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}}]} as unknown as DocumentNode<UpdateZoneMutation, UpdateZoneMutationVariables>;
export const AddMembersToZoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMembersToZone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMembersToZone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"zoneId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}}},{"kind":"Argument","name":{"kind":"Name","value":"memberIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Zone"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Zone"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Zone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}}]} as unknown as DocumentNode<AddMembersToZoneMutation, AddMembersToZoneMutationVariables>;
export const RemoveMembersFromZoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveMembersFromZone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMembersFromZone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"zoneId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}}},{"kind":"Argument","name":{"kind":"Name","value":"memberIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Zone"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Zone"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Zone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}}]}}]} as unknown as DocumentNode<RemoveMembersFromZoneMutation, RemoveMembersFromZoneMutationVariables>;