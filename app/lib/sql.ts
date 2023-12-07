import { sql } from '@vercel/postgres';
import { InvoiceCreate, InvoiceUpdate } from './definitions';


export async function SqlinsertInvoice(invoiceData: InvoiceCreate) {

  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${invoiceData.customerId}, ${invoiceData.amountInCents}, ${invoiceData.status}, ${invoiceData.date})
  `;
  }
  catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

}

export async function SqlupdateInvoice(invoiceData: InvoiceUpdate) {
  
  const { customerId, amountInCents, status, id } = invoiceData
  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  }
  catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
}


export async function SqlDeleteInvoice(invoiceData: any) {


  console.log(invoiceData)

  try {
    await sql`DELETE FROM invoices WHERE id = ${invoiceData.id}`;
  }
  catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}