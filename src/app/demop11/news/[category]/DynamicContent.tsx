'use client';

import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import Pagination from "@/components/common/pagination";
import { newsData, BoxNewsProps } from "@/contants/news";

interface DynamicContentProps {
    newsItems?: typeof newsData;
    CATE_NAME?: string;
    layout: '2items' | '3items' | '4items' | '5items' | '6itemsUpto';
}

type NewsType = '2' | '3' | '';

const DynamicContent: React.FC<DynamicContentProps> = memo(({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    }) => {
    const [type, setType] = useState<NewsType>('');

    // Memoized sessionStorage handler
    const handleSessionStorage = useCallback(() => {
        const storedType = sessionStorage.getItem('newsType') as NewsType;
        console.log('Stored type from sessionStorage:', storedType);
        if (storedType && (storedType === '2' || storedType === '3')) {
            setType(storedType);
            // Clear after reading
            sessionStorage.removeItem('newsType');
            console.log('Type set to:', storedType);
        }
    }, []);

    useEffect(() => {
        // Get type from sessionStorage on client-side only
        handleSessionStorage();
    }, [handleSessionStorage]);

    // Memoized components for better performance
    const ContentType2: React.FC = memo(() => (
        <div className='pageType'>
            <div className="container">
                <div className="col-xs-12">
                    <div className="content_fck text-intro">
                        <p style={{textAlign: 'justify'}}>Con người là nguồn lực quý giá nhất đối với tất mọi doanh nghiệp. Ở Vinasoy, nguồn lực con người luôn được trân trọng, liên tục được phát triển không chỉ về chuyên môn, kỹ năng mà còn được bồi đắp những giá trị, phẩm chất tốt đẹp.</p>
                        <p style={{textAlign: 'justify'}}>Mỗi ứng viên ở mọi vị trí khác nhau có thể có bằng cấp, trình độ chuyên môn, kỹ năng khác nhau nhưng hình mẫu về phẩm chất cá nhân mà chúng tôi thật sự mong đợi ở mọi ứng viên tiềm năng chính là 3 yếu tố: <strong>Tính chính trực, Thích thử thách và Vì mọi người</strong>.</p>
                        <p style={{textAlign: 'justify'}}><strong>Tính chính trực (Integrity)</strong></p>
                        <p style={{textAlign: 'justify'}}>Trong sạch và đạo đức là 1 trong những giá trị cốt lõi của Vinasoy. Chính giá trị này tạo ra một môi trường làm việc minh bạch để tất mọi người được cống hiến và phát triển.</p>
                        <p style={{textAlign: 'justify'}}>Và cũng chính giá trị cốt lõi như thế, chúng tôi cần sự chính trực bởi vì chỉ những người chính trực mới có thể sống, làm việc cống hiến hết mình trong một môi trường minh bạch và ngược lại, những người chính trực mới có thể tiếp tục đóng góp và bảo tồn sự trong sạch và đạo đức của Vinasoy.</p>
                        <p style={{textAlign: 'justify'}}><strong>Chúng tôi cần những con người chính trực!</strong></p>
                        <p style={{textAlign: 'justify'}}><strong>Thích thử thách (Challenge-Minded)</strong></p>
                        <p style={{textAlign: 'justify'}}>Vinasoy mới chỉ bắt đầu hành trình của mình từ năm 1997, còn quá trẻ so với các công ty, tập đoàn lớn trong ngành FMCG trên thế giới vốn đã gần ở mức hoàn hảo với chuẩn mực cao. Vì vậy, con đường phía trước của chúng tôi tiềm ẩn rất nhiều thử thách.</p>
                        <p style={{textAlign: 'justify'}}>Chúng tôi tìm kiếm những con người năng động, mang tinh thần của chiến binh, chấp nhận mọi thử thách, sẵn sàng đương đầu với khó khăn để tìm ra giải pháp tốt hơn, nhanh hơn, thông minh hơn cho mọi vấn đề phía trước.</p>
                        <p style={{textAlign: 'justify'}}>Nếu bạn là người yêu thích thử thách, luôn hành động để biến điều chưa hoàn hảo thành những điều tốt đẹp hơn, Bạn chính là người chúng tôi đang tìm. Cùng nhau, chúng ta sẽ làm cho mọi điều tốt đẹp!</p>
                        <p style={{textAlign: 'justify'}}><strong>Vì mọi người </strong></p>
                        <p style={{textAlign: 'justify'}}>Sứ mệnh lớn lao mà Vinasoy hướng tới là "mang đến cho cộng đồng một cuộc sống ý nghĩa hơn, tốt đẹp hơn và thịnh vượng hơn".</p>
                        <p style={{textAlign: 'justify'}}>Trên bước đường thực hiện sứ mệnh đó, chúng tôi đã tạo ra một tập thể đồng lòng cùng một tinh thần Việt Nam mạnh mẽ "tương thân tương ái" không chỉ nghĩ riêng cho lợi ích của mình mà còn phục vụ cho lợi ích chung của cộng đồng xã hội.</p>
                        <p style={{textAlign: 'justify'}}>Chúng tôi tìm kiếm những con người có cùng chí hướng đó, những con người mang tinh thần một người vì mọi người để cùng xây dựng một tập thể vững mạnh và hun đúc những giá trị truyền thống tinh thần Việt.</p>
                        <p style={{textAlign: 'justify'}}>Nếu bạn là 1 trong những người như thế, Hãy gia nhập cùng Vinasoy chúng tôi.</p>
                    </div>
                </div>
            </div>
        </div>
    ));

    const ContentType3: React.FC = memo(() => (
        <div className="news-five-items">
            <div className="container">
                <div className="row">
                    {newsItems.map((item) => (
                        <div key={item.NEWS_ID} className="col-xs-12 col-sm-6 col-md-4">
                            <div 
                                className="box bg-size-cover lazyload" 
                                style={{backgroundImage: `url(${item.NEWS_PICTURE})`}} 
                            >
                                <div className="blurb">
                                    <p><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                </div>
                                <div className="excerpt">
                                    <p className="title"><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                    {item.NEWS_SUBCONTENT && <p className="note">{item.NEWS_SUBCONTENT}</p>}
                                    <p className="viewmore"><a href={item.LINK}>view detail</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fl_right mar_top10">
                    <Pagination />
                </div>
            </div>
        </div>
    ));

    // Memoized content rendering for optimal performance
    const renderedContent = useMemo(() => {
        if (type === '2') return <ContentType2 />;
        if (type === '3') return <ContentType3 />;
        return <ContentType3 />; // Default fallback
    }, [type]);

    // Debug logging
    useEffect(() => {
        console.log('Current type:', type, 'Type === "2":', type === '2', 'Type === "3":', type === '3');
    }, [type]);

    return renderedContent;
});

DynamicContent.displayName = 'DynamicContent';

export default DynamicContent;
