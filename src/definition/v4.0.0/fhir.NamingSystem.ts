import {
    Element,
    ContactDetail,
    Extension,
    CodeableConcept,
    Meta,
    Narrative,
    UsageContext,
    Period
} from "./fhir._";

export interface NamingSystem {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for kind
     */
    _kind?: Element;
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
     * Extensions for responsible
     */
    _responsible?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for usage
     */
    _usage?: Element;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: NamingSystem[];
    /**
     * The date  (and optionally time) when the naming system was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the naming system changes.
     */
    date?: string;
    /**
     * A free text natural language description of the naming system from a consumer's
     * perspective. Details about what the namespace identifies including scope, granularity,
     * version labeling, etc.
     */
    description?: string;
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
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the naming system is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind?: Kind;
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
     * A natural language name identifying the naming system. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the naming system.
     */
    publisher?: string;
    /**
     * This is a NamingSystem resource
     */
    resourceType?: any;
    /**
     * The name of the organization that is responsible for issuing identifiers or codes for
     * this namespace and ensuring their non-collision.
     */
    responsible?: string;
    /**
     * The status of this naming system. Enables tracking the life-cycle of the content.
     */
    status?: NamingSystemStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * Categorizes a naming system for easier search by grouping related naming systems.
     */
    type?: CodeableConcept;
    /**
     * Indicates how the system may be identified when referenced in electronic exchange.
     */
    uniqueId?: NamingSystemUniqueId[];
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting
     * characters, use of upper vs. lower case, etc.
     */
    usage?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate naming system instances.
     */
    useContext?: UsageContext[];
}

/**
 * Indicates the purpose for the naming system - what kinds of things does it make unique?
 */
export enum Kind {
    Codesystem = "codesystem",
    Identifier = "identifier",
    Root = "root",
}

/**
 * The status of this naming system. Enables tracking the life-cycle of the content.
 */
export enum NamingSystemStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}

/**
 * A curated namespace that issues unique symbols within that namespace for the
 * identification of concepts, people, devices, etc.  Represents a "System" used within the
 * Identifier and Coding data types.
 */
export interface NamingSystemUniqueId {
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for preferred
     */
    _preferred?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * Notes about the past or intended usage of this identifier.
     */
    comment?: string;
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
     * Identifies the period of time over which this identifier is considered appropriate to
     * refer to the naming system.  Outside of this window, the identifier might be
     * non-deterministic.
     */
    period?: Period;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: boolean;
    /**
     * Identifies the unique identifier scheme used for this particular identifier.
     */
    type?: NamingSystemUniqueIdType;
    /**
     * The string that should be sent over the wire to identify the code system or identifier
     * system.
     */
    value?: string;
}

/**
 * Identifies the unique identifier scheme used for this particular identifier.
 */
export enum NamingSystemUniqueIdType {
    Oid = "oid",
    Other = "other",
    Uri = "uri",
    Uuid = "uuid",
}