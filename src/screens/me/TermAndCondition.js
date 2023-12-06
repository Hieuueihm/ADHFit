import React from "react";
import { Text, Image, TouchableOpacity, View, Dimensions, StyleSheet, ScrollView, Alert } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";

export default function TermAndCondition() {
    const navigation = useNavigation();
    const handleDecline = () => {
        Alert.alert(
            "Notification",
            "Please uninstall the application if you do not accept the terms of use",
            [
                {
                    text: "Close",
                    style: "cancel"
                }
            ]
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ROUTES.SETTINGS_SCREEN)
                    }}>
                    <View style={{
                        width: 100,
                        alignItems: 'flex-start',
                        //    backgroundColor: 'red',
                        marginLeft: -50,
                        marginRight: -20,
                    }}><MaterialCommunityIcon name='chevron-left' size={30}></MaterialCommunityIcon></View>
                </TouchableOpacity>
                <View style={{}}><Text style={styles.headerText}>Terms And Condition</Text></View>
            </View>
            <View style={styles.scrollView}>
                <ScrollView>
                    <Text style={styles.smallText}>Last updated: November 07, 2023{'\n'}
                        Please read these terms and conditions carefully before using Our Service.</Text>
                    <Text style={styles.unitText}>Interpretation</Text>
                    <Text style={styles.smallText}>The words of which the initial letter is capitalized have meanings defined under the following conditions.
                        The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Text>
                    <Text style={styles.unitText}>Definitions</Text>
                    <Text style={styles.smallText}>For the purposes of these Terms and Conditions:</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Application</Text> means the software program
                        provided by the Company downloaded by You on any electronic device, named <Text style={styles.boldText}>ADHFIT</Text>.</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Application Store</Text> means the digital distribution service operated
                        and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Affiliate</Text> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares,
                        equity interest or other securities entitled to vote for election of directors or other managing authority.</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Country</Text> refers to: Vietnam.</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Company</Text> (referred to as either "the Company"
                        , "We", "Us" or "Our" in this Agreement) refers to LEGACY GROUP, Number 1 Chua Lang Dong Da Ha Noi.</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Device</Text> means any
                        device that can access the Service such as a computer, a cellphone or a digital tablet.</Text>

                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Service</Text> refers to the Application.</Text>

                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Terms and Conditions</Text> (also referred as "Terms") mean these
                        Terms and Conditions that form the entire agreement between You and the
                        Company regarding the use of the Service. This Terms and Conditions agreement
                        has been created with the help of the Terms and Conditions Generator.</Text>

                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>Third-party Social Media Service</Text> means any services or content (including data, information, products or services)
                        provided by a third-party that may be displayed, included or made available by the Service.</Text>

                    <Text style={styles.smallText}>{'\t'}{'\u2022'} <Text style={styles.boldText}>You</Text> means the individual accessing or using the Service, or the company, or other legal
                        entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
                    <Text style={styles.unitText}>Acknowledgment</Text>
                    <Text style={styles.smallText}>These are the Terms and Conditions governing the use
                        of this Service and the agreement that operates between You and the Company.
                        These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</Text>

                    <Text style={styles.smallText}>Your access to and use of the Service is conditioned
                        on Your acceptance of and compliance with these Terms and Conditions.
                        These Terms and Conditions apply to all visitors, users and others who access or use the Service.</Text>

                    <Text style={styles.smallText}>By accessing or using the Service You agree to be bound by these Terms and Conditions.
                        If You disagree with any part of these Terms and Conditions then You may not access the Service.</Text>

                    <Text style={styles.smallText}>You represent that you are over the age of 18. The Company does
                        not permit those under 18 to use the Service.</Text>
                    <Text style={styles.smallText}>Your access to and use of the Service is also conditioned on Your acceptance of and compliance
                        with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures
                        on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells
                        You about Your privacy rights and how the law protects You.
                        Please read Our Privacy Policy carefully before using Our Service.</Text>
                    <Text style={styles.unitText}>Links to Other Websites</Text>
                    <Text style={styles.smallText}>Our Service may contain links to third-party web sites or
                        services that are not owned or controlled by the Company.</Text>
                    <Text style={styles.smallText}>The Company has no control over, and assumes no responsibility for, the content, privacy policies,
                        or practices of any third party web sites or services. You further acknowledge and agree that
                        the Company shall not be responsible or liable, directly or indirectly, for any damage
                        or loss caused or alleged to be caused by or in
                        connection with the use of or reliance on any such content,
                        goods or services available on or through any such web sites or services.</Text>

                    <Text style={styles.smallText}>We strongly advise You to read the terms and conditions
                        and privacy policies of any third-party web sites or services that You visit.</Text>
                    <Text style={styles.unitText}>Termination</Text>
                    <Text style={styles.smallText}>We may terminate or suspend Your access immediately, without prior notice or liability,
                        for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</Text>
                    <Text style={styles.smallText}>Upon termination, Your right to use the Service will cease immediately.</Text>

                    <Text style={styles.unitText}>Limitation of Liability</Text>

                    <Text style={styles.smallText}>Notwithstanding any damages that You might incur, the entire liability of the Company and
                        any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited
                        to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</Text>

                    <Text style={styles.smallText}>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable
                        for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits
                        , loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any
                        way related to the use of or inability to use the Service, third-party software and/or
                        third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company
                        or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</Text>

                    <Text style={styles.smallText}>Some states do not allow the exclusion of implied warranties or limitation of
                        liability for incidental or consequential damages, which means that some of the above limitations may not apply.
                        In these states, each party's liability will be limited to the greatest extent permitted by law.</Text>
                    <Text style={styles.unitText}>"AS IS" and "AS AVAILABLE" Disclaimer</Text>

                    <Text style={styles.smallText}> <Text style={styles.smallText}>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all
                        faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own
                        behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims
                        all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied
                        warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may
                        arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing,
                        the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet
                        Your requirements, achieve any intended results, be compatible or work with any other software, applications,
                        systems or services, operate without interruption, meet any performance or reliability standards or be error
                        free or that any errors or defects can or will be corrected.</Text></Text>

                    <Text style={styles.smallText}>Without limiting the foregoing, neither the Company nor any of the company's provider makes
                        any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or
                        the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or
                        error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the
                        Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are
                        free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</Text>

                    <Text style={styles.smallText}>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable
                        statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the
                        exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</Text>
                    <Text style={styles.unitText}>Disputes Resolution</Text>
                    <Text style={styles.smallText}>If You have any concern or dispute about the Service, You agree to first
                        try to resolve the dispute informally by contacting the Company.</Text>

                    <Text style={styles.unitText}>Severability</Text>
                    <Text style={styles.smallText}>If any provision of these Terms is held to be unenforceable or invalid,
                        such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent
                        possible under applicable law and the remaining provisions will continue in full force and effect.</Text>
                    <Text style={styles.unitText}>Waiver</Text>
                    <Text style={styles.smallText}>Except as provided herein, the failure to exercise a right or to require performance
                        of an obligation under these Terms shall not effect a party's ability to exercise such right or require such
                        performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</Text>
                    <Text style={styles.unitText}>Translation Interpretation</Text>
                    <Text style={styles.smallText}>These Terms and Conditions may have been translated if We have made them available to You on our Service.
                        You agree that the original English text shall prevail in the case of a dispute.</Text>

                    <Text style={styles.unitText}>Contact Us</Text>
                    <Text style={styles.smallText}>If you have any questions about these Terms and Conditions, You can contact us:</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'}   By email: 7cho@.vn</Text>
                    <Text style={styles.smallText}>{'\t'}{'\u2022'}   By phone number: 8386888980</Text>






                </ScrollView>
            </View>
            <View style={styles.bootomTab}>
                <TouchableOpacity
                    onPress={handleDecline}>
                    <View style={[styles.bottomButton,]}>
                        <Text style={{ fontSize: 18, color: '#81acff' }}>DECLINE</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.bottomButton, { backgroundColor: '#81acff' }]}>
                        <Text style={{ fontSize: 18, color: 'white' }}>ACCEPT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    scrollView: {
        height: Dimensions.get("screen").height * 0.7,

    },
    bootomTab: {
        height: Dimensions.get("screen").height * 0.25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: '#d1d1d1',
        borderTopWidth: 1,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
    bottomButton: {
        height: 45,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#81acff',
        marginTop: 25,
    },
    unitText: {
        color: '#81acff',
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 10,
    },
    smallText: {
        color: 'black',
        fontSize: 14,
        marginHorizontal: 10,
        marginTop: 15,
    },
    Header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#9d9d9d',
        backgroundColor: 'white'
    },
    headerText: {
        color: '#81acff',
        fontSize: 24,
    },
    boldText: {
        color: "black",
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    }
})
