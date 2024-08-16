import jsPDF from "jspdf";
import "jspdf-autotable";

const GeneratePDF = (appointment) => {
  if (!appointment) {
    console.error("No appointment data provided");
    return;
  }

  const {
    fecha,
    hora,
    status,
    marca,
    modelo,
    año,
    sucursal_id,
    nameUser,
    emailUser,
    cellphoneUser,
  } = appointment;

  const doc = new jsPDF();

  // Encabezado con título
  doc.setFontSize(22);
  doc.setTextColor("#2A2B2C"); // Color de encabezado
  doc.text("Comprobante de Cita", 105, 20, null, null, "center");

  // Líneas divisorias
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(14, 30, 196, 30);

  // Información del cliente
  doc.setFontSize(12);
  doc.setTextColor("#555555");
  doc.text("Información del Cliente", 14, 40);
  doc.setFontSize(10);
  doc.setTextColor("#333333");
  doc.text(`Nombre: ${nameUser}`, 14, 46);
  doc.text(`Correo: ${emailUser}`, 14, 52);
  doc.text(`Teléfono: ${cellphoneUser}`, 14, 58);

  // Líneas divisorias
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.2);
  doc.line(14, 63, 196, 63);

  // Información de la cita
  doc.setFontSize(12);
  doc.setTextColor("#555555");
  doc.text("Información de la Cita", 14, 70);
  doc.setFontSize(10);
  doc.setTextColor("#333333");
  doc.text(`Fecha: ${fecha}`, 14, 82);
  doc.text(`Hora: ${hora}`, 14, 88);
  doc.text(
    `Estado: ${
      status === 1
        ? "En espera de confirmación"
        : status === 2
        ? "Aprobada"
        : "No especificado"
    }`,
    14,
    94
  );

  // Detalles adicionales de la cita
  doc.autoTable({
    startY: 105,
    head: [["Datos", "Información de cita"]],
    body: [
      ["Fecha", fecha || "No especificado"],
      ["Hora", hora || "No especificado"],
      [
        "Estado",
        status === 1
          ? "En espera de confirmación"
          : status === 2
          ? "Aprobada"
          : "No especificado",
      ],
      ["Marca", marca || "No especificada"],
      ["Modelo", modelo || "No especificado"],
      ["Año", año || "No especificado"],
      ["Sucursal", sucursal_id === 1 ? "Casa Blanca" : "Av de la Luz"],
    ],
    theme: "grid", // Cambiamos el tema a grid para un estilo más limpio
    headStyles: { fillColor: ["#cc3333"] }, // Rojo oscuro para el encabezado
    styles: { fontSize: 10, textColor: "#333333", cellPadding: 3 },
    alternateRowStyles: { fillColor: "#4D90FF" }, // Cambiamos el color de fondo de las filas alternas a un tono de rojo claro
    columnStyles: {
      0: { fontStyle: "bold" }, // Hacemos el primer campo en negrita
      1: { cellWidth: "wrap" }, // Ajustamos el ancho automático del texto
    },
  });

  // Información adicional
  doc.setFontSize(12);
  doc.setTextColor("#555555");
  doc.text("Información adicional", 14, doc.autoTable.previous.finalY + 10);
  doc.setFontSize(10);
  doc.setTextColor("#333333");
  doc.text(
    "Nota: Por favor, asegúrese de llegar a tiempo para su cita. Si necesita reprogramar, contáctenos con antelación.",
    14,
    doc.autoTable.previous.finalY + 16
  );

  // Agregar pie de página
  doc.setFontSize(10);
  doc.setTextColor("#999999");
  doc.text(
    "Gracias por confiar en nuestros servicios.",
    105,
    doc.internal.pageSize.height - 10,
    null,
    null,
    "center"
  );

  // Guardar el PDF
  doc.save(`Comprobante_Cita_${fecha || "sin_fecha"}.pdf`);
};

export default GeneratePDF;
