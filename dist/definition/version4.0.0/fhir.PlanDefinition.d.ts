import { Element, ContactDetail, Period, Extension, Identifier, CodeableConcept, Meta, RelatedArtifact, Reference, Narrative, UsageContext, DataRequirement, Age, Duration, Timing, TriggerDefinition, Expression, Quantity, Range } from "./fhir._";
export interface PlanDefinition {
    /**
     * Extensions for approvalDate
     */
    _approvalDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for copyright
     */
    _copyright?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for experimental
     */
    _experimental?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publisher
     */
    _publisher?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for purpose
     */
    _purpose?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for subtitle
     */
    _subtitle?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for usage
     */
    _usage?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
    /**
     * An action or group of actions to be taken as part of the plan.
     */
    action?: Array<any[] | boolean | PlanDefinitionAction | number | number | null | string>;
    /**
     * The date on which the resource content was approved by the publisher. Approval happens
     * once when the content is officially approved for usage.
     */
    approvalDate?: string;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the
     * content.
     */
    author?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | PlanDefinition | number | null | string>;
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the plan
     * definition.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the plan definition was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the plan definition changes.
     */
    date?: string;
    /**
     * A free text natural language description of the plan definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * The period during which the plan definition content was or is planned to be in active use.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * An individual or organization responsible for officially endorsing the content for use in
     * some setting.
     */
    endorser?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * A Boolean value to indicate that this plan definition is authored for testing purposes
     * (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For
     * example, weight loss, restoring an activity of daily living, obtaining herd immunity via
     * immunization, meeting a process improvement objective, etc.
     */
    goal?: Array<any[] | boolean | PlanDefinitionGoal | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this plan definition when it is represented
     * in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the plan definition is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library?: string[];
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: any[] | boolean | Meta | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A natural language name identifying the plan definition. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the plan definition.
     */
    publisher?: string;
    /**
     * Explanation of why this plan definition is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic
     * references.
     */
    relatedArtifact?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * This is a PlanDefinition resource
     */
    resourceType: any;
    /**
     * An individual or organization primarily responsible for review of some aspect of the
     * content.
     */
    reviewer?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * The status of this plan definition. Enables tracking the life-cycle of the content.
     */
    status?: FhirPlanDefinitionStatus;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * An explanatory or alternate title for the plan definition giving additional information
     * about its content.
     */
    subtitle?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the plan definition.
     */
    title?: string;
    /**
     * Descriptive topics related to the content of the plan definition. Topics provide a
     * high-level categorization of the definition that can be useful for filtering and
     * searching.
     */
    topic?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A high-level category for the plan definition that distinguishes the kinds of systems
     * that would be interested in the plan definition.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * An absolute URI that is used to identify this plan definition when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this plan definition is (or will be) published. This URL can be
     * the target of a canonical reference. It SHALL remain the same when the plan definition is
     * stored on different servers.
     */
    url?: string;
    /**
     * A detailed description of how the plan definition is used from a clinical perspective.
     */
    usage?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate plan definition instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the plan definition when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the plan definition author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     * To provide a version consistent with the Decision Support Service specification, use the
     * format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge
     * assets, refer to the Decision Support Service specification. Note that a version is
     * required for non-experimental active artifacts.
     */
    version?: string;
}
export interface PlanDefinitionAction {
    /**
     * Extensions for cardinalityBehavior
     */
    _cardinalityBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for definitionCanonical
     */
    _definitionCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for definitionUri
     */
    _definitionUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for goalId
     */
    _goalId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for groupingBehavior
     */
    _groupingBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for precheckBehavior
     */
    _precheckBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for prefix
     */
    _prefix?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for priority
     */
    _priority?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for requiredBehavior
     */
    _requiredBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for selectionBehavior
     */
    _selectionBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for textEquivalent
     */
    _textEquivalent?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Sub actions that are contained within the action. The behavior of this action determines
     * the functionality of the sub-actions. For example, a selection behavior of at-most-one
     * indicates that of the sub-actions, at most one may be chosen as part of realizing the
     * action definition.
     */
    action?: Array<any[] | boolean | PlanDefinitionAction | number | number | null | string>;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: CardinalityBehavior;
    /**
     * A code that provides meaning for the action or action group. For example, a section may
     * have a LOINC code for the section of a documentation template.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * An expression that describes applicability criteria or start/stop conditions for the
     * action.
     */
    condition?: Array<any[] | boolean | PlanDefinitionCondition | number | number | null | string>;
    /**
     * A reference to an ActivityDefinition that describes the action to be taken in detail, or
     * a PlanDefinition that describes a series of actions to be taken.
     */
    definitionCanonical?: string;
    /**
     * A reference to an ActivityDefinition that describes the action to be taken in detail, or
     * a PlanDefinition that describes a series of actions to be taken.
     */
    definitionUri?: string;
    /**
     * A brief description of the action used to provide a summary to display to the user.
     */
    description?: string;
    /**
     * Didactic or other informational resources associated with the action that can be provided
     * to the CDS recipient. Information resources can include inline text commentary and links
     * to web resources.
     */
    documentation?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * Customizations that should be applied to the statically defined resource. For example, if
     * the dosage of a medication must be computed based on the patient's weight, a
     * customization would be used to specify an expression that calculated the weight, and the
     * path on the resource that would contain the result.
     */
    dynamicValue?: Array<any[] | boolean | PlanDefinitionDynamicValue | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Identifies goals that this action supports. The reference must be to a goal element
     * defined within this plan definition.
     */
    goalId?: string[];
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: GroupingBehavior;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Defines input data requirements for the action.
     */
    input?: Array<any[] | boolean | DataRequirement | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Defines the outputs of the action, if any.
     */
    output?: Array<any[] | boolean | DataRequirement | number | number | null | string>;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: Array<any[] | boolean | PlanDefinitionParticipant | number | number | null | string>;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: PrecheckBehavior;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: string;
    /**
     * A description of why this action is necessary or appropriate.
     */
    reason?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: Array<any[] | boolean | PlanDefinitionRelatedAction | number | number | null | string>;
    /**
     * Defines the required behavior for the action.
     */
    requiredBehavior?: RequiredBehavior;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: SelectionBehavior;
    /**
     * A code or group definition that describes the intended subject of the action and its
     * children, if any.
     */
    subjectCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A code or group definition that describes the intended subject of the action and its
     * children, if any.
     */
    subjectReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable
     * description of the action when the definition is consumed by a system that might not be
     * capable of interpreting it dynamically.
     */
    textEquivalent?: string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * The title of the action displayed to a user.
     */
    title?: string;
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to
     * produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: string;
    /**
     * A description of when the action should be triggered.
     */
    trigger?: Array<any[] | boolean | TriggerDefinition | number | number | null | string>;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
/**
 * Defines whether the action can be selected multiple times.
 */
export declare enum CardinalityBehavior {
    Multiple = "multiple",
    Single = "single"
}
export interface PlanDefinitionCondition {
    /**
     * Extensions for kind
     */
    _kind?: any[] | boolean | Element | number | number | null | string;
    /**
     * An expression that returns true or false, indicating whether the condition is satisfied.
     */
    expression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The kind of condition.
     */
    kind?: Kind;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
}
/**
 * The kind of condition.
 */
export declare enum Kind {
    Applicability = "applicability",
    Start = "start",
    Stop = "stop"
}
export interface PlanDefinitionDynamicValue {
    /**
     * Extensions for path
     */
    _path?: any[] | boolean | Element | number | number | null | string;
    /**
     * An expression specifying the value of the customized element.
     */
    expression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The path to the element to be customized. This is the path on the resource that will hold
     * the result of the calculation defined by the expression. The specified path SHALL be a
     * FHIRPath resolveable on the specified target type of the ActivityDefinition, and SHALL
     * consist only of identifiers, constant indexers, and a restricted subset of functions. The
     * path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers
     * ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath
     * Profile](fhirpath.html#simple) for full details).
     */
    path?: string;
}
/**
 * Defines the grouping behavior for the action and its children.
 */
export declare enum GroupingBehavior {
    LogicalGroup = "logical-group",
    SentenceGroup = "sentence-group",
    VisualGroup = "visual-group"
}
export interface PlanDefinitionParticipant {
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The type of participant in the action.
     */
    type?: PlanDefinitionParticipantType;
}
/**
 * The type of participant in the action.
 */
export declare enum PlanDefinitionParticipantType {
    Device = "device",
    Patient = "patient",
    Practitioner = "practitioner",
    RelatedPerson = "related-person"
}
/**
 * Defines whether the action should usually be preselected.
 */
export declare enum PrecheckBehavior {
    No = "no",
    Yes = "yes"
}
export interface PlanDefinitionRelatedAction {
    /**
     * Extensions for actionId
     */
    _actionId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for relationship
     */
    _relationship?: any[] | boolean | Element | number | number | null | string;
    /**
     * The element id of the related action.
     */
    actionId?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes
     * before.
     */
    offsetDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes
     * before.
     */
    offsetRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The relationship of this action to the related action.
     */
    relationship?: Relationship;
}
/**
 * The relationship of this action to the related action.
 */
export declare enum Relationship {
    After = "after",
    AfterEnd = "after-end",
    AfterStart = "after-start",
    Before = "before",
    BeforeEnd = "before-end",
    BeforeStart = "before-start",
    Concurrent = "concurrent",
    ConcurrentWithEnd = "concurrent-with-end",
    ConcurrentWithStart = "concurrent-with-start"
}
/**
 * Defines the required behavior for the action.
 */
export declare enum RequiredBehavior {
    Could = "could",
    Must = "must",
    MustUnlessDocumented = "must-unless-documented"
}
/**
 * Defines the selection behavior for the action and its children.
 */
export declare enum SelectionBehavior {
    All = "all",
    AllOrNone = "all-or-none",
    Any = "any",
    AtMostOne = "at-most-one",
    ExactlyOne = "exactly-one",
    OneOrMore = "one-or-more"
}
export interface PlanDefinitionGoal {
    /**
     * Identifies problems, conditions, issues, or concerns the goal is intended to address.
     */
    addresses?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates a category the goal falls within.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Human-readable and/or coded description of a specific desired objective of care, such as
     * "control blood pressure" or "negotiate an obstacle course" or "dance with child at
     * wedding".
     */
    description: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Didactic or other informational resources associated with the goal that provide further
     * supporting information about the goal. Information resources can include inline text
     * commentary and links to web resources.
     */
    documentation?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Identifies the expected level of importance associated with reaching/sustaining the
     * defined goal.
     */
    priority?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The event after which the goal should begin being pursued.
     */
    start?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates what should be done and within what timeframe.
     */
    target?: Array<any[] | boolean | PlanDefinitionTarget | number | number | null | string>;
}
export interface PlanDefinitionTarget {
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g.
     * 150 pounds or 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any value at or
     * below the high value. Similarly, if the high value is missing, it indicates that the goal
     * is achieved at any value at or above the low value.
     */
    detailCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g.
     * 150 pounds or 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any value at or
     * below the high value. Similarly, if the high value is missing, it indicates that the goal
     * is achieved at any value at or above the low value.
     */
    detailQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g.
     * 150 pounds or 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any value at or
     * below the high value. Similarly, if the high value is missing, it indicates that the goal
     * is achieved at any value at or above the low value.
     */
    detailRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * Indicates the timeframe after the start of the goal in which the goal should be met.
     */
    due?: any[] | boolean | Duration | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or
     * hemoglobin A1c level.
     */
    measure?: any[] | boolean | CodeableConcept | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
}
/**
 * The status of this plan definition. Enables tracking the life-cycle of the content.
 */
export declare enum FhirPlanDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
