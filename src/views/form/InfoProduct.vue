<template>
    <section class="info-product--container font-montserrat pt-10 relative">
        <!-- Info-product -->
        <ProjectOverview 
            title="Tổng quan dự án"
            :content="[
                { text: '<span class=\'font-bold bg-gradient\'>Đổi mới</span> giao diện website,' },
                { text: 'lan tỏa <span class=\'font-bold bg-gradient\'>sự rực rỡ</span> <img class=\'w-[12vw] lg:w-auto\' src=\'' + MEDIA.images.waterSurface + '\' alt=\'Water Image\' /> và nâng cao' },
                { text: 'hiệu quả tương tác.' }
            ]"
            description="Dự án thiết kế website với giao diện mới mang đến một diện mạo tươi mới, <br>
                hiện đại, thể hiện tinh thần 'Thổi hồn vào sự rực rỡ của cuộc sống' và tối ưu<br>
                hóa hiệu quả tương tác với khách hàng. Website được xây dựng để trở thành<br>
                một công cụ mạnh mẽ hỗ trợ các hoạt động marketing và kinh doanh, đồng <br>
                thời mang đến trải nghiệm số vượt trội.<br>"
            :backgroundImages="[
                { src: MEDIA.images.pathGroup, alt: 'info-product', class: 'absolute xl:top-[15rem] md:top-20rem top-20rem left-[-50px] xl:w-auto md:w-auto w-70vw h-auto' },
                { src: MEDIA.images.ellipse, alt: 'info-product', class: 'absolute xl:top-[15rem] md:top-20rem top-20rem bottom-0 right-0 xl:w-auto md:w-auto w-50vw h-auto' }
            ]"
            :videoSrc="MEDIA.videos.showreel"
            />


        <!-- Suntory Pepsico -->
        <SuntoryPepsicoInfo 
            title="Về Suntory Pepsico"
            companyName="Suntory Pepsico"
            description="
            là một trong những doanh<br>
                        nghiệp hàng đầu trong ngành F&B tại Việt<br>
                        Nam, đồng thời tiên phong trong các hoạt<br>
                        động phát triển bền vững. Công ty luôn nỗ<br>
                        lực mang đến những sản phẩm chất lượng<br>
                        cao, đồng thời góp phần xây dựng một tương<br>
                        lai tốt đẹp hơn cho cộng đồng và môi trường.
            "
            :imageSrc="MEDIA.images.pathGroup_01"
            imageAlt="suntory-pepsico"
            :stats="[
                { number: '06', title: 'Nhà máy sản xuất', subtitle: 'Trải dài khắp Việt Nam', colSpan: 1 },
                { number: '13', title: 'Thương hiệu hàng đầu', subtitle: 'Phục vụ người Việt', colSpan: 1 },
                { colSpan: 1, empty: true }, 
                { number: '05', title: 'Văn phòng', subtitle: 'Tại tất cả các thành phố lớn', colSpan: 1 },
                { colSpan: 2, empty: true },
                { number: 'TOP 01', title: 'Công ty đồ uống', subtitle: 'Uy tín tại Việt Nam (Năm 2019-2024, theo Vietnam Report)', colSpan: 2 }
            ]"
        />

        <!-- Project Objective Slider -->
        <InfoProductSlider  
            :slides="[
                { image: MEDIA.images.imageSide_01, number: '01', text: 'Khơi gợi cảm xúc và tạo ấn tượng mạnh mẽ' },
                { image: MEDIA.images.imageSide_02, number: '02', text: 'Tối ưu trải nghiệm người dùng (UX/UI)' },
                { image: MEDIA.images.imageSide_03, number: '03', text: 'Khơi gợi cảm xúc và tạo ấn tượng mạnh mẽ' },
            ]"
            title="Tổng quan dự án"
            :description="`
                    Dự án thiết kế website mới cho Suntory Pepsico 
                    hướng đến việc &quot;đánh thức mọi giác quan&quot; của
                    người dùng, mang đến một trải nghiệm số đầy
                    cảm xúc và kết nối sâu sắc với tinh thần &quot;Thổi hồn
                    vào sự rực rỡ&quot;
            `"
            :backgroundImages="[
                { src: MEDIA.images.ellipse_19180, alt: 'info-product', class: 'absolute xl:top-[15rem] md:top-20rem top-20rem left-[-50px] xl:w-auto md:w-auto w-70vw h-auto' },
                { src: MEDIA.images.path_group_03, alt: 'info-product', class: 'absolute xl:top-[15rem] md:top-20rem top-20rem left-[-50px] xl:w-auto md:w-auto w-70vw h-auto' },
            ]"
            :arrowLeft_01="MEDIA.images.iconRight_01"
            :arrowRight_01="MEDIA.images.iconLeft_02"
        />

        <!-- Solution Experience -->
        <SolutionExperience />

        <!-- Sincere Connection -->
        <div class="info__product--sincere w-full my-20">
            <div class="solution--experience bg-white min-h-[550px] max-h-[946px]">
                <title-solution title="Kết Nối Chân Thành" content="
                    Cấu trúc thông tin rõ ràng, 
                    nội dung đa dạng, dễ tiếp cận, 
                    cung cấp cái nhìn toàn diện về thương hiệu cho khách hàng. 
                    Mục tiêu là tạo ra một không gian số thân thiện, 
                    nơi người dùng cảm thấy được lắng nghe và kết nối 
                    sâu sắc với thương hiệu." number="02" titleColor="#3882C4" contentColor="#777E91" my="5%"
                    textStroke="3px #26AAE1" />
            </div>

            <div class="info__product--sincere-content relative">
                <div class="mx-auto w-11/12 grid grid-cols-2 gap-6 md:gap-6 absolute z-10 items-end w-full">
                    <div class="col-span-1 grid items-end justify-end"> <img :src="MEDIA.images.ellipse_19180"
                            class="w-[150px] lg:w-[496px] lg:h-[496px]" alt="iconv-lite" /></div>
                    <div class="col-span-1 absolute xl:top-1/5 lg:top-[2%] md:top-9/12 top-1/5 xl:left-1/2 lg:left-[40%] md:left-7/12 left-1/2 z-0"> <img :src="MEDIA.images.iconvLite" class="w-[90px] lg:w-[281.46px] lg:h-[281.46px]"
                            alt="iconv-lite" /></div>
                </div>
                <div class="mx-auto w-11/12 grid grid-cols-3 gap-6 md:gap-6 relative">
                    <div class="col-span-1"><img :src="MEDIA.images.group_01" class="w-full relative z-10" alt="iconv-lite" /></div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1"><img :src="MEDIA.images.group_02" class="w-full relative z-10" alt="iconv-lite" /></div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1"><img :src="MEDIA.images.group_03" class="w-full relative z-10" alt="iconv-lite" /></div>
                    <div class="col-span-1"><img :src="MEDIA.images.group_04" class="w-full relative z-10" alt="iconv-lite" /></div>
                </div>
            </div>

            <!-- Split layout -->
            <div class="relative w-full mt-5">
                <div class="absolute inset-0 flex justify-center items-center">
                    <img src="@/assets/images/header/vector.png" class="opacity-40 w-[150px] lg:w-[40rem]"
                        alt="iconv-lite" />
                </div>

                <div class="mx-auto w-11/12 grid grid-cols-2 gap-2 relative z-10">
                    <div class="col-span-1">
                        <img src="@/assets/images/info/rectangle/rectangle_30413.svg" class="w-full" alt="iconv-lite" />
                    </div>
                    <div class="col-span-1">
                        <img src="@/assets/images/info/rectangle/rectangle_30412.svg" class="w-full" alt="iconv-lite" />
                    </div>
                </div>

                <!-- Video Display -->
                <div class="info__product--sincere-display relative w-full mt-5 flex justify-center">
                    <video class="w-11/12 lg:w-9/12 h-auto object-cover" autoplay loop muted playsinline>
                        <source src="@/assets/videos/Showreel_-Web-gallery-%5Bremix%5D.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>

        <!-- Testimonial Card -->
        <div
            class="info__product--testimonial-card flex justify-center items-center bg-[linear-gradient(0deg,#3882C4_0.03%,#26AAE1_100.03%)] my-40 w-full relative">
            <div class="container mx-auto w-full bg-gradient-smart xl:h-[65.69rem] lg:h-[55.96rem] md:h-[45rem] h-[26rem] relative">
                <img src="@/assets/images/info/card/card_2085665765.png"
                    class="absolute w-[40vw] lg:w-auto max-w-[40rem] min-w-[10rem] -top-[5vw] left-[10vw]"
                    alt="iconv-lite" />

                <img src="@/assets/images/info/card/card_timeline.png"
                    class="absolute top-20 right-0 w-[40vw] transform-[50%] max-w-[40rem] min-w-[10rem]"
                    alt="iconv-lite" />

                <div class="absolute text-white xl:w-[40vw] md:w-full xl:max-w-[40rem] md:max-w-[30rem] min-w-[8rem] xl:top-1/3 lg:top-[40%] md:top-1/3 top-[40%] xl:left-1/2 lg:left-[55%] md:left-[50%] left-[43%] -translate-x-2/6 -translate-y-1/6 text-left z-20">    
                    <img :src="MEDIA.images.shape_brand" alt="" class="xl:scale-100 md:scale-90 scale-70">
                    <p class="font-[Montserrat] font-bold xl:text-[32px] md:text-[24px] text-12px xl:leading-[36px] md:leading-[36px] leading-[24px] tracking-[2%] whitespace-nowrap">Điều Hướng Hhông Minh</p>
                    <p class="xl:text-[16px] md:text-14px text-6px xl:leading-[24px] md:leading-[24px] leading-[10px] tracking-[0%]">Hệ thống điều hướng được thiết kế trực <br>
                        quan, dễ sử dụng, giúp khách hàng nhanh <br>
                        chóng tìm thấy thông tin về sản phẩm, tin <br>
                        tức.
                    </p>
                    <p class="xl:text-[16px] md:text-14px text-6px xl:leading-[24px] md:leading-[24px] leading-[10px] tracking-[0%]">Sử dụng CTA rõ ràng, hấp dẫn, hướng dẫn <br>
                        người dùng thực hiện hành động mong <br>
                        muốn.
                    </p>
                </div>

                <img src="@/assets/images/info/card/card.png"
                    class="absolute w-[30vw] lg:w-auto max-w-[40rem] min-w-[8rem] xl:top-[15vw] md:top-[25vw] top-[25vw] max-top-[40rem] min-top-[10rem] left-0"
                    alt="iconv-lite" />

                <img src="@/assets/images/info/card/card_2085665767.png"
                    class="absolute w-[30vw] lg:w-auto max-w-[40rem] min-w-[8rem] md:top-[45vw] xl:top-[22vw] top-[50vw] max-top-[40rem] min-top-[10rem] xl:right-1/10 md:right-0 right-0 z-10"
                    alt="iconv-lite" />
            </div>
            <div class="">
                <div><img :src="MEDIA.images.rectangleHeader" alt="" class="absolute left-0 bottom-0 w-full"></div>
                <div class="container"><img :src="MEDIA.images.nature" alt="" class="absolute top-80 right-15 lg:right-140 lg:w-auto lg:max-w-full lg:top-[45rem] z-1 w-[70vw] transform-[50%] max-w-[40rem] min-w-[10rem]"></div>
                <div><img :src="MEDIA.images.path_group_04" alt="" class="absolute left-0 bottom-[-2%] xl:w-[371px] xl:h-[390px] lg:w-[23vw] md:w-[20vw] w-25vw"></div>
                <div class="max-w-12"><img :src="MEDIA.images.path_group_05" alt="" class="absolute xl:right-0 md:right-0 right-[-4%] xl:bottom-[-10%] md:bottom-[-15%] md:bottom-[-25%] bottom-[-35%] w-[full] h-[390px] z-0 xl:scale-100 scale-70"></div>
            </div>
        </div>
        <!-- Water bottle card -->
        <div class="relative w-full flex flex-col mt-50 lg:mt-100 gap-10">
            <div class="flex flex-col items-center gap-8">
                <div class="flex flex-col items-center gap-6">
                    <img :src="MEDIA.images.card_image_03" alt="">
                    <img :src="MEDIA.images.shape_brand" alt="">
                </div>
                <div class="flex flex-col text-center w-1/2 gap-6">
                    <span class="text-[#124B96] xl:text-32px lg:text-32px md:text-24px text-18px xl:leading-[24px] md:leading-[24px] leading-[18px] tracking-[2%] font-semibold">Tương Tác Thú Vị</span>
                    <span class="text-[#777E91] xl:text-24px lg:text-20px md:text-18px text-12px xl:leading-32px md:leading-32px leading-18px">Chú trọng đến các tương tác nhỏ như hover effect, click animation, transition để tạo cảm giác sống động và thú vị.</span>
                </div>
            </div>
            <div class="grid col-span-2 row-span-2 gap-x-8 p-10 bg-gradient-water-bottle-card relative">
                <div class="col-start-1 row-start-1 flex justify-end relative z-10"><img :src="MEDIA.images.card_image_01" alt="" class="xl:w-fit md:w-35vw w-35vw"></div>
                <div class="col-start-2 row-start-2 -my-10 relative z-10"><img :src="MEDIA.images.card_image_02" alt="" class="xl:w-fit md:w-35vw w-35vw"></div>
                <div class="absolute xl:top-1/6 xl:left-1/3 lg:top-0 md:top-[-10%] md:left-1/4 top-[-50%] xl:scale-100 lg:scale-70 md:scale-60 scale-30"><img :src="MEDIA.images.vector_water" alt=""></div>
            </div>
            <div class="pt-10 relative">
                <img :src="MEDIA.images.forest" alt="" class="w-full">
                <img :src="MEDIA.images.arrow" alt="" class="absolute left-0 top-0 xl:w-fit md:w-30vw w-30vw">
            </div>
        </div>
        <MobileSection />
    </section>
</template>

<script setup lang="ts">
import SolutionExperience from './SolutionExperience.vue';
import TitleSolution from "../../components/TitleSolution.vue";
import MobileSection from './MobileSection.vue';
import ProjectOverview from './../components/ProjectOverview.vue';
import SuntoryPepsicoInfo from './../components/SuntoryPepsicoInfo.vue';
import InfoProductSlider from './../components/InfoProductSlider.vue';
import { MEDIA } from './../../constants/media';
</script>