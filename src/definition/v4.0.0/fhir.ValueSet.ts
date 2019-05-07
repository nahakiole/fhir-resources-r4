import {
    Element,
    ContactDetail,
    Extension,
    Identifier,
    CodeableConcept,
    Meta,
    Narrative,
    UsageContext,
    Coding
} from "./fhir._";

export interface ValueSet {
    /**
     * Extensions for copyright
     */
    _copyright?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for experimental
     */
    _experimental?: Element;
    /**
     * Extensions for immutable
     */
    _immutable?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for publisher
     */
    _publisher?: Element;
    /**
     * Extensions for purpose
     */
    _purpose?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * A set of criteria that define the contents of the value set by including or excluding
     * codes selected from the specified code system(s) that the value set draws from. This is
     * also known as the Content Logical Definition (CLD).
     */
    compose?: ValueSetCompose;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: ValueSet[];
    /**
     * A copyright statement relating to the value set and/or its contents. Copyright statements
     * are generally legal restrictions on the use and publishing of the value set.
     */
    copyright?: string;
    /**
     * The date (and optionally time) when the value set was created or revised (e.g. the
     * 'content logical definition').
     */
    date?: string;
    /**
     * A free text natural language description of the value set from a consumer's perspective.
     * The textual description specifies the span of meanings for concepts to be included within
     * the Value Set Expansion, and also may specify the intended use and limitations of the
     * Value Set.
     */
    description?: string;
    /**
     * A value set can also be "expanded", where the value set is turned into a simple
     * collection of enumerated codes. This element holds the expansion, if it has been
     * performed.
     */
    expansion?: ValueSetExpansion;
    /**
     * A Boolean value to indicate that this value set is authored for testing purposes (or
     * education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this value set when it is represented in
     * other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier[];
    /**
     * If this is set to 'true', then no new versions of the content logical definition can be
     * created.  Note: Other metadata might still change.
     */
    immutable?: boolean;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the value set is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: Meta;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource and that modifies the understanding of the element that contains it
     * and/or the understanding of the containing element's descendants. Usually modifier
     * elements provide negation or qualification. To make the use of extensions safe and
     * manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer is allowed to define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * A natural language name identifying the value set. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the value set.
     */
    publisher?: string;
    /**
     * Explanation of why this value set is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * This is a ValueSet resource
     */
    resourceType?: any;
    /**
     * The status of this value set. Enables tracking the life-cycle of the content. The status
     * of the value set applies to the value set definition (ValueSet.compose) and the
     * associated ValueSet metadata. Expansions do not have a state.
     */
    status?: ValueSetStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the value set.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this value set when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this value set is (or will be) published. This URL can be the
     * target of a canonical reference. It SHALL remain the same when the value set is stored on
     * different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate value set instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the value set when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the value set author and is not expected to be globally unique. For example,
     * it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is
     * also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

/**
 * A set of criteria that define the contents of the value set by including or excluding
 * codes selected from the specified code system(s) that the value set draws from. This is
 * also known as the Content Logical Definition (CLD).
 *
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetCompose {
    /**
     * Extensions for inactive
     */
    _inactive?: Element;
    /**
     * Extensions for lockedDate
     */
    _lockedDate?: Element;
    /**
     * Exclude one or more codes from the value set based on code system filters and/or other
     * value sets.
     */
    exclude?: ValueSetInclude[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Whether inactive codes - codes that are not approved for current use - are in the value
     * set. If inactive = true, inactive codes are to be included in the expansion, if inactive
     * = false, the inactive codes will not be included in the expansion. If absent, the
     * behavior is determined by the implementation, or by the applicable $expand parameters
     * (but generally, inactive codes would be expected to be included).
     */
    inactive?: boolean;
    /**
     * Include one or more codes from a code system or other value set(s).
     */
    include?: ValueSetInclude[];
    /**
     * The Locked Date is  the effective date that is used to determine the version of all
     * referenced Code Systems and Value Set Definitions included in the compose that are not
     * already tied to a specific version.
     */
    lockedDate?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
}

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetInclude {
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * Specifies a concept to be included or excluded.
     */
    concept?: ValueSetConcept[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Select concepts by specify a matching criterion based on the properties (including
     * relationships) defined by the system, or on filters defined by the system. If multiple
     * filters are specified, they SHALL all be true.
     */
    filter?: ValueSetFilter[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * An absolute URI which is the code system from which the selected codes come from.
     */
    system?: string;
    /**
     * Selects the concepts found in this value set (based on its value set definition). This is
     * an absolute URI that is a reference to ValueSet.url.  If multiple value sets are
     * specified this includes the union of the contents of all of the referenced value sets.
     */
    valueSet?: string[];
    /**
     * The version of the code system that the codes are selected from, or the special version
     * '*' for all versions.
     */
    version?: string;
}

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetConcept {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Specifies a code for the concept to be included or excluded.
     */
    code?: string;
    /**
     * Additional representations for this concept when used in this value set - other
     * languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation?: ValueSetDesignation[];
    /**
     * The text to display to the user for this concept in the context of this valueset. If no
     * display is provided, then applications using the value set use the display specified for
     * the code by the system.
     */
    display?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
}

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetDesignation {
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The language this designation is defined for.
     */
    language?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * A code that represents types of uses of designations.
     */
    use?: Coding;
    /**
     * The text value for this designation.
     */
    value?: string;
}

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetFilter {
    /**
     * Extensions for op
     */
    _op?: Element;
    /**
     * Extensions for property
     */
    _property?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * The kind of operation to perform as a part of the filter criteria.
     */
    op?: Op;
    /**
     * A code that identifies a property or a filter defined in the code system.
     */
    property?: string;
    /**
     * The match value may be either a code defined by the system, or a string value, which is a
     * regex match on the literal string of the property value  (if the filter represents a
     * property defined in CodeSystem) or of the system filter value (if the filter represents a
     * filter defined in CodeSystem) when the operation is 'regex', or one of the values (true
     * and false), when the operation is 'exists'.
     */
    value?: string;
}

/**
 * The kind of operation to perform as a part of the filter criteria.
 */
export enum Op {
    DescendentOf = "descendent-of",
    Empty = "=",
    Exists = "exists",
    Generalizes = "generalizes",
    In = "in",
    IsA = "is-a",
    IsNotA = "is-not-a",
    NotIn = "not-in",
    Regex = "regex",
}

/**
 * A value set can also be "expanded", where the value set is turned into a simple
 * collection of enumerated codes. This element holds the expansion, if it has been
 * performed.
 *
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetExpansion {
    /**
     * Extensions for identifier
     */
    _identifier?: Element;
    /**
     * Extensions for offset
     */
    _offset?: Element;
    /**
     * Extensions for timestamp
     */
    _timestamp?: Element;
    /**
     * Extensions for total
     */
    _total?: Element;
    /**
     * The codes that are contained in the value set expansion.
     */
    contains?: ValueSetContains[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * An identifier that uniquely identifies this expansion of the valueset, based on a unique
     * combination of the provided parameters, the system default parameters, and the underlying
     * system code system versions etc. Systems may re-use the same identifier as long as those
     * factors remain the same, and the expansion is the same, but are not required to do so.
     * This is a business identifier.
     */
    identifier?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * If paging is being used, the offset at which this resource starts.  I.e. this resource is
     * a partial view into the expansion. If paging is not being used, this element SHALL NOT be
     * present.
     */
    offset?: number;
    /**
     * A parameter that controlled the expansion process. These parameters may be used by users
     * of expanded value sets to check whether the expansion is suitable for a particular
     * purpose, or to pick the correct expansion.
     */
    parameter?: ValueSetParameter[];
    /**
     * The time at which the expansion was produced by the expanding system.
     */
    timestamp?: string;
    /**
     * The total number of concepts in the expansion. If the number of concept nodes in this
     * resource is less than the stated number, then the server can return more using the offset
     * parameter.
     */
    total?: number;
}

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetContains {
    /**
     * Extensions for abstract
     */
    _abstract?: Element;
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Extensions for inactive
     */
    _inactive?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * If true, this entry is included in the expansion for navigational purposes, and the user
     * cannot select the code directly as a proper value.
     */
    abstract?: boolean;
    /**
     * The code for this item in the expansion hierarchy. If this code is missing the entry in
     * the hierarchy is a place holder (abstract) and does not represent a valid code in the
     * value set.
     */
    code?: string;
    /**
     * Other codes and entries contained under this entry in the hierarchy.
     */
    contains?: ValueSetContains[];
    /**
     * Additional representations for this item - other languages, aliases, specialized
     * purposes, used for particular purposes, etc. These are relevant when the conditions of
     * the expansion do not fix to a single correct representation.
     */
    designation?: ValueSetDesignation[];
    /**
     * The recommended display for this item in the expansion.
     */
    display?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * If the concept is inactive in the code system that defines it. Inactive codes are those
     * that are no longer to be used, but are maintained by the code system for understanding
     * legacy data. It might not be known or specified whether an concept is inactive (and it
     * may depend on the context of use).
     */
    inactive?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * An absolute URI which is the code system in which the code for this item in the expansion
     * is defined.
     */
    system?: string;
    /**
     * The version of the code system from this code was taken. Note that a well-maintained code
     * system does not need the version reported, because the meaning of codes is consistent
     * across versions. However this cannot consistently be assured, and when the meaning is not
     * guaranteed to be consistent, the version SHOULD be exchanged.
     */
    version?: string;
}


/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code
 * systems, intended for use in a particular context. Value sets link between
 * [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSetParameter {
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueCode
     */
    _valueCode?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueUri
     */
    _valueUri?: Element;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * Name of the input parameter to the $expand operation; may be a server-assigned name for
     * additional default or other server-supplied parameters used to control the expansion
     * process.
     */
    name?: string;
    /**
     * The value of the parameter.
     */
    valueBoolean?: boolean;
    /**
     * The value of the parameter.
     */
    valueCode?: string;
    /**
     * The value of the parameter.
     */
    valueDateTime?: string;
    /**
     * The value of the parameter.
     */
    valueDecimal?: number;
    /**
     * The value of the parameter.
     */
    valueInteger?: number;
    /**
     * The value of the parameter.
     */
    valueString?: string;
    /**
     * The value of the parameter.
     */
    valueUri?: string;
}

/**
 * The status of this value set. Enables tracking the life-cycle of the content. The status
 * of the value set applies to the value set definition (ValueSet.compose) and the
 * associated ValueSet metadata. Expansions do not have a state.
 */
export enum ValueSetStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}