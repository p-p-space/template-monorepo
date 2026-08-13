import * as z from 'zod';

// Shared financial constants and calculations
export const DEFAULT_TAX_RATE = 0.16; // 16% VAT/IVA

export function calculateTax(amount: number, rate: number = DEFAULT_TAX_RATE): number {
  return Number((amount * rate).toFixed(2));
}

export function calculateTotal(baseAmount: number, taxRate: number = DEFAULT_TAX_RATE): number {
  const tax = calculateTax(baseAmount, taxRate);
  return Number((baseAmount + tax).toFixed(2));
}

// Shared Domain Schemas (Zod)
export const BaseCustomerSchema = z.object({
  id: z.uuid(),
  taxId: z.string().min(5, 'Tax ID / RIF must have at least 5 characters'),
  name: z.string().min(2, 'Name is required'),
  email: z.email('Invalid email address'),
});

export type BaseCustomer = z.infer<typeof BaseCustomerSchema>;
