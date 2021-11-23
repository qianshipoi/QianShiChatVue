<template>
    <div class="content">
        <a-form
            ref="formRef"
            :model="formState"
            :rules="rules"
            hideRequiredMark
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
        >
            <a-form-item ref="name" label="用户名" name="name">
                <a-input v-model:value="formState.name" placeholder="input username" allow-clear />
            </a-form-item>
            <a-form-item ref="password" label="密码" name="password">
                <a-input-password v-model:value="formState.password" placeholder="input password" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24 }">
                <a-button style="width: 100%;" type="primary" @click="onSubmit">登录</a-button>
                <a-button style="width: 100%; margin-top: 10px" @click="resetForm">重置</a-button>
                <a-button style="width: 100%; margin-top: 10px" @click="registered">注册</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { ref, defineComponent, reactive } from 'vue'
import { login } from '../request/user'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    props: {
        switchFunc: Function
    },
    setup(props) {
        const router = useRouter()
        const store = useStore();
        const formRef = ref();
        const formState = reactive({
            name: '',
            password: ''
        })
        const rules = {
            name: [
                { required: true, message: "请输入用户名", trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
        }
        const onSubmit = () => {
            formRef.value.validate().then(async () => {
                const { data, status } = await login({ username: formState.name, password: formState.password })
                if (status === 200 && data.statusCode === 200) {
                    store.commit('login', {
                        accessToken: data.data.accessToken,
                        user: data.data.user
                    })
                    router.push('/')
                }
            }).catch(error => {
                console.error('error', error);
            })
        }
        const resetForm = () => {
            formRef.value.resetFields();
        }
        const registered = () => {
            props.switchFunc();
        }
        return {
            formRef,
            formState,
            rules,
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 20,
            },
            onSubmit,
            resetForm,
            registered
        }
    },
})
</script>

<style scoped>
.content {
    background-color: wheat;
    padding: 40px;
}
</style>