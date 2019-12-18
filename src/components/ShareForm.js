import React from 'react';
import {View, StyleSheet, TextInput, Alert} from 'react-native';
import {Form, Field} from 'react-final-form';
import Modal from 'react-native-modal';
import {WidthPoint, Colors} from '../constants';
import CustomMenuButton from './CustomMenuButton';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import {getAuth} from '../utilities/selectors/index';
IconEntypo.loadFont();
const ShareForm = ({shareModalVisibility, onSubmit, onCancelHandler}) => {
  const authorized = useSelector(getAuth).authorized;
  return (
    <Modal
      style={styles.modal}
      isVisible={shareModalVisibility}
      onBackdropPress={onCancelHandler}
      onRequestClose={onCancelHandler}
      animationType="slide"
      animationOut="rotate"
      animationOutTiming={500}
      animationIn="pulse"
      animationInTiming={500}
      useNativeDriver={true}
      coverScreen={true}>
      <IconEntypo
        style={styles.cancelIcon}
        onPress={onCancelHandler}
        name="squared-cross"
        size={8 * WidthPoint}
        color="black"
      />
      <Form
        onSubmit={values => {
          onSubmit(values);
        }}
        initialValues={{title: '', message: ''}}
        render={formProps => {
          // console.log('formProps:', formProps);

          const {handleSubmit} = formProps;
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
              <CustomMenuButton
                style={styles.submitButton}
                title="Submit"
                onPress={
                  authorized.name
                    ? handleSubmit
                    : () => {
                        Alert.alert(
                          "Can't submit ",
                          'You should be logged in to share news',
                          [
                            {
                              text: 'OK',
                            },
                          ],
                          {cancelable: false},
                        );
                      }
                }
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
  submitButton: {
    marginTop: 5 * WidthPoint,
    alignSelf: 'center',
    backgroundColor: Colors.secondary,
  },
  cancelIcon: {
    position: 'absolute',
    top: 3 * WidthPoint,
    right: 3 * WidthPoint,
  },
});
export default ShareForm;
