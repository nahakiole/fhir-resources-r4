import { Element, ContactDetail, CodeableConcept, Period, Extension, Identifier, Meta, RelatedArtifact, Reference, Narrative, UsageContext, Expression } from "./fhir._";
export interface Measure {
    /**
     * Extensions for approvalDate
     */
    _approvalDate?: Element;
    /**
     * Extensions for clinicalRecommendationStatement
     */
    _clinicalRecommendationStatement?: Element;
    /**
     * Extensions for copyright
     */
    _copyright?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for definition
     */
    _definition?: Element[];
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for disclaimer
     */
    _disclaimer?: Element;
    /**
     * Extensions for experimental
     */
    _experimental?: Element;
    /**
     * Extensions for guidance
     */
    _guidance?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: Element;
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
     * Extensions for rateAggregation
     */
    _rateAggregation?: Element;
    /**
     * Extensions for rationale
     */
    _rationale?: Element;
    /**
     * Extensions for riskAdjustment
     */
    _riskAdjustment?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for subtitle
     */
    _subtitle?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for usage
     */
    _usage?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * The date on which the resource content was approved by the publisher. Approval happens
     * once when the content is officially approved for usage.
     */
    approvalDate?: string;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the
     * content.
     */
    author?: ContactDetail[];
    /**
     * Provides a summary of relevant clinical guidelines or other clinical recommendations
     * supporting the measure.
     */
    clinicalRecommendationStatement?: string;
    /**
     * If this is a composite measure, the scoring method used to combine the component measures
     * to determine the composite score.
     */
    compositeScoring?: CodeableConcept;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Measure[];
    /**
     * A copyright statement relating to the measure and/or its contents. Copyright statements
     * are generally legal restrictions on the use and publishing of the measure.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the measure was published. The date must change when
     * the business version changes and it must change if the status code changes. In addition,
     * it should change when the substantive content of the measure changes.
     */
    date?: string;
    /**
     * Provides a description of an individual term used within the measure.
     */
    definition?: string[];
    /**
     * A free text natural language description of the measure from a consumer's perspective.
     */
    description?: string;
    /**
     * Notices and disclaimers regarding the use of the measure or related to intellectual
     * property (such as code systems) referenced by the measure.
     */
    disclaimer?: string;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: ContactDetail[];
    /**
     * The period during which the measure content was or is planned to be in active use.
     */
    effectivePeriod?: Period;
    /**
     * An individual or organization responsible for officially endorsing the content for use in
     * some setting.
     */
    endorser?: ContactDetail[];
    /**
     * A Boolean value to indicate that this measure is authored for testing purposes (or
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
     * A group of population criteria for the measure.
     */
    group?: MeasureGroup[];
    /**
     * Additional guidance for the measure including how it can be used in a clinical context,
     * and the intent of the measure.
     */
    guidance?: string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this measure when it is represented in other
     * formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Information on whether an increase or decrease in score is the preferred result (e.g., a
     * higher score indicates better quality OR a lower score indicates better quality OR
     * quality is within a range).
     */
    improvementNotation?: CodeableConcept;
    /**
     * A legal or geographic region in which the measure is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The date on which the resource content was last reviewed. Review happens periodically
     * after approval but does not change the original approval date.
     */
    lastReviewDate?: string;
    /**
     * A reference to a Library resource containing the formal logic used by the measure.
     */
    library?: string[];
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
     * A natural language name identifying the measure. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the measure.
     */
    publisher?: string;
    /**
     * Explanation of why this measure is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * Describes how to combine the information calculated, based on logic in each of several
     * populations, into one summarized result.
     */
    rateAggregation?: string;
    /**
     * Provides a succinct statement of the need for the measure. Usually includes statements
     * pertaining to importance criterion: impact, gap in care, and evidence.
     */
    rationale?: string;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic
     * references.
     */
    relatedArtifact?: RelatedArtifact[];
    /**
     * This is a Measure resource
     */
    resourceType?: any;
    /**
     * An individual or organization primarily responsible for review of some aspect of the
     * content.
     */
    reviewer?: ContactDetail[];
    /**
     * A description of the risk adjustment factors that may impact the resulting score for the
     * measure and how they may be accounted for when computing and reporting measure results.
     */
    riskAdjustment?: string;
    /**
     * Indicates how the calculation is performed for the measure, including proportion, ratio,
     * continuous-variable, and cohort. The value set is extensible, allowing additional measure
     * scoring types to be represented.
     */
    scoring?: CodeableConcept;
    /**
     * The status of this measure. Enables tracking the life-cycle of the content.
     */
    status?: MeasureStatus;
    /**
     * The intended subjects for the measure. If this element is not provided, a Patient subject
     * is assumed, but the subject of the measure can be anything.
     */
    subjectCodeableConcept?: CodeableConcept;
    /**
     * The intended subjects for the measure. If this element is not provided, a Patient subject
     * is assumed, but the subject of the measure can be anything.
     */
    subjectReference?: Reference;
    /**
     * An explanatory or alternate title for the measure giving additional information about its
     * content.
     */
    subtitle?: string;
    /**
     * The supplemental data criteria for the measure report, specified as either the name of a
     * valid CQL expression within a referenced library, or a valid FHIR Resource Path.
     */
    supplementalData?: MeasureSupplementalData[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the measure.
     */
    title?: string;
    /**
     * Descriptive topics related to the content of the measure. Topics provide a high-level
     * categorization grouping types of measures that can be useful for filtering and searching.
     */
    topic?: CodeableConcept[];
    /**
     * Indicates whether the measure is used to examine a process, an outcome over time, a
     * patient-reported outcome, or a structure measure such as utilization.
     */
    type?: CodeableConcept[];
    /**
     * An absolute URI that is used to identify this measure when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this measure is (or will be) published. This URL can be the
     * target of a canonical reference. It SHALL remain the same when the measure is stored on
     * different servers.
     */
    url?: string;
    /**
     * A detailed description, from a clinical perspective, of how the measure is used.
     */
    usage?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate measure instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the measure when it is referenced
     * in a specification, model, design or instance. This is an arbitrary value managed by the
     * measure author and is not expected to be globally unique. For example, it might be a
     * timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no
     * expectation that versions can be placed in a lexicographical sequence. To provide a
     * version consistent with the Decision Support Service specification, use the format
     * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets,
     * refer to the Decision Support Service specification. Note that a version is required for
     * non-experimental active artifacts.
     */
    version?: string;
}
/**
 * The Measure resource provides the definition of a quality measure.
 */
export interface MeasureGroup {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Indicates a meaning for the group. This can be as simple as a unique identifier, or it
     * can establish meaning in a broader context by drawing from a terminology, allowing groups
     * to be correlated across measures.
     */
    code?: CodeableConcept;
    /**
     * The human readable description of this population group.
     */
    description?: string;
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
     * A population criteria for the measure.
     */
    population?: MeasurePopulation[];
    /**
     * The stratifier criteria for the measure report, specified as either the name of a valid
     * CQL expression defined within a referenced library or a valid FHIR Resource Path.
     */
    stratifier?: MeasureStratifier[];
}
/**
 * The Measure resource provides the definition of a quality measure.
 */
export interface MeasurePopulation {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * The type of population criteria.
     */
    code?: CodeableConcept;
    /**
     * An expression that specifies the criteria for the population, typically the name of an
     * expression in a library.
     */
    criteria?: Expression;
    /**
     * The human readable description of this population criteria.
     */
    description?: string;
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
 * The Measure resource provides the definition of a quality measure.
 */
export interface MeasureStratifier {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Indicates a meaning for the stratifier. This can be as simple as a unique identifier, or
     * it can establish meaning in a broader context by drawing from a terminology, allowing
     * stratifiers to be correlated across measures.
     */
    code?: CodeableConcept;
    /**
     * A component of the stratifier criteria for the measure report, specified as either the
     * name of a valid CQL expression defined within a referenced library or a valid FHIR
     * Resource Path.
     */
    component?: MeasureComponent[];
    /**
     * An expression that specifies the criteria for the stratifier. This is typically the name
     * of an expression defined within a referenced library, but it may also be a path to a
     * stratifier element.
     */
    criteria?: Expression;
    /**
     * The human readable description of this stratifier criteria.
     */
    description?: string;
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
 * The Measure resource provides the definition of a quality measure.
 */
export interface MeasureComponent {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Indicates a meaning for the stratifier component. This can be as simple as a unique
     * identifier, or it can establish meaning in a broader context by drawing from a
     * terminology, allowing stratifiers to be correlated across measures.
     */
    code?: CodeableConcept;
    /**
     * An expression that specifies the criteria for this component of the stratifier. This is
     * typically the name of an expression defined within a referenced library, but it may also
     * be a path to a stratifier element.
     */
    criteria?: Expression;
    /**
     * The human readable description of this stratifier criteria component.
     */
    description?: string;
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
 * The status of this measure. Enables tracking the life-cycle of the content.
 */
export declare enum MeasureStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
/**
 * The Measure resource provides the definition of a quality measure.
 */
export interface MeasureSupplementalData {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Indicates a meaning for the supplemental data. This can be as simple as a unique
     * identifier, or it can establish meaning in a broader context by drawing from a
     * terminology, allowing supplemental data to be correlated across measures.
     */
    code?: CodeableConcept;
    /**
     * The criteria for the supplemental data. This is typically the name of a valid expression
     * defined within a referenced library, but it may also be a path to a specific data
     * element. The criteria defines the data to be returned for this element.
     */
    criteria?: Expression;
    /**
     * The human readable description of this supplemental data.
     */
    description?: string;
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
     * An indicator of the intended usage for the supplemental data element. Supplemental data
     * indicates the data is additional information requested to augment the measure
     * information. Risk adjustment factor indicates the data is additional information used to
     * calculate risk adjustment factors when applying a risk model to the measure calculation.
     */
    usage?: CodeableConcept[];
}
