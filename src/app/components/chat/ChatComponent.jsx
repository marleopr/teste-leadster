import {
  ChatContainer,
  ChatModal,
  ChatCloseButton,
  ChatMsg,
  ChatButton,
} from "./ChatComponentStyled";

const ChatComponent = ({ openModal, closeModal }) => {
  return (
    <ChatContainer>
      {openModal && (
        <ChatModal>
          <ChatCloseButton onClick={closeModal}>x</ChatCloseButton>
          <ChatMsg>Olá, tudo bem?</ChatMsg>
          <ChatMsg>
            Quer ver uma Demonstração Personalizada da Plataforma? 😄
            <ChatButton>Sim, começar agora</ChatButton>
            <p>Clicando acima você aceita nossas Políticas de privacidade</p>
          </ChatMsg>
          {/* Lógica e conteúdo do chat */}
        </ChatModal>
      )}
    </ChatContainer>
  );
};

export default ChatComponent;
