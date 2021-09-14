import re

target = open('nkrv_bible.txt', 'r')

for i in range(1000):
    line = target.readline()
    labelChapterParagraph, text = line.replace(' ', '&', 1).replace('\n', '').split('&')
    size = len(re.compile('[|가-힣]+').findall(labelChapterParagraph))
    chapterParagraph = labelChapterParagraph[size:].split(':')
    label, chapter, paragraph = labelChapterParagraph[0:size], chapterParagraph[0], chapterParagraph[1]
    print(label, chapter, paragraph, text)


