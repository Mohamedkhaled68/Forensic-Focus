import { motion } from "framer-motion";

const PageContainer = ({
    children,
    key,
}: {
    children: React.ReactNode;
    key: string;
}) => {
    return (
        <motion.div
            key={key}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full pt-[128px] px-[40px] z-0 bg-[#F3F3F3] rounded-sm min-h-screen"
        >
            {children}
        </motion.div>
    );
};

export default PageContainer;
