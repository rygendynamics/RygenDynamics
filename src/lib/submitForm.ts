export type ContactFormData = {
  type: 'contact';
  name: string;
  email: string;
  school: string;
  phone?: string;
  message: string;
};

export type CareerFormData = {
  type: 'career';
  name: string;
  email: string;
  phone: string;
  role: string;
  linkedin?: string;
  portfolio?: string;
  message: string;
  resume?: { filename: string; content: string };
};

export async function submitForm(data: ContactFormData | CareerFormData): Promise<void> {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      typeof result.error === 'string'
        ? result.error
        : 'Failed to send. Please try again or email rygendynamics@gmail.com directly.'
    );
  }
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.readAsDataURL(file);
  });
}
