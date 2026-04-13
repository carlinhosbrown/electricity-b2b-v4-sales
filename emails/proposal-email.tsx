type Props = { clientName: string; proposalTitle: string; savings: number; proposalUrl: string; };
export function ProposalEmail({ clientName, proposalTitle, savings, proposalUrl }: Props) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
      <h1>Tu propuesta está lista</h1>
      <p>Hola {clientName},</p>
      <p>Hemos preparado la propuesta <strong>{proposalTitle}</strong>.</p>
      <p>Ahorro estimado anual: <strong>{new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(savings)}</strong></p>
      <p><a href={proposalUrl}>Ver propuesta</a></p>
    </div>
  );
}
