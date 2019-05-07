import {
    Element,
    Reference,
    CodeableConcept,
    Extension,
    Identifier,
    Meta,
    Annotation,
    Narrative,
    Quantity,
    Ratio,
    Timing
} from "./fhir._";

export interface NutritionOrder {
    /**
     * Extensions for dateTime
     */
    _dateTime?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for instantiates
     */
    _instantiates?: Element[];
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element[];
    /**
     * Extensions for intent
     */
    _intent?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * A link to a record of allergies or intolerances  which should be included in the
     * nutrition order.
     */
    allergyIntolerance?: Reference[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: NutritionOrder[];
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime?: string;
    /**
     * An encounter that provides additional information about the healthcare context in which
     * this request is made.
     */
    encounter?: Reference;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that
     * delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: NutritionOrderEnteralFormula;
    /**
     * This modifier is used to convey Order-specific modifier about the type of oral food or
     * oral fluids that should not be given. These can be derived from patient allergies,
     * intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.
     * While it should not be necessary to repeat allergy or intolerance information captured in
     * the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may
     * be used to convey additional specificity related to foods that should be eliminated from
     * the patient’s diet for any reason.  This modifier applies to the entire nutrition order
     * inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    excludeFoodModifier?: CodeableConcept[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * This modifier is used to convey order-specific modifiers about the type of food that
     * should be given. These can be derived from patient allergies, intolerances, or
     * preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition
     * order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    foodPreferenceModifier?: CodeableConcept[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifiers assigned to this order by the order sender or by the order receiver.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered
     * to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[];
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that
     * is adhered to in whole or in part by this NutritionOrder.
     */
    instantiatesCanonical?: string[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other
     * definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiatesUri?: string[];
    /**
     * Indicates the level of authority/intentionality associated with the NutrionOrder and
     * where the request fits into the workflow chain.
     */
    intent?: string;
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
     * Comments made about the {{title}} by the requester, performer, subject or other
     * participants.
     */
    note?: Annotation[];
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: NutritionOrderOralDiet;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional
     * supplement, or formula feedings.
     */
    orderer?: Reference;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional
     * supplement and/or enteral or formula feeding.
     */
    patient?: Reference;
    /**
     * This is a NutritionOrder resource
     */
    resourceType?: any;
    /**
     * The workflow status of the nutrition order/request.
     */
    status?: string;
    /**
     * Oral nutritional products given in order to add further nutritional value to the
     * patient's diet.
     */
    supplement?: NutritionOrderSupplement[];
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
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that
 * delivers nutrition distal to the oral cavity.
 *
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a
 * patient/resident.
 */
export interface NutritionOrderEnteralFormula {
    /**
     * Extensions for additiveProductName
     */
    _additiveProductName?: Element;
    /**
     * Extensions for administrationInstruction
     */
    _administrationInstruction?: Element;
    /**
     * Extensions for baseFormulaProductName
     */
    _baseFormulaProductName?: Element;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be
     * provided in addition to or mixed with the base formula.
     */
    additiveType?: CodeableConcept;
    /**
     * Formula administration instructions as structured data.  This repeating structure allows
     * for changing the administration rate or volume over time for both bolus and continuous
     * feeding.  An example of this would be an instruction to increase the rate of continuous
     * feeding every 2 hours.
     */
    administration?: NutritionOrderAdministration[];
    /**
     * Free text formula administration, feeding instructions or additional instructions or
     * information.
     */
    administrationInstruction?: string;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult
     * Standard Formula".
     */
    baseFormulaProductName?: string;
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a
     * soy-based infant formula.
     */
    baseFormulaType?: CodeableConcept;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume,
     * typically per mL or fluid oz.  For example, an infant may require a formula that provides
     * 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5
     * calorie/mL.
     */
    caloricDensity?: Quantity;
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
     * The maximum total quantity of formula that may be administered to a subject over the
     * period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: Quantity;
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
     * The route or physiological path of administration into the patient's gastrointestinal
     * tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: CodeableConcept;
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a
 * patient/resident.
 */
export interface NutritionOrderAdministration {
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
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: Quantity;
    /**
     * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according
     * to the specified schedule.
     */
    rateQuantity?: Quantity;
    /**
     * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according
     * to the specified schedule.
     */
    rateRatio?: Ratio;
    /**
     * The time period and frequency at which the enteral formula should be delivered to the
     * patient.
     */
    schedule?: Timing;
}

/**
 * Diet given orally in contrast to enteral (tube) feeding.
 *
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a
 * patient/resident.
 */
export interface NutritionOrderOralDiet {
    /**
     * Extensions for instruction
     */
    _instruction?: Element;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or
     * fluids served to the patient.
     */
    fluidConsistencyType?: CodeableConcept[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Free text or additional instructions or information pertaining to the oral diet.
     */
    instruction?: string;
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
     * Class that defines the quantity and type of nutrient modifications (for example
     * carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: NutritionOrderNutrient[];
    /**
     * The time period and frequency at which the diet should be given.  The diet should be
     * given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: Timing[];
    /**
     * Class that describes any texture modifications required for the patient to safely consume
     * various types of solid foods.
     */
    texture?: NutritionOrderTexture[];
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: CodeableConcept[];
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a
 * patient/resident.
 */
export interface NutritionOrderNutrient {
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: Quantity;
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
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: CodeableConcept;
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
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a
 * patient/resident.
 */
export interface NutritionOrderTexture {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This
     * could be all foods types.
     */
    foodType?: CodeableConcept;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Any texture modifications (for solid foods) that should be made, e.g. easy to chew,
     * chopped, ground, and pureed.
     */
    modifier?: CodeableConcept;
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
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a
 * patient/resident.
 */
export interface NutritionOrderSupplement {
    /**
     * Extensions for instruction
     */
    _instruction?: Element;
    /**
     * Extensions for productName
     */
    _productName?: Element;
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
     * Free text or additional instructions or information pertaining to the oral supplement.
     */
    instruction?: string;
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
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: Quantity;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement
     * should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: Timing[];
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric
     * clear liquid supplement.
     */
    type?: CodeableConcept;
}