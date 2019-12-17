import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {Form, Field} from 'react-final-form';
import Modal from 'react-native-modal';
import {WidthPoint, Colors} from '../constants';
const ShareForm = ({shareModalVisibility, onSubmit}) => {
  return (
    <Modal style={styles.modal} isVisible={shareModalVisibility}>
      <Form
        onSubmit={values => {
          onSubmit(values);
        }}
        initialValues={{title: '', message: ''}}
        render={formProps => {
          // console.log('formProps:', formProps);
          const {handleSubmit, submitting, valid} = formProps;
          return (
            <View>
              <Field
                name="title"
                placeholder="title"
                render={fieldProps => {
                  // console.log('props:', fieldProps.input);
                  return (
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.titleInput}
                        placeholder={fieldProps.placeholder}
                        {...fieldProps.input}
                        color="black"
                      />
                    </View>
                  );
                }}
              />
              <Field
                name="message"
                placeholder="message"
                render={fieldProps => {
                  // console.log('props:', fieldProps.input);
                  return (
                    <View style={styles.inputContainer}>
                      <TextInput
                        multiline
                        style={styles.messageInput}
                        placeholder={fieldProps.placeholder}
                        {...fieldProps.input}
                        color="black"
                      />
                    </View>
                  );
                }}
              />
              <Button
                title="Submit"
                color="info"
                round={true}
                size="small"
                onPress={handleSubmit}
              />
            </View>
          );
        }}
      />
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '50%',
    width: '80%',
    marginTop: WidthPoint * 40,
    backgroundColor: Colors.tertiary,
    borderRadius: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 5 * WidthPoint,
    width: WidthPoint * 65,
  },
  titleInput: {
    minHeight: 7 * WidthPoint,
    fontSize: 4 * WidthPoint,
    textAlign: 'center',
  },
  messageInput: {
    height: WidthPoint * 40,
    fontSize: 4 * WidthPoint,
    textAlign: 'center',
  },
});
export default ShareForm;
