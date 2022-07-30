import { motion } from "framer-motion";

export default function VisibilityMotion(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            {props.component}
        </motion.div>
    );
};