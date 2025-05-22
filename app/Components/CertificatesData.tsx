import Certificates from "./Certficates";
import CertificateData from "../data/certificates.json"; // Import the JSON data

export default function CertificatesData() {
  return (
    <div>
      <Certificates CertificateData={CertificateData} />
    </div>
  );
}
