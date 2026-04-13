import React from "react";
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from "@react-pdf/renderer";
const styles = StyleSheet.create({ page: { padding: 32, fontSize: 11 }, title: { fontSize: 22, marginBottom: 12 }, section: { marginBottom: 10 }, bold: { fontWeight: 700 } });
function ProposalPdf({ title, clientName, annualCurrent, annualProjected, annualSavings }: any) {
  return <Document><Page size="A4" style={styles.page}><Text style={styles.title}>{title}</Text><View style={styles.section}><Text>Cliente: {clientName}</Text></View><View style={styles.section}><Text>Coste actual anual: {annualCurrent.toFixed(2)} €</Text></View><View style={styles.section}><Text>Coste proyectado anual: {annualProjected.toFixed(2)} €</Text></View><View style={styles.section}><Text style={styles.bold}>Ahorro anual estimado: {annualSavings.toFixed(2)} €</Text></View></Page></Document>;
}
export async function buildProposalPdf(data: any) { return renderToBuffer(<ProposalPdf {...data} />); }
