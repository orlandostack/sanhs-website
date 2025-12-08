import { Modal, Button } from "antd";
import theme from "../../styles/Theme";

const HeroModal = ({ open, onClose, title, content }) => {
  return (
    <Modal
      title={
        <h2
          style={{
            textAlign: "center",
            margin: 0,
            fontSize: theme.font.size["2xl"],
            fontFamily: theme.font.family.heading,
            color: theme.color.primary,
          }}
        >
          {title}
        </h2>
      }
      open={open}
      centered
      width={600}
      onCancel={onClose}
      footer={[
        <Button
          key="cancel"
          onClick={onClose}
          style={{
            background: theme.color.gray[200],
            border: "none",
            color: theme.color.black,
            padding: "8px 16px",
            borderRadius: theme.radius.md,
          }}
        >
          Close
        </Button>,

        <Button
          key="ok"
          type="primary"
          onClick={onClose}
          style={{
            background: theme.color.primary,
            borderColor: theme.color.primary,
            color: theme.color.white,
            padding: "8px 16px",
            borderRadius: theme.radius.md,
          }}
        >
          OK
        </Button>,
      ]}
    >
      <p style={{ fontSize: theme.font.size.base, lineHeight: "1.6" }}>
        {content}
      </p>
    </Modal>
  );
};

export default HeroModal;
