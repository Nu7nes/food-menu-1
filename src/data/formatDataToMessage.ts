import { FieldValues } from "react-hook-form";

interface FormatProps {
    cart: FieldValues[]
    data: FieldValues
}

const phoneNumber: string = "+5521967048484"

export default function formatDataToMessage(data: FormatProps): void {
    let message = `Olá me chamo ${data.data.name}!\n\n`;

    data.cart.forEach((item, index) => {
        message += `Pedido ${index + 1}:\n`;
        message += `Sabor: ${item.flavor}\n`;
        message += `Remover:\n`;
        Object.keys(item.ingredients).forEach(ingrediente => {
            if (!item.ingredients[ingrediente]) {
                message += `- ${ingrediente}\n`;
            }
        });
        message += `Acrescentar:\n`;
        Object.keys(item.increment).forEach(ingrediente => {
            if (item.increment[ingrediente]) {
                message += `+ ${ingrediente}\n`;
            }
        });
        message += `Quantidade: ${item.quantity}\n`;
        message += `Preço: R$ ${item.price.toFixed(2)}\n`;
        message += `Preço adicional: R$ ${item.addsPrice.toFixed(2)}\n`;
        message += `\n\n`;
    });
    
    message += `Hora da retirada: ${data.data.pickUpTime}\n`;
    message += `O valor total foi de ${data.data.total}.`
    
    sendToWhatsApp(message)
}

function sendToWhatsApp(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}