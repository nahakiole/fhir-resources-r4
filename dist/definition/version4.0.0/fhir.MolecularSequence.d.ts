import { Element, Reference, Extension, Identifier, Meta, Quantity, Narrative, CodeableConcept } from "./fhir._";
export interface MolecularSequence {
    /**
     * Extensions for coordinateSystem
     */
    _coordinateSystem?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for observedSeq
     */
    _observedSeq?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for readCoverage
     */
    _readCoverage?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MolecularSequence | number | null | string>;
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates,
     * inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and
     * inclusive end).
     */
    coordinateSystem?: number;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: any[] | boolean | Reference | number | number | null | string;
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
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
     * Sequence that was observed. It is the result marked by referenceSeq along with variant
     * records on referenceSeq. This shall start from referenceSeq.windowStart and end by
     * referenceSeq.windowEnd.
     */
    observedSeq?: string;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * An experimental feature attribute that defines the quality of the feature in a
     * quantitative way, such as a phred quality score
     * ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: Array<any[] | boolean | MolecularSequenceQuality | number | number | null | string>;
    /**
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given
     * nucleotide in the reconstructed sequence.
     */
    readCoverage?: number;
    /**
     * A sequence that is used as a reference to describe variants that are present in a
     * sequence analyzed.
     */
    referenceSeq?: any[] | boolean | MolecularSequenceReferenceSeq | number | number | null | string;
    /**
     * Configurations of the external repository. The repository shall store target's
     * observedSeq or records related with target's observedSeq.
     */
    repository?: Array<any[] | boolean | MolecularSequenceRepository | number | number | null | string>;
    /**
     * This is a MolecularSequence resource
     */
    resourceType: any;
    /**
     * Specimen used for sequencing.
     */
    specimen?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: Array<any[] | boolean | MolecularSequenceStructureVariant | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: FhirMolecularSequenceType;
    /**
     * The definition of variant here originates from Sequence ontology
     * ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This
     * element can represent amino acid or nucleic sequence change(including
     * insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation
     * with the assist of CIGAR string.
     */
    variant?: Array<any[] | boolean | MolecularSequenceVariant | number | number | null | string>;
}
export interface MolecularSequenceQuality {
    /**
     * Extensions for end
     */
    _end?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fScore
     */
    _fScore?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for gtFP
     */
    _gtFP?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for precision
     */
    _precision?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for queryFP
     */
    _queryFP?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for queryTP
     */
    _queryTP?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for recall
     */
    _recall?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for start
     */
    _start?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for truthFN
     */
    _truthFN?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for truthTP
     */
    _truthTP?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive
     * and does not include the last position. If the coordinate system is 1-base, then end is
     * inclusive and includes the last position.
     */
    end?: number;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision +
     * recall).
     */
    fScore?: number;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets
     * match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Which method is used to get sequence quality.
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
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: number;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no
     * path through the Truth Call Set that is consistent with this site. Sites with correct
     * variant but incorrect genotype are counted here.
     */
    queryFP?: number;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the
     * Query Call Set for which there are paths through the Truth Call Set that are consistent
     * with all of the alleles at this site, and for which there is an accurate genotype call
     * for the event.
     */
    queryTP?: number;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: number;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: any[] | boolean | MolecularSequenceRoc | number | number | null | string;
    /**
     * The score of an experimentally derived feature such as a p-value
     * ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based,
     * then start position is inclusive.
     */
    start?: number;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no
     * path through the Query Call Set that is consistent with all of the alleles at this site,
     * or sites for which there is an inaccurate genotype call for the event. Sites with correct
     * variant but incorrect genotype are counted here.
     */
    truthFN?: number;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the
     * Truth Call Set for which there are paths through the Query Call Set that are consistent
     * with all of the alleles at this site, and for which there is an accurate genotype call
     * for the event.
     */
    truthTP?: number;
    /**
     * INDEL / SNP / Undefined variant.
     */
    type?: MolecularSequenceQualityType;
}
export interface MolecularSequenceRoc {
    /**
     * Extensions for fMeasure
     */
    _fMeasure?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for numFN
     */
    _numFN?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for numFP
     */
    _numFP?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for numTP
     */
    _numTP?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for precision
     */
    _precision?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for score
     */
    _score?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for sensitivity
     */
    _sensitivity?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: number[];
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
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: number[];
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: number[];
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: number[];
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: number[];
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: number[];
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: number[];
}
/**
 * INDEL / SNP / Undefined variant.
 */
