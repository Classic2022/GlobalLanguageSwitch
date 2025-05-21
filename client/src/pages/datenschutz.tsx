import Link from "../next-link"
import { useLanguage } from "@/context/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SEOHead from "@/components/seo-head"

export default function Datenschutz() {
  const { language } = useLanguage()
  
  // Define SEO metadata for this page
  const seoMetadata = {
    title: {
      de: "Datenschutzerklärung | Urban Reparaturen",
      en: "Privacy Policy | Urban Reparaturen"
    },
    description: {
      de: "Datenschutzerklärung und Informationen zum Datenschutz von Urban Reparaturen - Ihr Partner für Wohnungspflege in Berlin.",
      en: "Privacy policy and data protection information for Urban Reparaturen - Your partner for apartment care in Berlin."
    },
    keywords: {
      de: "Datenschutz, Urban Reparaturen, Urban Hausverwaltung UH GmbH, DSGVO",
      en: "Privacy policy, Urban Reparaturen, Urban Hausverwaltung UH GmbH, GDPR"
    }
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <SEOHead metadata={seoMetadata} />
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-[#2F2F2F] mb-8">
            {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>
          
          <div className="prose max-w-none text-[#2F2F2F]/80">
            <p className="font-medium">
              {language === "de" 
                ? `Stand: ${new Date().toLocaleDateString('de-DE')}`
                : `Version: ${new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}`}
            </p>
            
            {language === "de" ? (
              <>
                <p>
                  Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Eine Nutzung der Internetseiten ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
                </p>
                
                <p>
                  Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für uns geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
                </p>
                
                <p>
                  Wir haben als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">Begriffsbestimmungen</h2>
                <p>
                  Die Datenschutzerklärung beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
                </p>
                
                <p>Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:</p>
                
                <p><strong>a) personenbezogene Daten</strong></p>
                <p>
                  Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
                </p>
                
                <p><strong>b) betroffene Person</strong></p>
                <p>
                  Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Name und Anschrift des für die Verarbeitung Verantwortlichen
                </h2>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:
                </p>
                
                <p>Urban Hausverwaltung UH GmbH</p>
                <p>Guy Ben Edelsburg</p>
                <p>Zähringerstr. 28</p>
                <p>10707 Berlin</p>
                <p>Deutschland</p>
                <p>03086329180</p>
                <p>DE325004163</p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Cookies / SessionStorage / LocalStorage
                </h2>
                <p>
                  Die Internetseiten verwenden teilweise so genannte Cookies, LocalStorage und SessionStorage. Dies dient dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Local Storage und SessionStorage ist eine Technologie, mit welcher ihr Browser Daten auf Ihrem Computer oder mobilen Gerät abspeichert. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Sie können die Verwendung von Cookies, LocalStorage und SessionStorage jederzeit über die Einstellungen Ihres Browsers deaktivieren und bereits gespeicherte Cookies, LocalStorage und SessionStorage löschen. Die Deaktivierung kann jedoch dazu führen, dass Sie nicht alle Funktionen dieser Website nutzen können.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Kontaktmöglichkeit über die Internetseite
                </h2>
                <p>
                  Die Internetseite enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Routinemäßige Löschung und Sperrung von personenbezogenen Daten
                </h2>
                <p>
                  Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.
                </p>
                
                <p>
                  Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Rechte der betroffenen Person
                </h2>
                <p><strong>a) Recht auf Bestätigung</strong></p>
                <p>
                  Jede betroffene Person hat das Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an unseren Datenschutzbeauftragten oder einen anderen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                </p>
                
                <p><strong>b) Recht auf Auskunft</strong></p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten.
                </p>
              </>
            ) : (
              <>
                <p>
                  We are very pleased about your interest in our company. The use of our website is generally possible without providing any personal data. However, if a data subject wants to use special services offered by our company via the website, the processing of personal data might become necessary. If the processing of personal data is required and there is no legal basis for such processing, we generally obtain the consent of the data subject.
                </p>
                
                <p>
                  The processing of personal data—such as the name, address, email address, or telephone number of a data subject—is always carried out in accordance with the General Data Protection Regulation (GDPR) and in compliance with the country-specific data protection regulations applicable to us. With this privacy policy, our company would like to inform the public about the nature, scope, and purpose of the personal data we collect, use, and process. Furthermore, data subjects are informed of their rights through this privacy policy.
                </p>
                
                <p>
                  As the controller responsible for processing, we have implemented numerous technical and organizational measures to ensure the most complete protection possible of the personal data processed via this website. Nevertheless, internet-based data transmissions can generally have security gaps, so absolute protection cannot be guaranteed. For this reason, every data subject is free to transmit personal data to us via alternative means, such as by telephone.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">Definitions</h2>
                <p>
                  This privacy policy is based on the terms used by the European legislator when enacting the General Data Protection Regulation (GDPR). Our privacy policy is intended to be easy to read and understand for the public, as well as for our customers and business partners. To ensure this, we would like to explain the terminology used in advance.
                </p>
                
                <p>Among others, we use the following terms in this privacy policy:</p>
                
                <p><strong>a) Personal Data</strong></p>
                <p>
                  Personal data means any information relating to an identified or identifiable natural person (hereinafter referred to as "data subject"). A natural person is considered identifiable if they can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or one or more specific factors that express the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.
                </p>
                
                <p><strong>b) Data Subject</strong></p>
                <p>
                  A data subject is any identified or identifiable natural person whose personal data is processed by the controller responsible for the processing.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Name and Address of the Controller
                </h2>
                <p>
                  The controller in the sense of the General Data Protection Regulation, other data protection laws applicable in the member states of the European Union, and other provisions of a data protection nature is:
                </p>
                
                <p>Urban Hausverwaltung UH GmbH</p>
                <p>Guy Ben Edelsburg</p>
                <p>Zähringerstr. 28</p>
                <p>10707 Berlin</p>
                <p>Germany</p>
                <p>03086329180</p>
                <p>DE325004163</p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Cookies / SessionStorage / LocalStorage
                </h2>
                <p>
                  Our websites use so-called cookies, LocalStorage, and SessionStorage. These technologies help make our services more user-friendly, effective, and secure. LocalStorage and SessionStorage allow your browser to store data on your computer or mobile device. Cookies are text files that are stored and saved on a computer system via an internet browser. You can disable the use of cookies, LocalStorage, and SessionStorage at any time via your browser settings and delete already stored data. However, deactivation may result in not being able to use all functions of this website.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Contact via the Website
                </h2>
                <p>
                  Due to legal requirements, our website contains information that enables quick electronic contact with our company, including a general address for electronic mail (email). If a data subject contacts the controller by email or through a contact form, the personal data transmitted by the data subject will be stored automatically. Such voluntarily transmitted personal data is stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Routine Deletion and Blocking of Personal Data
                </h2>
                <p>
                  The controller processes and stores personal data of the data subject only for the period necessary to achieve the purpose of storage, or as far as this is granted by the European legislator or another legislator in laws or regulations to which the controller is subject.
                </p>
                
                <p>
                  If the storage purpose no longer applies or if a storage period prescribed by the European legislator or another competent legislator expires, the personal data will be routinely blocked or deleted in accordance with legal requirements.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2F2F2F]">
                  Rights of the Data Subject
                </h2>
                <p><strong>a) Right to Confirmation</strong></p>
                <p>
                  Every data subject has the right to obtain confirmation from the controller as to whether personal data concerning them is being processed. If a data subject wishes to exercise this right, they may contact our data protection officer or another employee of the controller at any time.
                </p>
                
                <p><strong>b) Right to Access</strong></p>
                <p>
                  Every data subject has the right to obtain free information at any time from the controller about the personal data stored about them and to receive a copy of this information.
                </p>
              </>
            )}
          </div>
          
          <div className="mt-10">
            <Link href="/" className="text-[#1A4D3C] hover:underline font-medium">
              {language === "de" ? "← Zurück zur Startseite" : "← Back to Homepage"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}