import { Element, Ratio, CodeableConcept, Extension, Identifier, Reference, Meta, Narrative } from "./fhir._";
export interface Medication {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Specific amount of the drug in the packaged product.  For example, when specifying a
     * product that has the same strength (For example, Insulin glargine 100 unit per mL
     * solution for injection), this attribute provides additional clarification of the package
     * amount (For example, 3 mL, 10mL, etc.).
     */
    amount?: Ratio;
    /**
     * Information that only applies to packages (not products).
     */
    batch?: MedicationBatch;
    /**
     * A code (or set of codes) that specify this medication, or a textual description if no
     * code is available. Usage note: This could be a standard medication code such as a code
     * from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code,
     * optionally with translations to other code systems.
     */
    code?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Medication[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Describes the form of the item.  Powder; tablets; capsule.
     */
    form?: CodeableConcept;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifier for this medication.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: MedicationIngredient[];
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not
     * intended to represent the distributor of a medication product.
     */
    manufacturer?: Reference;
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
     * This is a Medication resource
     */
    resourceType?: any;
    /**
     * A code to indicate if the medication is in active use.
     */
    status?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
}
/**
 * Information that only applies to packages (not products).
 *
 * This resource is primarily used for the identification and definition of a medication for
 * the purposes of prescribing, dispensing, and administering a medication as well as for
 * making statements about medication use.
 */
export interface MedicationBatch {
    /**
     * Extensions for expirationDate
     */
    _expirationDate?: Element;
    /**
     * Extensions for lotNumber
     */
    _lotNumber?: Element;
    /**
     * When this specific batch of product will expire.
     */
    expirationDate?: string;
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
     * The assigned lot number of a batch of the specified product.
     */
    lotNumber?: string;
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
 * This resource is primarily used for the identification and definition of a medication for
 * the purposes of prescribing, dispensing, and administering a medication as well as for
 * making statements about medication use.
 */
export interface MedicationIngredient {
    /**
     * Extensions for isActive
     */
    _isActive?: Element;
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
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication of a
     * medication.
     */
    itemCodeableConcept?: CodeableConcept;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication of a
     * medication.
     */
    itemReference?: Reference;
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
     * Specifies how many (or how much) of the items there are in this Medication.  For example,
     * 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the
     * denominator is 1 tablet.
     */
    strength?: Ratio;
}
