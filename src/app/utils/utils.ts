export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

export const formatDate = (dateString: string): string  => {
    if (!dateString) return ""; // Retorna vazio se a data for inválida
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};
  