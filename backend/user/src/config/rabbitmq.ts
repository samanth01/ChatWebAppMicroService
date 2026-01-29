import amqplib from "amqplib"


let channel: amqplib.Channel;


export const  connectRabbitMQ = async()=>{


    try {

        const connection = await amqplib.connect({
            protocol: "amqp",
            hostname: process.env.RABBITMQ_HOSTNAME,
            port : 5672,
            username: process.env.RABBITMQ_USERNAME,
            password: process.env.RABBITMQ_PASSWORD
        })


        channel = await connection.createChannel()

        console.log("✅Connected to RABBITMQ!!");


        
        
    } catch (error) {
        console.log("Failed to connect to rabbitmq", error);
        
    }
}


export const publishToQueue = async(queueName:string, message:any)=>{

    if(!channel){
        console.log("Rabbitmq channel is not initialized");
        
    }

    await channel.assertQueue(queueName, {durable:true});

    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)),
       { persistent: true})
}