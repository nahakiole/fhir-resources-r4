import { Element, Period, Reference, CodeableConcept, Extension, Identifier, Attachment, Meta, Narrative, Signature, Coding, Annotation, Timing, Quantity, Money } from "./fhir._";
export interface Contract {
    /**
     * Extensions for alias
     */
    _alias?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for issued
     */
    _issued?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
    /**
     * Alternative representation of the title for this Contract definition, derivative, or
     * instance in any legal state., e.g., a domain specific contract number related to
     * legislation.
     */
    alias?: string[];
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: any[] | boolean | Period | number | number | null | string;
    /**
     * The individual or organization that authored the Contract definition, derivative, or
     * instance in any legal state.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or
     * jurisdictions formed for the purpose of achieving some form of collective action such as
     * the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Contract | number | null | string>;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a
     * Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: any[] | boolean | ContractContentDefinition | number | number | null | string;
    /**
     * The minimal content derived from the basal information source at a specific stage in its
     * lifecycle.
     */
    contentDerivative?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in
     * accordance with specified principles, policies, processes or procedures for managing
     * rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or
     * more parties to the contract.
     */
    expirationType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient
     * friendly language" means the representation of the Contract and Contract Provisions in a
     * manner that is readily accessible and understandable by a layperson in accordance with
     * best practices for communication styles that ensure that those agreeing to or signing the
     * Contract understand the roles, actions, obligations, responsibilities, and implication of
     * the agreement.
     */
    friendly?: Array<any[] | boolean | ContractFriendly | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or
     * part by this Contract.
     */
    instantiatesCanonical?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in
     * part by this Contract.
     */
    instantiatesUri?: string;
    /**
     * When this  Contract was issued.
     */
    issued?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: Array<any[] | boolean | ContractLegal | number | number | null | string>;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the
     * Contract, which is considered the "source of truth" and which would be the basis for
     * legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the
     * Contract, which is considered the "source of truth" and which would be the basis for
     * legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written
     * document that can be formally attributed to its author, records and formally expresses a
     * legally enforceable act, process, or contractual duty, obligation, or right, and
     * therefore evidences that act, process, or agreement.
     */
    legalState?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * A natural language name identifying this Contract definition, derivative, or instance in
     * any legal state. Provides additional information about its content. This name should be
     * usable as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or
     * instance, which identify key state transitions or updates that are likely to be relevant
     * to a user looking at the current version of the Contract.  The Provence.entity indicates
     * the target that was changed in the update.
     * http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a Contract resource
     */
    resourceType: any;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: Array<any[] | boolean | ContractRule | number | number | null | string>;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any
     * legal state.
     */
    scope?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Parties with legal standing in the Contract, including the principal parties, the
     * grantor(s) and grantee(s), which are any person or organization bound by the contract,
     * and any ancillary parties, which facilitate the execution of the contract such as a
     * notary or witness.
     */
    signer?: Array<any[] | boolean | ContractSigner | number | number | null | string>;
    /**
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The status of the resource instance.
     */
    status?: string;
    /**
     * The target entity impacted by or of interest to parties to the agreement.
     */
    subject?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative,
     * or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: string;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be
     * interested in the Contract within the context of the Contract's scope.
     */
    subType?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this
     * term action.
     */
    supportingInfo?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may
     * contain nested groups.
     */
    term?: Array<any[] | boolean | ContractTerm | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or
     * instance in any legal state.t giving additional information about its content.
     */
    title?: string;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual
     * objectives.
     */
    topicCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual
     * objectives.
     */
    topicReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract
     * definition, derivative, or instance in any legal state.  Provides additional information
     * about its content within the context of the Contract's scope to distinguish the kinds of
     * systems that would be interested in the contract.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Canonical identifier for this contract, represented as a URI (globally unique).
     */
    url?: string;
    /**
     * An edition identifier used for business purposes to label business significant variants.
     */
    version?: string;
}
export interface ContractContentDefinition {
    /**
     * Extensions for copyright
     */
    _copyright?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publicationDate
     */
    _publicationDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publicationStatus
     */
    _publicationStatus?: any[] | boolean | Element | number | number | null | string;
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are
     * generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: string;
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
     * The date (and optionally time) when the contract was published. The date must change when
     * the business version changes and it must change if the status code changes. In addition,
     * it should change when the substantive content of the contract changes.
     */
    publicationDate?: string;
    /**
     * draft | active | retired | unknown.
     */
    publicationStatus?: string;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Detailed Precusory content type.
     */
    subType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a
     * contract such as an insurance policy or benefits under a program, e.g., workers
     * compensation.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ContractFriendly {
    /**
     * Human readable rendering of this Contract in a format and representation intended to
     * enhance comprehension and ensure understandability.
     */
    contentAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * Human readable rendering of this Contract in a format and representation intended to
     * enhance comprehension and ensure understandability.
     */
    contentReference?: any[] | boolean | Reference | number | number | null | string;
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
}
export interface ContractLegal {
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: any[] | boolean | Reference | number | number | null | string;
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
}
export interface ContractRule {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: any[] | boolean | Reference | number | number | null | string;
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
}
export interface ContractSigner {
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
     * Party which is a signator to this Contract.
     */
    party: any[] | boolean | Reference | number | number | null | string;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: Array<any[] | boolean | Signature | number | number | null | string>;
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: any[] | boolean | Coding | number | number | null | string;
}
export interface ContractTerm {
    /**
     * Extensions for issued
     */
    _issued?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * An actor taking a role in an activity for which it can be assigned some degree of
     * responsibility for the activity taking place.
     */
    action?: Array<any[] | boolean | ContractAction | number | number | null | string>;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: any[] | boolean | Period | number | number | null | string;
    /**
     * Contract Term Asset List.
     */
    asset?: Array<any[] | boolean | ContractAsset | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Nested group of Contract Provisions.
     */
    group?: Array<any[] | boolean | ContractTerm | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * When this Contract Provision was issued.
     */
    issued?: string;
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
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: any[] | boolean | ContractOffer | number | number | null | string;
    /**
     * Security labels that protect the handling of information about the term and its elements,
     * which may be specifically identified..
     */
    securityLabel?: Array<any[] | boolean | ContractSecurityLabel | number | number | null | string>;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: string;
    /**
     * The entity that the term applies to.
     */
    topicCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The entity that the term applies to.
     */
    topicReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties
     * to perform a particular requirement by some specified time or prevents one or both
     * parties from performing a particular requirement by some specified time.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ContractAction {
    /**
     * Extensions for contextLinkId
     */
    _contextLinkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for linkId
     */
    _linkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for performerLinkId
     */
    _performerLinkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for reason
     */
    _reason?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for reasonLinkId
     */
    _reasonLinkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for requesterLinkId
     */
    _requesterLinkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for securityLabelNumber
     */
    _securityLabelNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action
     * in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: string[];
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: boolean;
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
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced
     * form or QuestionnaireResponse.
     */
    linkId?: string[];
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
     * Comments made about the term action made by the requester, performer, subject or other
     * participants.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * When action happens.
     */
    occurrenceDateTime?: string;
    /**
     * When action happens.
     */
    occurrencePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * When action happens.
     */
    occurrenceTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference
     * of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: string[];
    /**
     * The type of role or competency of an individual desired or required to perform or not
     * perform the action.
     */
    performerRole?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: string[];
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is
     * permitted or prohibited.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference
     * of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: string[];
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this
     * action.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action
     * in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: string[];
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: number[];
    /**
     * Current state of the term action.
     */
    status: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Entity of the action.
     */
    subject?: Array<any[] | boolean | ContractSubject | number | number | null | string>;
    /**
     * Activity or service obligation to be done or not done, performed or not performed,
     * effectuated or not by this Contract term.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ContractSubject {
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
     * The entity the action is performed or not performed on or for.
     */
    reference: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ContractAsset {
    /**
     * Extensions for condition
     */
    _condition?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for linkId
     */
    _linkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for securityLabelNumber
     */
    _securityLabelNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * Response to assets.
     */
    answer?: Array<any[] | boolean | ContractAnswer | number | number | null | string>;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its
     * valuation.
     */
    condition?: string;
    /**
     * Circumstance of the asset.
     */
    context?: Array<any[] | boolean | ContractContext | number | number | null | string>;
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
     * Id [identifier??] of the clause or question text about the asset in the referenced form
     * or QuestionnaireResponse.
     */
    linkId?: string[];
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
     * Asset relevant contractual time period.
     */
    period?: Array<any[] | boolean | Period | number | number | null | string>;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it
     * refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: any[] | boolean | Coding | number | number | null | string;
    /**
     * Differentiates the kind of the asset .
     */
    scope?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: number[];
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a
     * QuestionnaireResponse used in the formation of the contract.
     */
    text?: string;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Associated entities.
     */
    typeReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Time period of asset use.
     */
    usePeriod?: Array<any[] | boolean | Period | number | number | null | string>;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: Array<any[] | boolean | ContractValuedItem | number | number | null | string>;
}
export interface ContractAnswer {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDate
     */
    _valueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUri
     */
    _valueUri?: any[] | boolean | Element | number | number | null | string;
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
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: boolean;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: number;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: number;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be
     * agreed to, e.g., the period of participation, the date of occupancy of a rental,
     * warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: string;
}
export interface ContractContext {
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the
     * asset holder type or location.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Asset context reference may include the creator, custodian, or owning Person or
     * Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Context description.
     */
    text?: string;
}
export interface ContractValuedItem {
    /**
     * Extensions for effectiveTime
     */
    _effectiveTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for linkId
     */
    _linkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for payment
     */
    _payment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for paymentDate
     */
    _paymentDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for points
     */
    _points?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for securityLabelNumber
     */
    _securityLabelNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: string;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A real number that represents a multiplier used in determining the overall value of the
     * Contract Valued Item delivered. The concept of a Factor allows for a discount or
     * surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the
     * referenced form or QuestionnaireResponse.
     */
    linkId?: string[];
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
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For
     * example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  *
     * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: any[] | boolean | Money | number | number | null | string;
    /**
     * Terms of valuation.
     */
    payment?: string;
    /**
     * When payment is due.
     */
    paymentDate?: string;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource
     * intensiveness) associated with the Contract Valued Item delivered. The concept of Points
     * allows for assignment of point values for a Contract Valued Item, such that a monetary
     * amount can be assigned to each point.
     */
    points?: number;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and
     * quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Who will receive payment.
     */
    recipient?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Who will make payment.
     */
    responsible?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: number[];
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}
export interface ContractOffer {
    /**
     * Extensions for linkId
     */
    _linkId?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for securityLabelNumber
     */
    _securityLabelNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * Response to offer text.
     */
    answer?: Array<any[] | boolean | ContractAnswer | number | number | null | string>;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/
     * grantee.
     */
    decision?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * The id of the clause or question text of the offer in the referenced
     * questionnaire/response.
     */
    linkId?: string[];
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
     * Offer Recipient.
     */
    party?: Array<any[] | boolean | ContractParty | number | number | null | string>;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: number[];
    /**
     * Human readable form of this Contract Offer.
     */
    text?: string;
    /**
     * The owner of an asset has the residual control rights over the asset: the right to decide
     * all usages of the asset in any way not inconsistent with a prior contract, custom, or law
     * (Hart, 1995, p. 30).
     */
    topic?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions,
     * obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ContractParty {
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
     * Participant in the offer.
     */
    reference: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * How the party participates in the offer.
     */
    role: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ContractSecurityLabel {
    /**
     * Extensions for number
     */
    _number?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Security label privacy tag that species the applicable privacy and security policies
     * governing this term and/or term elements.
     */
    category?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * Security label privacy tag that species the level of confidentiality protection required
     * for this term and/or term elements.
     */
    classification: any[] | boolean | Coding | number | number | null | string;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are
     * to be protected.
     */
    control?: Array<any[] | boolean | Coding | number | number | null | string>;
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
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: number[];
}