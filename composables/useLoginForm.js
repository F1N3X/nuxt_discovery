export default function () {

    const values = reactive({
        email: '',
        password: '',
        name: '',
        age: 0,
        username: ''
    })

    const onSubmit = () => { 
        console.log('Form submitted')
    }

    const validateForm1 = () => {
        onSubmit()
        if (!values.email || !values.password) {
          return false
        }
        return true
    }

    const validateForm2 = () => {
        onSubmit()
        if (!values.name || !values.age) {
          return false
        }
        return true
    }

    const validateForm3 = () => {
        onSubmit()
        if (!values.username) {
          return false
        }
        return true
    }

    return {
        values,
        onSubmit,
        validateForm1,
        validateForm2,
        validateForm3
    }
}