import * as React from "react";
import styles from "./FeedbackCustomizer.module.scss";
import Lottie from "lottie-react";
import Success from "../../assets/success-animation.json";
import { FEEDBACK_TEXT } from "../constants";

export interface ISuccessProps {
  goBack:()=>void;
}

export const SuccessPage: React.FC<ISuccessProps> = (props:ISuccessProps): JSX.Element => {

  const handleGoBack = () => {
    props.goBack && props.goBack();
  };

  return (
    <div className={styles["successWrapper"]}>
      <p style={{ marginBottom: "0", fontSize: "15px", fontWeight: "500" }}>
        {FEEDBACK_TEXT.successMessage}
      </p>
      <Lottie animationData={Success} style={{ width: "40%" }} loop={false} />
      <p style={{ marginBottom: "0", marginTop: "0" }}>
        {FEEDBACK_TEXT.responseMessage}
      </p>
      <p style={{ marginBottom: "0", color: "#312783" }}>
        {FEEDBACK_TEXT.anotherResponsePrompt}
      </p>
      <p
        style={{
          marginBottom: "0",
          marginTop: "0",
          color: "#312783",
          fontWeight: "700",
          cursor: "pointer",
        }}
        onClick={handleGoBack}
      >
        {FEEDBACK_TEXT.clickHere}
      </p>
    </div>
  )
};
