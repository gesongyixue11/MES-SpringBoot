package com.songpeng.sparchetype.company.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author SongPeng
 * @date 2019/9/27 16:05
 */
@RequestMapping("/client/company")
@Controller("clientCompanyController")
public class CompanyController {

    Logger log = LoggerFactory.getLogger(CompanyController.class);

    @GetMapping("/index")
    public String indexUI(Model model) {
        log.info("/index");
        return "client/company/index";
    }
}
