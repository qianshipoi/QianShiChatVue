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
            <a-form-item ref="regName" label="用户名" name="regName">
                <a-input
                    v-model:value="formState.regName"
                    placeholder="input username"
                    allow-clear
                />
            </a-form-item>
            <a-form-item ref="regPassword" label="密码" name="regPassword">
                <a-input-password
                    v-model:value="formState.regPassword"
                    placeholder="input password"
                />
            </a-form-item>
            <a-form-item label="头像">
                <a-upload
                    name="avatar"
                    list-type="picture-card"
                    class="avatar-uploader"
                    :show-upload-list="false"
                    :custom-request="customRequest"
                    :before-upload="beforeUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="avatar" />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                        <div class="ant-upload-text">Upload</div>
                    </div>
                </a-upload>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24 }">
                <a-button style="width: 100%;" type="primary" @click="onSubmit">注册</a-button>
                <a-button style="width: 100%; margin-top: 10px" @click="resetForm">重置</a-button>
                <a-button style="width: 100%; margin-top: 10px" @click="login">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { registered } from '../request/user'
import { message } from 'ant-design-vue'
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
export default {
    props: {
        switchFunc: Function
    },
    setup(props) {
        const router = useRouter()
        const store = useStore();
        const formRef = ref();
        const imageUrl = ref('');
        const loading = ref(false)
        const formState = reactive({
            regName: '',
            regPassword: '',
            avatar: null
        })
        const rules = {
            regName: [
                { required: true, message: "请输入用户名", trigger: 'blur' }
            ],
            regPassword: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
        }
        const onSubmit = () => {
            formRef.value.validate().then(async () => {
                const { status, data } = await registered({
                    username: formState.regName,
                    password: formState.regPassword,
                    avatar: formState.avatar
                })
                if (status === 200 && data.statusCode === 200) {
                    store.commit('login', {
                        accessToken: data.data.accessToken,
                        user: data.data.user
                    })
                    router.push('/')
                } else {
                    message.error(data.errors);
                }
            }).catch(error => {
                console.error('error', error);
            })
        }
        const resetForm = () => {
            formRef.value.resetFields();
        }
        const login = () => {
            props.switchFunc();
        }
        const beforeUpload = (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 1;
            if (!isLt2M) {
                message.error('Image must smaller than 1MB!');
            }
            return isJpgOrPng && isLt2M;
        }
        const customRequest = (file) => {
            formState.avatar = file.file;
            getBase64(file.file, img => {
                imageUrl.value = img;
            });
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
            login,
            loading,
            imageUrl,
            beforeUpload,
            customRequest
        }
    },
}
</script>

<style scoped>
.content {
    background-color: wheat;
    padding: 40px;
}
.avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
}
.avatar {
    width: 128px;
    height: 128px;
    object-fit: cover;
}
.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
}
</style>