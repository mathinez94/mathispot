import React,{useState}  from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import { Button, Divider, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'

const PredictionTableRows = ({setShowForm,addRow}) => {
    const [formInputs, setFormInputs] = useState([]);
    const [form]=useForm();
   
    const handleSubmit = (value) => {
        setFormInputs(value);
        addRow(formInputs);
        form.resetFields();
        
    }
    return (
        <div className='mt-6 shadow-lg w-[60%]'>
        <div className=''>
            <CancelIcon  className='text-right text-red-500' onClick={()=>setShowForm(false)}/>
            <Form onFinish={handleSubmit} form={form} labelCol={{span: 10}}>
                <Form.Item
                name='username' label='Username' 
                rules={[
                    {required: true, message:'kindly provide a name'}
                ]}
                >
                    <Input placeholder='type your username'/>
                </Form.Item>
                <Form.Item
                name='country' label='Country' 
                rules={[
                    {required: true, message:'kindly provide name of country fixture is held'}
                ]}
                >
                    <Input placeholder='enter name of country fixture is held'/>
                </Form.Item>
                <div className="teams">
                    <Form.Item
                    name='home' label='Home' 
                    rules={[
                        {required: true, message:'provide home team name'}
                    ]}
                    >
                        <Input placeholder='home team'/>
                    </Form.Item>
                    <Divider type='vertical'>vs</Divider>
                    <Form.Item
                    name='away' label='Away' 
                    rules={[
                        {required: true, message:'provide away team name'}
                    ]}
                    >
                        <Input placeholder='away team'/>
                    </Form.Item>
                </div>
                <Form.Item
                name='prediction' label='Prediction' 
                rules={[
                    {required: true, message:'enter your prediction'}
                ]}
                >
                    <Input placeholder='prediction'/>
                </Form.Item>
                <Button type='primary' htmlType='submit' block >Submit</Button>
            </Form>
        </div>
    </div>
  )
}

export default PredictionTableRows