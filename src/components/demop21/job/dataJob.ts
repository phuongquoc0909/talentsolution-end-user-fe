export interface JobItem {
    JOB_ID: number;
    JOB_LOGO: string;
    JOB_IMAGE_DEFAULT: string;
    JOB_TITLE: string;
    LINK: string;
    COMPANY_NAME: string;
    COMPANY_URL: string;
    JOB_LOCATION: string;
    JOB_LEVEL: string;
    JOB_TYPE: string;
    JOB_QUALIFICATION: string;
    JOB_EXPERIENCE: string;
    JOB_SALARY: string;
    JOB_INDUSTRIES: string;
    JOB_DEPARTMENT: string;
    WORK_TYPE: string;
    JOB_ACTIVEDATE: Date;
    JOB_EXPIREDATE: Date;
    JOB_CONTACT_NAME: string;
    JOB_CONTENT: string;
    JOB_REQUIRESKILL: string;
    LINK_FACEBOOK: string;
    LINK_LINKEDIN: string;
    LINK_TWITTER: string;
    isHot?: number;
    BENEFIT: number[];
    JOB_TAGS: {
        TAG_NAME: string;
        TAG_URL: string;
    }[];
}

export const jobData: JobItem[] = [
    {
        JOB_ID: 428737,
        JOB_LOGO: "https://static.talentnetwork.vn/talentnetwork/source/vinasoy/images/logo-default.png",
        JOB_IMAGE_DEFAULT: "/images/job/Image1.jpg",
        JOB_TITLE: "Nhân viên bán hàng thị trường - Kênh truyền thống",
        LINK: "/demop21/jobs/428737",
        COMPANY_NAME: "Internal Audit dept",
        COMPANY_URL: "https://tuyendung.vcbs.com.vn/job-search/department-internal-audit-dept.6276/en",
        JOB_LOCATION: "Ho Chi Minh",
        JOB_LEVEL: "Experienced (Non - Manager)",
        JOB_TYPE: "Full Time",
        JOB_QUALIFICATION: "Bachelor's Degree",
        JOB_EXPERIENCE: "1-3 years",
        JOB_SALARY: "Competitive",
        JOB_INDUSTRIES: "Retail / Wholesale, Sales / Business Development, Marketing",
        JOB_DEPARTMENT: "Internal Audit dept",
        WORK_TYPE: "Work From Home",
        JOB_ACTIVEDATE: new Date("2025-10-12"),
        JOB_EXPIREDATE: new Date("11/12/2025"),
        JOB_CONTACT_NAME: "HR Dept.",
        JOB_CONTENT: 
        `
        <p><u><strong>Trách nhiệm:</strong></u></p>
        <ul>
            <li>Thực hiện hoặc tổ chức thực hiện việc nhập - xuất hàng hóa; Quản lý, sắp xếp và bảo quản hàng hóa; Thực hiện 5S, kaizen khu vực đảm nhiệm;</li>
        </ul>
        <p><u><strong><em>Nhiệm vụ</em>:</strong></u></p>
        <ul>
            <li>Thực hiện hoặc tổ chức thực hiện việc nhập – xuất vật tư, hàng hóa theo đúng quy định: đúng quy trình quản lý kho, nguyên tắc FIFO;</li>
            <li>Bảo quản hàng hóa đúng quy định, đề xuất kiểm tra vật tư, hàng hóa tồn kho lâu ngày theo định kỳ;</li>
            <li>Quản lý số lượng hàng tồn kho</li>
            <li>Layout, sắp xếp hàng hóa khoa học&nbsp;</li>
            <li>Quản lý trang thiết bị đảm bảo số lượng, chất lượng, vị trí layout, sắp xếp đúng quy định;</li>
            <li>Thực hiện lưu trữ, bảo quản tài liệu, hồ sơ theo nhiệm vụ được giao;</li>
            <li>Lập báo cáo định kỳ &amp; báo cáo chuyên môn theo yêu cầu</li>
        </ul>
        <p><strong>Địa điểm làm việc:</strong></p>
        <ul>
            <li><strong>Công ty CP Tân Hà Phát Công Nghiệp - Đường N1 – Khu CN Yên Mỹ II – Thị Trần Yên Mỹ - Tỉnh Hưng Yên</strong></li>
        </ul>
        <script>
            console.log('Hello, world!');
        </script>
        `,
        JOB_REQUIRESKILL:
        `
        <ul>
            <li>Tốt nghiệp đại học trở lên chuyên ngành công nghệ, hóa sinh hoặc ngành liên quan ….</li>
            <li>Có kinh nghiệm làm việc từ 5 năm trở lên ở vị trí trưởng nhóm hoặc tương đương</li>
            <li>Làm trong phòng thí nghiệm từ 2 năm trở lên, có chứng chỉ 17025, kinh nghiệm tiếp đoàn đánh giá ( Audit)</li>
            <li>Có kiến thức về Quy trình chất lượng, sản xuất, các hệ thống quản lý …</li>
        </ul>
        `,
        LINK_FACEBOOK: "https://www.facebook.com/vinasoy",
        LINK_LINKEDIN: "https://www.linkedin.com/company/vinasoy",
        LINK_TWITTER: "https://www.twitter.com/vinasoy",
        isHot: 1,
        BENEFIT: [1, 2, 3],
        JOB_TAGS: [
            {
                TAG_NAME: "Chuyên viên QC nguyên vật liệu",
                TAG_URL: "https://career.vinasoy.com/en/tag/chuyen-vien-qc-nguyen-vat-lieu.html",
            },
            {
                TAG_NAME: "Kiểm soát chất lượng",
                TAG_URL: "https://career.vinasoy.com/en/tag/kiem-soat-chat-luong.html",
            },
            {
                TAG_NAME: "Hóa lý",
                TAG_URL: "https://career.vinasoy.com/en/tag/hoa-ly.html",
            },
            {
                TAG_NAME: "Quản lý kho",
                TAG_URL: "https://career.vinasoy.com/en/tag/quan-ly-kho.html",
            }
        ],
    },
    {
        JOB_ID: 433930,
        JOB_LOGO: "https://static.talentnetwork.vn/talentnetwork/source/vinasoy/images/logo-default.png",
        JOB_IMAGE_DEFAULT: "https://image.talentnetwork.vn/geet//job/image/2025/09/11/1757578731_r.jpg",
        JOB_TITLE: "Senior Developer - Full Stack",
        LINK: "/demop21/jobs/433930",
        COMPANY_NAME: "",
        COMPANY_URL: "https://vinasoy.com/",
        JOB_LOCATION: "Ho Chi Minh, Ha Noi",
        JOB_LEVEL: "Experienced (Non - Manager)",
        JOB_TYPE: "Full Time",
        JOB_QUALIFICATION: "Bachelor's Degree",
        JOB_EXPERIENCE: "1-3 years",
        JOB_SALARY: "1,500 USD",
        JOB_INDUSTRIES: "Retail / Wholesale, Sales / Business Development, Marketing",
        JOB_DEPARTMENT: "Him Lam International School, Him Lam Green Park, Dai Phuc, Bac Ninh",
        WORK_TYPE: "Work From Home",
        JOB_ACTIVEDATE: new Date("2025-02-11"),
        JOB_EXPIREDATE: new Date("11/12/2026"),
        JOB_CONTACT_NAME: "HR Dept.",
        JOB_CONTENT:
        `
        <ul>
            <li>Phát triển và duy trì các ứng dụng web full-stack</li>
            <li>Làm việc với React.js, Node.js, và các công nghệ hiện đại</li>
            <li>Thiết kế và triển khai API RESTful</li>
            <li>Làm việc nhóm và giao tiếp với các bộ phận khác</li>
            <li>Code review và đảm bảo chất lượng code</li>
        </ul>
        `,
        JOB_REQUIRESKILL:
        `
        <ul>
            <li>Tốt nghiệp đại học ngành Công nghệ thông tin hoặc tương đương</li>
            <li>Kinh nghiệm 2-5 năm phát triển full-stack</li>
            <li>Thành thạo React.js, Node.js, JavaScript/TypeScript</li>
            <li>Kinh nghiệm với database (MySQL, MongoDB)</li>
            <li>Kỹ năng làm việc nhóm và giao tiếp tốt</li>
        </ul>
        `,
        LINK_FACEBOOK: "https://www.facebook.com/vinasoy",
        LINK_LINKEDIN: "https://www.linkedin.com/company/vinasoy",
        LINK_TWITTER: "https://www.twitter.com/vinasoy",
        BENEFIT: [3, 5, 8, 6],
        JOB_TAGS: [
            {
                TAG_NAME: "React.js",
                TAG_URL: "https://career.vinasoy.com/en/tag/react-js.html",
            },
            {
                TAG_NAME: "Node.js",
                TAG_URL: "https://career.vinasoy.com/en/tag/node-js.html",
            },
            {
                TAG_NAME: "Full Stack Developer",
                TAG_URL: "https://career.vinasoy.com/en/tag/full-stack-developer.html",
            },
            {
                TAG_NAME: "JavaScript",
                TAG_URL: "https://career.vinasoy.com/en/tag/javascript.html",
            }
        ],
    },
    {
        JOB_ID: 433152,
        JOB_LOGO: "https://static.talentnetwork.vn/talentnetwork/source/vinasoy/images/logo-default.png",
        JOB_IMAGE_DEFAULT: "/images/job/Image18.jpg",
        JOB_TITLE: "Marketing Manager",
        LINK: "/demop21/jobs/433152",
        COMPANY_NAME: "Vinasoy",
        COMPANY_URL: "https://vinasoy.com/",
        JOB_LOCATION: "Ho Chi Minh",
        JOB_LEVEL: "Experienced (Non - Manager)",
        JOB_TYPE: "Full Time",
        JOB_QUALIFICATION: "Bachelor's Degree",
        JOB_EXPERIENCE: "1-3 years",
        JOB_SALARY: "20,000,000 - 30,000,000 VND",
        JOB_INDUSTRIES: "Retail / Wholesale, Sales / Business Development, Marketing",
        JOB_DEPARTMENT: "Marketing Department",
        WORK_TYPE: "Work From Home",
        JOB_ACTIVEDATE: new Date("2025-10-08"),
        JOB_EXPIREDATE: new Date("2/11/2028"),
        JOB_CONTACT_NAME: "HR Dept.",
        JOB_CONTENT:
        `
        <ul>
            <li>Xây dựng và thực hiện chiến lược marketing tổng thể</li>
            <li>Quản lý ngân sách marketing và đo lường ROI</li>
            <li>Phát triển các chiến dịch quảng cáo trên nhiều kênh</li>
            <li>Làm việc với team creative để tạo nội dung marketing</li>
            <li>Phân tích thị trường và đối thủ cạnh tranh</li>
            <li>Quản lý team marketing và đào tạo nhân viên</li>
        </ul>
        `,
        JOB_REQUIRESKILL:
        `
        <p style="margin-left:40px"><strong>Yêu cầu năng lực</strong></p>
        <ul>
            <li><strong>Trình độ đào tạo:</strong>Tốt nghiệp Đại học trở lên một trong các chuyên ngành sau: Tự động hóa, Điện, Điện lạnh, Cơ khí.</li>
            <li><strong>Kinh nghiệm:&nbsp;</strong>Tối thiểu 02 năm kinh nghiệm làm việc trong lĩnh vực Tự động hóa, Điện, Điện lạnh, Cơ khí. Trong đó có tối thiểu 01 năm kinh nghiệm làm việc tại công trình.&nbsp;</li>
            <li><strong>Ngoại ngữa và Tin học Văn phòng:</strong>
            <ul style="margin-left:40px">
                <li>Thành thạo sử dụng các chức năng cơ bản của các công cụ liên lạc thông dụng ( Zalo, Messenger, teams...).</li>
                <li>Giao tiếp tiếng Anh.</li>
            </ul>
            </li>
            <li><strong>Phẩm chất/ Tính cách:</strong>
            <ul style="margin-left:40px">
                <li>Cẩn thận, kiên trì, chịu khó và ham học hỏi.</li>
                <li>Nhanh nhẹn, tháo vát; Khả năng tập trung cao.</li>
            </ul>
            </li>
        </ul>
        <p><strong>Chế độ phúc lợi:</strong></p>
        <ul>
            <li>Lương: Thỏa thuận&nbsp;</li>
            <li>Phụ cấp: Ăn trưa / Điện thoại/ Di Chuyển</li>
            <li>Thưởng: thưởng 1 tháng lương/ năm, thưởng kết quả kinh doanh, thi đua, thưởng các ngày Lễ, Tết, thưởng cổ phần nếu là cán bộ chủ chốt.</li>
            <li>Phúc lợi được hưởng:
            <ul style="margin-left:40px">
                <li>Chế độ Bảo hiểm xã hội, Bảo hiểm y tế, Bảo hiểm thất nghiệp theo quy định của luật Lao động;</li>
                <li>Bảo hiểm tai nạn 24 / 24 và các chế độ đãi ngộ khác theo quy định của Công ty;</li>
                <li>Chế độ sinh nhật, nghỉ mát hàng năm, chế độ dành cho gia đình của cán bộ công nhân viên của Công ty.</li>
            </ul>
            </li>
        </ul>
        <p><strong>Cơ hội khác</strong></p>
        <ul style="margin-left:40px">
            <li>Môi trường làm việc thân thiện, chuyên nghiệp;</li>
            <li>Được đào tạo chuyên môn và kỹ năng liên quan.</li>
            <li>Hiểu biết sâu về chuyên môn ngành Bếp, Khách sạn và Du lịch;</li>
            <li>Phát triển năng lực các nhân và mối quan hệ xã hội;</li>
        </ul>
        <p><strong>Thông tin liên hệ:</strong></p>
        <ul>
            <li>Ms Huyền&nbsp;– Bộ phận tuyển dụng</li>
            <li>Tel: 02437.656.979 – 101 - 0949.828.111</li>
            <li>Mail:&nbsp;<a href="mailto:tuyendung@hayencorp.vn" style="box-sizing: border-box; margin: 0px; padding: 0px; background-color: transparent; color: rgb(51, 51, 51); text-decoration-line: none; outline: 0px; transition: all 0.3s ease; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 10pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">tuyendung@hayencorp.v</a>n</li>
        </ul>
        <p>&nbsp;</p>
        `,
        LINK_FACEBOOK: "https://www.facebook.com/vinasoy",
        LINK_LINKEDIN: "https://www.linkedin.com/company/vinasoy",
        LINK_TWITTER: "https://www.twitter.com/vinasoy",
        BENEFIT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        JOB_TAGS: [
            {
                TAG_NAME: "Digital Marketing",
                TAG_URL: "https://career.vinasoy.com/en/tag/digital-marketing.html",
            },
            {
                TAG_NAME: "SEO/SEM",
                TAG_URL: "https://career.vinasoy.com/en/tag/seo-sem.html",
            },
            {
                TAG_NAME: "Social Media",
                TAG_URL: "https://career.vinasoy.com/en/tag/social-media.html",
            },
            {
                TAG_NAME: "Marketing Strategy",
                TAG_URL: "https://career.vinasoy.com/en/tag/marketing-strategy.html",
            }
        ],
    }
];
