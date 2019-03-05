import { Element, Period, Reference, Extension, Attachment, CodeableConcept, Identifier, Meta, Narrative, Address, Money, Quantity, Coding } from "./fhir._";
export interface ExplanationOfBenefit {
    /**
     * Extensions for created
     */
    _created?: Element;
    /**
     * Extensions for disposition
     */
    _disposition?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for outcome
     */
    _outcome?: Element;
    /**
     * Extensions for preAuthRef
     */
    _preAuthRef?: Element[];
    /**
     * Extensions for precedence
     */
    _precedence?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * Details of a accident which resulted in injuries which required the products and services
     * listed in the claim.
     */
    accident?: ExplanationOfBenefitAccident;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: ExplanationOfBenefitAddItem[];
    /**
     * The adjudication results which are presented at the header level rather than at the
     * line-item or add-item levels.
     */
    adjudication?: ExplanationOfBenefitAdjudication[];
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: ExplanationOfBenefitBenefitBalance[];
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: Period;
    /**
     * The period for which charges are being submitted.
     */
    billablePeriod?: Period;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: ExplanationOfBenefitCareTeam[];
    /**
     * The business identifier for the instance of the adjudication request: claim
     * predetermination or preauthorization.
     */
    claim?: Reference;
    /**
     * The business identifier for the instance of the adjudication response: claim,
     * predetermination or preauthorization response.
     */
    claimResponse?: Reference;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: ExplanationOfBenefit[];
    /**
     * The date this resource was created.
     */
    created?: string;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: ExplanationOfBenefitDiagnosis[];
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Facility where the services were provided.
     */
    facility?: Reference;
    /**
     * The actual form, by reference or inclusion, for printing the content or an EOB.
     */
    form?: Attachment;
    /**
     * A code for the form to be used for printing the content.
     */
    formCode?: CodeableConcept;
    /**
     * A code, used only on a response to a preauthorization, to indicate whether the benefits
     * payable have been reserved and for whom.
     */
    fundsReserve?: CodeableConcept;
    /**
     * A code to indicate whether and for whom funds are to be reserved for future claims.
     */
    fundsReserveRequested?: CodeableConcept;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Financial instruments for reimbursement for the health care products and services
     * specified on the claim.
     */
    insurance?: ExplanationOfBenefitInsurance[];
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer?: Reference;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can
     * also be a simple items or groups of sub-details.
     */
    item?: ExplanationOfBenefitItem[];
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
     * Original prescription which has been superseded by this prescription to support the
     * dispensing of pharmacy services, medications or products.
     */
    originalPrescription?: Reference;
    /**
     * The outcome of the claim, predetermination, or preauthorization processing.
     */
    outcome?: string;
    /**
     * The party to whom the professional services and/or products have been supplied or are
     * being considered and for whom actual for forecast reimbursement is sought.
     */
    patient?: Reference;
    /**
     * The party to be reimbursed for cost of the products and services according to the terms
     * of the policy.
     */
    payee?: ExplanationOfBenefitPayee;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: ExplanationOfBenefitPayment;
    /**
     * Reference from the Insurer which is used in later communications which refers to this
     * adjudication.
     */
    preAuthRef?: string[];
    /**
     * The timeframe during which the supplied preauthorization reference may be quoted on
     * claims to obtain the adjudication as provided.
     */
    preAuthRefPeriod?: Period[];
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for
     * the same suite of services.
     */
    precedence?: number;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: Reference;
    /**
     * The provider-required urgency of processing the request. Typical values include: stat,
     * routine deferred.
     */
    priority?: CodeableConcept;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: ExplanationOfBenefitProcedure[];
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: ExplanationOfBenefitProcessNote[];
    /**
     * The provider which is responsible for the claim, predetermination or preauthorization.
     */
    provider?: Reference;
    /**
     * A reference to a referral resource.
     */
    referral?: Reference;
    /**
     * Other claims which are related to this claim such as prior submissions or claims for
     * related services or for the same event.
     */
    related?: ExplanationOfBenefitRelated[];
    /**
     * This is a ExplanationOfBenefit resource
     */
    resourceType?: any;
    /**
     * The status of the resource instance.
     */
    status?: ExplanationOfBenefitStatus;
    /**
     * A finer grained suite of claim type codes which may convey additional information such as
     * Inpatient vs Outpatient and/or a specialty service.
     */
    subType?: CodeableConcept;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition,
     * situation, prior or concurrent issues.
     */
    supportingInfo?: ExplanationOfBenefitSupportingInfo[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * Categorized monetary totals for the adjudication.
     */
    total?: ExplanationOfBenefitTotal[];
    /**
     * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
     */
    type?: CodeableConcept;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of
     * products and services previously rendered; or requesting authorization and adjudication
     * for provision in the future; or requesting the non-binding adjudication of the listed
     * products and services which could be provided in the future.
     */
    use?: string;
}
/**
 * Details of a accident which resulted in injuries which required the products and services
 * listed in the claim.
 *
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitAccident {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Date of an accident event  related to the products and services contained in the claim.
     */
    date?: string;
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
     * The physical location of the accident event.
     */
    locationAddress?: Address;
    /**
     * The physical location of the accident event.
     */
    locationReference?: Reference;
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
     * The type or context of the accident event for the purposes of selection of potential
     * insurance coverages and determination of coordination between insurers.
     */
    type?: CodeableConcept;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitAddItem {
    /**
     * Extensions for detailSequence
     */
    _detailSequence?: Element[];
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for itemSequence
     */
    _itemSequence?: Element[];
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: Element;
    /**
     * Extensions for subDetailSequence
     */
    _subDetailSequence?: Element[];
    /**
     * The adjudication results.
     */
    adjudication?: ExplanationOfBenefitAdjudication[];
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: CodeableConcept;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: ExplanationOfBenefitDetail1[];
    /**
     * The sequence number of the details within the claim item which this line is intended to
     * replace.
     */
    detailSequence?: number[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[];
    /**
     * Where the product or service was provided.
     */
    locationAddress?: Address;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: CodeableConcept;
    /**
     * Where the product or service was provided.
     */
    locationReference?: Reference;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: CodeableConcept[];
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: Reference[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: Period;
    /**
     * The sequence number of the sub-details woithin the details within the claim item which
     * this line is intended to replace.
     */
    subDetailSequence?: number[];
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: CodeableConcept[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitAdjudication {
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * Monetary amount associated with the category.
     */
    amount?: Money;
    /**
     * A code to indicate the information type of this adjudication record. Information types
     * may include: the value submitted, maximum values or percentages allowed or payable under
     * the plan, amounts that the patient is responsible for in-aggregate or pertaining to this
     * item, amounts paid by other coverages, and the benefit payable for this item.
     */
    category?: CodeableConcept;
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
     * A code supporting the understanding of the adjudication result and explaining variance
     * from expected amount.
     */
    reason?: CodeableConcept;
    /**
     * A non-monetary value associated with the category. Mutually exclusive to the amount
     * element above.
     */
    value?: number;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitDetail1 {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * The adjudication results.
     */
    adjudication?: ExplanationOfBenefitAdjudication[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: ExplanationOfBenefitSubDetail1[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitSubDetail1 {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * The adjudication results.
     */
    adjudication?: ExplanationOfBenefitAdjudication[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitBenefitBalance {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for excluded
     */
    _excluded?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: CodeableConcept;
    /**
     * A richer description of the benefit or services covered.
     */
    description?: string;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False
     * indicates the product or service is included in the coverage.
     */
    excluded?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Benefits Used to date.
     */
    financial?: ExplanationOfBenefitFinancial[];
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
     * A short name or tag for the benefit.
     */
    name?: string;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or
     * out-of-network providers.
     */
    network?: CodeableConcept;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual
     * visits'.
     */
    term?: CodeableConcept;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: CodeableConcept;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitFinancial {
    /**
     * Extensions for allowedString
     */
    _allowedString?: Element;
    /**
     * Extensions for allowedUnsignedInt
     */
    _allowedUnsignedInt?: Element;
    /**
     * Extensions for usedUnsignedInt
     */
    _usedUnsignedInt?: Element;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: Money;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number;
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
     * Classification of benefit being provided.
     */
    type?: CodeableConcept;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: Money;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitCareTeam {
    /**
     * Extensions for responsible
     */
    _responsible?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
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
     * Member of the team who provided the product or service.
     */
    provider?: Reference;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: CodeableConcept;
    /**
     * The party who is billing and/or responsible for the claimed products or services.
     */
    responsible?: boolean;
    /**
     * The lead, assisting or supervising practitioner and their discipline if a
     * multidisciplinary team.
     */
    role?: CodeableConcept;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence?: number;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitDiagnosis {
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined
     * Condition.
     */
    diagnosisCodeableConcept?: CodeableConcept;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined
     * Condition.
     */
    diagnosisReference?: Reference;
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
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: CodeableConcept;
    /**
     * A package billing code or bundle code used to group products and services to a particular
     * health condition (such as heart attack) which is based on a predetermined grouping code
     * system.
     */
    packageCode?: CodeableConcept;
    /**
     * A number to uniquely identify diagnosis entries.
     */
    sequence?: number;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: CodeableConcept[];
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitInsurance {
    /**
     * Extensions for focal
     */
    _focal?: Element;
    /**
     * Extensions for preAuthRef
     */
    _preAuthRef?: Element[];
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The
     * coverage issuing insurer will use these details to locate the patient's actual coverage
     * within the insurer's information system.
     */
    coverage?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A flag to indicate that this Coverage is to be used for adjudication of this claim when
     * set to true.
     */
    focal?: boolean;
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
     * Reference numbers previously provided by the insurer to the provider to be quoted on
     * subsequent claims containing services or products related to the prior authorization.
     */
    preAuthRef?: string[];
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitItem {
    /**
     * Extensions for careTeamSequence
     */
    _careTeamSequence?: Element[];
    /**
     * Extensions for diagnosisSequence
     */
    _diagnosisSequence?: Element[];
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for informationSequence
     */
    _informationSequence?: Element[];
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * Extensions for procedureSequence
     */
    _procedureSequence?: Element[];
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: Element;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the
     * detail items. If this item is a simple product or service then this is the result of the
     * adjudication of this item.
     */
    adjudication?: ExplanationOfBenefitAdjudication[];
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: CodeableConcept;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[];
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: CodeableConcept;
    /**
     * Second-tier of goods and services.
     */
    detail?: ExplanationOfBenefitDetail[];
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[];
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: Reference[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or
     * product.
     */
    informationSequence?: number[];
    /**
     * Where the product or service was provided.
     */
    locationAddress?: Address;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: CodeableConcept;
    /**
     * Where the product or service was provided.
     */
    locationReference?: Reference;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: CodeableConcept;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: Period;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: CodeableConcept[];
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitDetail {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * The adjudication results.
     */
    adjudication?: ExplanationOfBenefitAdjudication[];
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: CodeableConcept;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: CodeableConcept;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    sequence?: number;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: ExplanationOfBenefitSubDetail[];
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitSubDetail {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * The adjudication results.
     */
    adjudication?: ExplanationOfBenefitAdjudication[];
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: CodeableConcept;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: CodeableConcept;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    sequence?: number;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * The party to be reimbursed for cost of the products and services according to the terms
 * of the policy.
 *
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitPayee {
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
     * Reference to the individual or organization to whom any payment will be made.
     */
    party?: Reference;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: CodeableConcept;
}
/**
 * Payment details for the adjudication of the claim.
 *
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitPayment {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Total amount of all adjustments to this payment included in this transaction which are
     * not related to this claim's adjudication.
     */
    adjustment?: Money;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: CodeableConcept;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: Money;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string;
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
     * Issuer's unique identifier for the payment instrument.
     */
    identifier?: Identifier;
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
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type?: CodeableConcept;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitProcedure {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string;
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
     * The code or reference to a Procedure resource which identifies the clinical intervention
     * performed.
     */
    procedureCodeableConcept?: CodeableConcept;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention
     * performed.
     */
    procedureReference?: Reference;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence?: number;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: CodeableConcept[];
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitProcessNote {
    /**
     * Extensions for number
     */
    _number?: Element;
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
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
     * A code to define the language used in the text of the note.
     */
    language?: CodeableConcept;
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
     * A number to uniquely identify a note entry.
     */
    number?: number;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string;
    /**
     * The business purpose of the note text.
     */
    type?: ExplanationOfBenefitProcessNoteType;
}
/**
 * The business purpose of the note text.
 */
export declare enum ExplanationOfBenefitProcessNoteType {
    Display = "display",
    Print = "print",
    Printoper = "printoper"
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitRelated {
    /**
     * Reference to a related claim.
     */
    claim?: Reference;
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
     * An alternate organizational reference to the case or file to which this particular claim
     * pertains.
     */
    reference?: Identifier;
    /**
     * A code to convey how the claims are related.
     */
    relationship?: CodeableConcept;
}
/**
 * The status of the resource instance.
 */
export declare enum ExplanationOfBenefitStatus {
    Active = "active",
    Cancelled = "cancelled",
    Draft = "draft",
    EnteredInError = "entered-in-error"
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitSupportingInfo {
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Extensions for timingDate
     */
    _timingDate?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * The general class of the information supplied: information; exception; accident,
     * employment; onset, etc.
     */
    category?: CodeableConcept;
    /**
     * System and code pertaining to the specific information regarding special conditions
     * relating to the setting, treatment or patient  for which care is sought.
     */
    code?: CodeableConcept;
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
     * Provides the reason in the situation where a reason code is required in addition to the
     * content.
     */
    reason?: Coding;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence?: number;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: Period;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueAttachment?: Attachment;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueBoolean?: boolean;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueQuantity?: Quantity;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueReference?: Reference;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueString?: string;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a
 * Claim; and optionally account balance information, for informing the subscriber of the
 * benefits provided.
 */
export interface ExplanationOfBenefitTotal {
    /**
     * Monetary total amount associated with the category.
     */
    amount?: Money;
    /**
     * A code to indicate the information type of this adjudication record. Information types
     * may include: the value submitted, maximum values or percentages allowed or payable under
     * the plan, amounts that the patient is responsible for in aggregate or pertaining to this
     * item, amounts paid by other coverages, and the benefit payable for this item.
     */
    category?: CodeableConcept;
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
