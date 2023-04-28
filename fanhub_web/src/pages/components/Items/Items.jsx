import NFTCardsList from "../../components/HotProducts/NFTCardsList";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  parentNFTVariants,
  parentVariants,
  childVariants,
} from "../../animations/hotProducts";
function Items() {
  return (
    <>
      <section className="p-4 pb-24 text-white">
        <div className="container max-w-6xl mx-auto overflow-hidden">
          <div className="flex flex-col items-center space-y-8">
            {/* Collection of NFTs */}
            <motion.div
              variants={parentNFTVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {/* Card 1 */}
              <NFTCardsList />
            </motion.div>
            <div className="md:flex items-center space-x-2 text-slate-400 font-semibold hidden  ">
              <p>Explore All Items</p>
              <AiOutlineArrowRight size={12} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Items;
