import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function checkDomains() {
  try {
    // 1. Listar dominios
    const domains = await resend.domains.list();
    console.log("📄 Dominios registrados en Resend:");
    domains.forEach(d => {
      console.log(`- ${d.name} (id: ${d.id}, status: ${d.status})`);
    });

    // Buscamos el dominio que te interesa
    const domainName = "zentherasoft.com";
    const domain = domains.find(d => d.name === domainName);

    if (!domain) {
      console.log(`❌ El dominio ${domainName} no está registrado.`);
      return;
    }

    // 2. Mostrar detalles del dominio
    const domainDetails = await resend.domains.get(domain.id);
    console.log(`\n🔍 Detalles del dominio "${domainName}":`);
    console.log(`ID: ${domainDetails.id}`);
    console.log(`Nombre: ${domainDetails.name}`);
    console.log(`Status: ${domainDetails.status}`);
    console.log(`Región: ${domainDetails.region}`);
    console.log(`Creado: ${domainDetails.createdAt}`);

    // 3. Forzar verificación solo si no está verificado
    if (domainDetails.status !== "verified") {
      console.log(`\n🚀 Forzando verificación del dominio ${domainName}...`);
      const verifyResponse = await resend.domains.verify(domain.id);
      console.log("Resultado verificación:", verifyResponse.status);
    } else {
      console.log(`✅ El dominio ya está verificado.`);
    }

  } catch (error) {
    console.error("❌ Error gestionando dominios:", error);
  }
}

// Ejecutar la función
checkDomains();
