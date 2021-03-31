import React from "react";
import { Alert, Keyboard, StyleSheet } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import { AppFormField, SubmitButton } from "./forms";
import AppForm from './forms/Form'
import messagesApi from "../api/messages";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      resetForm();
      console.log("Success", result);
      return Alert.alert("Success", "Thank you for contacting the lister!");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="SEND MESSAGE" />
      <SubmitButton style={styles.button} title="SEND MESSAGE" />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const styles = StyleSheet.create({
  button: {
   paddingTop: 400
  }
})

export default ContactSellerForm;
