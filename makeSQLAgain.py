import re

original = open('nkrv_bible.txt', 'r')
line = original.readline()
sqlFile = open('nkrv_bible.sql', 'w')

sqlFile.write('create table bible3 (\n'
              '\tid int primary key,\n'
              '\tlabel varchar(8) not null,\n'
              '\tchapter int not null,\n'
              '\tparagraph int not null,\n'
              '\tsentence varchar(300) not null\n);\n\n')

sqlFile.write('insert into bible3 values')
sqlFile.write('\n')
i = 0


while line:
    if line == '\n':
        line = original.readline()
        continue
    labelChapterParagraph, sentence = line.replace(' ', '&', 1).replace('\n', '').replace('[', '').replace(']', '').split('&')
    sentence = re.sub('<[^>]*> ', '', sentence)
    size = len(re.compile('[|가-힣]+').findall(labelChapterParagraph)[0])
    chapterParagraph = labelChapterParagraph[size:].split(':')
    label, chapter, paragraph = labelChapterParagraph[0:size], chapterParagraph[0], chapterParagraph[1]
    if label == '창':
        label = '창세기'
    elif label == '출':
        label = '출애굽기'
    elif label == '레':
        label = '레위기'
    elif label == '민':
        label = '민수기'
    elif label == '신':
        label = '신명기'
    elif label == '수':
        label = '여호수아'
    elif label == '삿':
        label = '사사기'
    elif label == '룻':
        label = '룻기'
    elif label == '삼상':
        label = '사무엘상'
    elif label == '삼하':
        label = '사무엘하'
    elif label == '왕상':
        label = '열왕기상'
    elif label == '왕하':
        label = '열왕기하'
    elif label == '대상':
        label = '역대상'
    elif label == '대하':
        label = '역대하'
    elif label == '스':
        label = '에스라'
    elif label == '느':
        label = '느헤미야'
    elif label == '에':
        label = '에스더'
    elif label == '욥':
        label = '욥기'
    elif label == '시':
        label = '시편'
    elif label == '잠':
        label = '잠언'
    elif label == '전':
        label = '전도서'
    elif label == '아':
        label = '아가'
    elif label == '사':
        label = '이사야'
    elif label == '렘':
        label = '예레미야'
    elif label == '애':
        label = '예레미야애가'
    elif label == '겔':
        label = '에스겔'
    elif label == '단':
        label = '다니엘'
    elif label == '호':
        label = '호세아'
    elif label == '욜':
        label = '요엘'
    elif label == '암':
        label = '아모스'
    elif label == '옵':
        label = '오바댜'
    elif label == '욘':
        label = '요나'
    elif label == '미':
        label = '미가'
    elif label == '나':
        label = '나훔'
    elif label == '합':
        label = '하박국'
    elif label == '습':
        label = '스바냐'
    elif label == '학':
        label = '학개'
    elif label == '슥':
        label = '스가랴'
    elif label == '말':
        label = '말라기'
    elif label == '마':
        label = '마태복음'
    elif label == '막':
        label = '마가복음'
    elif label == '눅':
        label = '누가복음'
    elif label == '요':
        label = '요한복음'
    elif label == '행':
        label = '사도행전'
    elif label == '롬':
        label = '로마서'
    elif label == '고전':
        label = '고린도전서'
    elif label == '고후':
        label = '고린도후서'
    elif label == '갈':
        label = '갈라디아서'
    elif label == '엡':
        label = '에베소서'
    elif label == '빌':
        label = '빌립보서'
    elif label == '골':
        label = '골로새서'
    elif label == '살전':
        label = '데살로니가전서'
    elif label == '살후':
        label = '데살로니가후서'
    elif label == '딤전':
        label = '디모데전서'
    elif label == '딤후':
        label = '디모데후서'
    elif label == '딛':
        label = '디도서'
    elif label == '몬':
        label = '빌레몬서'
    elif label == '히':
        label = '히브리서'
    elif label == '약':
        label = '야고보서'
    elif label == '벧전':
        label = '베드로전서'
    elif label == '벧후':
        label = '베드로후서'
    elif label == '요일':
        label = '요한일서'
    elif label == '요이':
        label = '요한이서'
    elif label == '요삼':
        label = '요한삼서'
    elif label == '유':
        label = '유다서'
    elif label == '계':
        label = '요한계시록'
    else:
        print('에러:' + label + ' ' + str(labelChapterParagraph))
    sqlFile.write(
        f"({i}, '{label}', {chapter}, {paragraph}, '{sentence}'),\n"
    )
    i += 1
    line = original.readline()

