import {KeyboardView} from 'components/basics';
import {useFormik} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Yup from 'yup';
import {create} from 'yup/lib/array';

export const Create: React.FC = () => {
  const formik = useFormik({
    initialValues: {name: '', password: ''},
    validationSchema: Yup.object().shape({
      name: Yup.string().required('名前を入力してください'),
      password: Yup.string().required('パスワードを入力してください').min(4, '４文字以上'),
    }),
    validateOnChange: true,
    onSubmit: create,
  });

  return (
    <KeyboardView>
      <View style={styles.form}>
        <Input
          label="名前"
          containerStyle={styles.input}
          autoCapitalize="none"
          errorMessage={formik.errors.name}
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
        />
        <Input
          label="パスワード"
          containerStyle={styles.input}
          secureTextEntry
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
        />
        <Button
          disabled={formik.isSubmitting}
          onPress={() => formik.handleSubmit()}
          title="登録する"
          buttonStyle={styles.button}
        />
      </View>
    </KeyboardView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {marginTop: 20, width: '80%'},
  button: {
    marginTop: 30,
  },
});
