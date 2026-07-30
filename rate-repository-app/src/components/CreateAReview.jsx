import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        gap: 10,
    },
});

const CreateAReview = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            repositoryOwner: '',
            repositoryName: '',
            rating: '',
            text: ''
        },
        validationSchema: yup.object({
            repositoryOwner: yup
                .string()
                .required('Repository owner is required'),
            repositoryName: yup
                .string()
                .required('Repository name is required'),
            rating: yup
                .number()
                .min(0, 'Rating must be between 0 and 100')
                .max(100, 'Rating must be between 0 and 100')
                .required('Rating is required'),
            text: yup.string()
        }),
        onSubmit: async (values) => {
            console.log('values are:', values);
            navigate('/');
        }
    });

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Repository Owner"
                value={formik.values.repositoryOwner}
                onChangeText={formik.handleChange('repositoryOwner')}
                style={theme.textField}
                borderColor={formik.touched.repositoryOwner && formik.errors.repositoryOwner ? theme.colors.textError : theme.colors.black}
                onBlur={formik.handleBlur('repositoryOwner')}
            />
            {formik.touched.repositoryOwner && formik.errors.repositoryOwner && (
                <Text color='textError'>{formik.errors.repositoryOwner}</Text>
            )}
            <TextInput
                placeholder="Repository Name"
                value={formik.values.repositoryName}
                onChangeText={formik.handleChange('repositoryName')}
                style={theme.textField}
                borderColor={formik.touched.repositoryName && formik.errors.repositoryName ? theme.colors.textError : theme.colors.black}
                onBlur={formik.handleBlur('repositoryName')}
            />
            {formik.touched.repositoryName && formik.errors.repositoryName && (
                <Text color='textError'>{formik.errors.repositoryName}</Text>
            )}
            <TextInput
                placeholder="Rating (0-100)"
                value={formik.values.rating}
                onChangeText={formik.handleChange('rating')}
                style={theme.textField}
                borderColor={formik.touched.rating && formik.errors.rating ? theme.colors.textError : theme.colors.black}
                onBlur={formik.handleBlur('rating')}
                keyboardType="numeric"
            />
            {formik.touched.rating && formik.errors.rating && (
                <Text color='textError'>{formik.errors.rating}</Text>
            )}
            <TextInput
                placeholder="Review Text"
                value={formik.values.text}
                onChangeText={formik.handleChange('text')}
                style={theme.textField}
                borderColor={formik.touched.text && formik.errors.text ? theme.colors.textError : theme.colors.black}
                onBlur={formik.handleBlur('text')}
                multiline
            />
            <Pressable onPress={() => formik.handleSubmit()} style={theme.button}>
                <Text color='textWhite' fontWeight='bold'>Create Review</Text>
            </Pressable>
        </View>
    );
};

export default CreateAReview;