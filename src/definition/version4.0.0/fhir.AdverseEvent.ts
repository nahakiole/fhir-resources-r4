import { Element,
         CodeableConcept,
         Reference,
         Extension,
         Identifier,
         Meta,
         Narrative } from './fhir._';

// To parse this data:
//
//   import { Convert, FhirSchemaAdverseEvent } from "./file";
//
//   const fhirSchemaAdverseEvent = Convert.toFhirSchemaAdverseEvent(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface AdverseEvent {
    /**
     * Extensions for actuality
     */
    _actuality?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for detected
     */
    _detected?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for recordedDate
     */
    _recordedDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Whether the event actually happened, or just had the potential to. Note that this is
     * independent of whether anyone was affected or harmed or how severely.
     */
    actuality?: Actuality;
    /**
     * The overall type of event, intended for search and filtering purposes.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | AdverseEvent | number | null | string>;
    /**
     * Parties that may or should contribute or have contributed information to the adverse
     * event, which can consist of one or more activities.  Such information includes
     * information leading to the decision to perform the activity and how to perform the
     * activity (e.g. consultant), information that the activity itself seeks to reveal (e.g.
     * informant of clinical history), or information about what activity was performed (e.g.
     * informant witness).
     */
    contributor?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: string;
    /**
     * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
     */
    detected?: string;
    /**
     * The Encounter during which AdverseEvent was created or to which the creation of this
     * record is tightly associated.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This element defines the specific type of event that occurred or that was prevented from
     * occurring.
     */
    event?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifiers assigned to this adverse event by the performer or other systems
     * which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The information about where the adverse event occurred.
     */
    location?: any[] | boolean | Reference | number | number | null | string;
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
     * Describes the type of outcome from the adverse event.
     */
    outcome?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The date on which the existence of the AdverseEvent was first recorded.
     */
    recordedDate?: string;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: any[] | boolean | Reference | number | number | null | string;
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a AdverseEvent resource
     */
    resourceType: any;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a
     * substance (for example, a drug or a chemical).
     */
    resultingCondition?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Assessment whether this event was of real importance.
     */
    seriousness?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Describes the severity of the adverse event, in relation to the subject. Contrast to
     * AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem
     * is.
     */
    severity?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * AdverseEvent.study.
     */
    study?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This subject or group impacted by the event.
     */
    subject: any[] | boolean | Reference | number | number | null | string;
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: Array<any[] | boolean | AdverseEventSuspectEntity | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

/**
 * Whether the event actually happened, or just had the potential to. Note that this is
 * independent of whether anyone was affected or harmed or how severely.
 */
export enum Actuality {
    Actual = "actual",
    Potential = "potential",
}

export interface AdverseEventSuspectEntity {
    /**
     * Information on the possible cause of the event.
     */
    causality?: Array<any[] | boolean | AdverseEventCausality | number | number | null | string>;
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
     * Identifies the actual instance of what caused the adverse event.  May be a substance,
     * medication, medication administration, medication statement or a device.
     */
    instance: any[] | boolean | Reference | number | number | null | string;
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

export interface AdverseEventCausality {
    /**
     * Extensions for productRelatedness
     */
    _productRelatedness?: any[] | boolean | Element | number | number | null | string;
    /**
     * Assessment of if the entity caused the event.
     */
    assessment?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
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
     * ProbabilityScale | Bayesian | Checklist.
     */
    method?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    productRelatedness?: string;
}