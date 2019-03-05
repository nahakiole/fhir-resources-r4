import {
    Element,
    CodeableConcept,
    Quantity,
    Extension,
    Meta,
    Reference,
    Narrative,
    Population
} from "./fhir._";

export interface MedicinalProductIndication {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: CodeableConcept[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: MedicinalProductIndication[];
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: CodeableConcept;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: CodeableConcept;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: Quantity;
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
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: CodeableConcept;
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
     * Information about the use of the medicinal product in relation to other therapies
     * described as part of the indication.
     */
    otherTherapy?: MedicinalProductIndicationOtherTherapy[];
    /**
     * The population group to which this applies.
     */
    population?: Population[];
    /**
     * This is a MedicinalProductIndication resource
     */
    resourceType?: any;
    /**
     * The medication for which this is an indication.
     */
    subject?: Reference[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: Reference[];
}

/**
 * Indication for the Medicinal Product.
 */
export interface MedicinalProductIndicationOtherTherapy {
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
     * Reference to a specific medication (active substance, medicinal product or class of
     * products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: CodeableConcept;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of
     * products) as part of an indication or contraindication.
     */
    medicationReference?: Reference;
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
     * The type of relationship between the medicinal product indication or contraindication and
     * another therapy.
     */
    therapyRelationshipType?: CodeableConcept;
}