export declare enum MolecularSequenceQualityType {
    Indel = "indel",
    Snp = "snp",
    Unknown = "unknown"
}
export interface MolecularSequenceReferenceSeq {
    /**
     * Extensions for genomeBuild
     */
    _genomeBuild?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for orientation
     */
    _orientation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for referenceSeqString
     */
    _referenceSeqString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for strand
     */
    _strand?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for windowEnd
     */
    _windowEnd?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for windowStart
     */
    _windowStart?: any[] | boolean | Element | number | number | null | string;
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication
     * through the interaction of specific proteins at one or more origins of replication
     * ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.
     * Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: string;
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
     * A relative reference to a DNA strand based on gene orientation. The strand that contains
     * the open reading frame of the gene is the "sense" strand, and the opposite complementary
     * strand is the "antisense" strand.
     */
    orientation?: Orientation;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in
     * the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference
     * sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid
     * sequences.
     */
    referenceSeqId?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: string;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the
     * short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long
     * arm.
     */
    strand?: Strand;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based
     * then end is exclusive and does not include the last position. If the coordinate system is
     * 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: number;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is
     * either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: number;
}
/**
 * A relative reference to a DNA strand based on gene orientation. The strand that contains
 * the open reading frame of the gene is the "sense" strand, and the opposite complementary
 * strand is the "antisense" strand.
 */
export declare enum Orientation {
    Antisense = "antisense",
    Sense = "sense"
}
/**
 * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the
 * short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long
 * arm.
 */
export declare enum Strand {
    Crick = "crick",
    Watson = "watson"
}
export interface MolecularSequenceRepository {
    /**
     * Extensions for datasetId
     */
    _datasetId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for readsetId
     */
    _readsetId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for variantsetId
     */
    _variantsetId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Id of the variant in this external repository. The server will understand how to use this
     * id to call for more info about datasets in external repository.
     */
    datasetId?: string;
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
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: string;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: string;
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other
     * ways to see resource.
     */
    type?: MolecularSequenceRepositoryType;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: string;
    /**
     * Id of the variantset in this external repository. The server will understand how to use
     * this id to call for more info about variantsets in external repository.
     */
    variantsetId?: string;
}
/**
 * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other
 * ways to see resource.
 */
export declare enum MolecularSequenceRepositoryType {
    Directlink = "directlink",
    Login = "login",
    Oauth = "oauth",
    Openapi = "openapi",
    Other = "other"
}
export interface MolecularSequenceStructureVariant {
    /**
     * Extensions for exact
     */
    _exact?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for length
     */
    _length?: any[] | boolean | Element | number | number | null | string;
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: boolean;
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
     * Structural variant inner.
     */
    inner?: any[] | boolean | MolecularSequenceInner | number | number | null | string;
    /**
     * Length of the variant chromosome.
     */
    length?: number;
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
     * Structural variant outer.
     */
    outer?: any[] | boolean | MolecularSequenceOuter | number | number | null | string;
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface MolecularSequenceInner {
    /**
     * Extensions for end
     */
    _end?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for start
     */
    _start?: any[] | boolean | Element | number | number | null | string;
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive
     * and does not include the last position. If the coordinate system is 1-base, then end is
     * inclusive and includes the last position.
     */
    end?: number;
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
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based,
     * then start position is inclusive.
     */
    start?: number;
}
export interface MolecularSequenceOuter {
    /**
     * Extensions for end
     */
    _end?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for start
     */
    _start?: any[] | boolean | Element | number | number | null | string;
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive
     * and does not include the last position. If the coordinate system is 1-base, then end is
     * inclusive and includes the last position.
     */
    end?: number;
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
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based,
     * then start position is inclusive.
     */
    start?: number;
}
/**
 * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
 */
export declare enum FhirMolecularSequenceType {
    Aa = "aa",
    Dna = "dna",
    Rna = "rna"
}
export interface MolecularSequenceVariant {
    /**
     * Extensions for cigar
     */
    _cigar?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for end
     */
    _end?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for observedAllele
     */
    _observedAllele?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for referenceAllele
     */
    _referenceAllele?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for start
     */
    _start?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed
     * documentation
     * [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: string;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is
     * 0-based then end is exclusive and does not include the last position. If the coordinate
     * system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number;
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
     * An allele is one of a set of coexisting sequence variants of a gene
     * ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).
     * Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on
     * the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it
     * should be the sequence on the positive (+) strand. This will lay in the range between
     * variant.start and variant.end.
     */
    observedAllele?: string;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene
     * ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).
     * Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on
     * the positive (+) strand of the reference sequence. When the sequence  type is DNA, it
     * should be the sequence on the positive (+) strand. This will lay in the range between
     * variant.start and variant.end.
     */
    referenceAllele?: string;
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is
     * either 0-based or 1-based, then start position is inclusive.
     */
    start?: number;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: any[] | boolean | Reference | number | number | null | string;
}