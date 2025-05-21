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
            <p className="font-medium">Stand: 21.05.2025</p>
            
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